import { useState, useCallback } from "react";
import { SKILLS, LEVEL_EXP, getUnitStats, getTileColor } from "../data/gameData";
import { UnitAvatar, XiuXiuAvatar, PoPoAvatar } from "./Avatars";

function getRange(unit, r) {
  const cells = [];
  for (let dx = -r; dx <= r; dx++) {
    for (let dy = -r; dy <= r; dy++) {
      if (Math.abs(dx) + Math.abs(dy) <= r) {
        const nx = unit.x + dx, ny = unit.y + dy;
        if (nx >= 0 && ny >= 0) cells.push(`${nx},${ny}`);
      }
    }
  }
  return cells;
}

function checkLevel(hero, addLog) {
  let h = { ...hero };
  while (h.lv < LEVEL_EXP.length && h.exp >= LEVEL_EXP[h.lv]) {
    h.lv++;
    h.atk  += h.cls === "assassin" ? 4 : 3;
    h.def  += 2;
    h.maxHp += h.cls === "assassin" ? 8 : 6;
    h.hp   = Math.min(h.hp + 10, h.maxHp);
    h.maxMp += 5;
    h.skillPoints = (h.skillPoints || 0) + 2;
    h.statPoints  = (h.statPoints  || 0) + 3;
    addLog(`🎉 ${h.name} 升到 Lv${h.lv}！获得技能点×2、属性点×3`);
  }
  return h;
}

const TILE_MOBILE = 52;
const TILE_DESK   = 60;

export default function BattleScreen({
  level, initUnits, heroes, isMobile,
  onVictory, onGameOver, onBondGain,
}) {
  const TILE = isMobile ? TILE_MOBILE : TILE_DESK;

  const [units,        setUnits]       = useState(initUnits);
  const [food,         setFood]        = useState([...(level.food||[])]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [movedUnits,   setMovedUnits]   = useState([]);
  const [attackedUnits,setAttackedUnits] = useState([]);
  const [skillMode,    setSkillMode]    = useState(null);
  const [turn,         setTurn]         = useState("player");
  const [cooldowns,    setCooldowns]    = useState({});
  const [log,          setLog]          = useState([`第${level.id}关「${level.name}」开始！`]);
  const [inventory,    setInventory]    = useState([]);
  const [gold,         setGold]         = useState(0);
  const [phase,        setPhase]        = useState("battle");

  const addLog = useCallback(msg => setLog(l => [msg, ...l].slice(0, 8)), []);

  const sel = selectedUnit ? units.find(u => u.id === selectedUnit) : null;
  const moveRange  = sel && !movedUnits.includes(sel.id)   ? getRange(sel, sel.mov)   : [];
  const atkRange   = sel && !attackedUnits.includes(sel.id) ? getRange(sel, sel.range) : [];
  const skRange    = skillMode ? getRange(units.find(u => u.id === skillMode.unitId), SKILLS[skillMode.skillId].range) : [];

  function doVictory(finalUnits, inv, gld) {
    setPhase("victory");
    const lvl = level;
    let newInv = [...inv], newGold = gld + lvl.reward.gold;
    if (lvl.reward.item) { newInv.push(lvl.reward.item); addLog(`🏆 奖励：${lvl.reward.item}`); }
    onVictory(finalUnits.filter(u => u.type === "player"), newInv, newGold);
  }

  function handleCell(x, y) {
    if (turn !== "player" || phase !== "battle") return;

    // 技能模式
    if (skillMode) {
      const caster = units.find(u => u.id === skillMode.unitId);
      const sk = SKILLS[skillMode.skillId];
      if (!skRange.includes(`${x},${y}`)) { setSkillMode(null); return; }

      let newUnits = [...units];
      const stats  = getUnitStats(caster);

      if (sk.heal) {
        const target = newUnits.find(u => u.hp > 0 && u.x === x && u.y === y && u.type === "player");
        if (!target) { setSkillMode(null); return; }
        const tStats = getUnitStats(target);
        const healRate = 0.25 + (target.unlockedSkillNodes?.includes("p3") ? 0.1 : 0);
        const heal = Math.floor(tStats.maxHp * healRate);
        newUnits = newUnits.map(u => u.id === target.id ? { ...u, hp: Math.min(u.hp + heal, tStats.maxHp) } : u);
        addLog(`💚 ${caster.name}【${sk.name}】→ ${target.name} +${heal}HP`);
        onBondGain?.(3);
      } else if (sk.aoe) {
        const targets = newUnits.filter(u => u.hp > 0 && u.type === "enemy" && getRange({ x, y }, 1).includes(`${u.x},${u.y}`));
        targets.forEach(t => {
          const dmg = sk.fn(stats.atk, t.def);
          newUnits = newUnits.map(u => u.id === t.id ? { ...u, hp: Math.max(0, u.hp - dmg) } : u);
          addLog(`✨ ${caster.name}【${sk.name}】→ ${t.name} -${dmg}HP`);
        });
        onBondGain?.(2);
      } else {
        const target = newUnits.find(u => u.hp > 0 && u.x === x && u.y === y && u.type === "enemy");
        if (!target) { setSkillMode(null); return; }
        const dmg = sk.fn(stats.atk, target.def);
        newUnits = newUnits.map(u => u.id === target.id ? { ...u, hp: Math.max(0, u.hp - dmg) } : u);
        addLog(`✨ ${caster.name}【${sk.name}】→ ${target.name} -${dmg}HP`);
        onBondGain?.(2);
      }

      // MP 消耗
      const mpCost = Math.max(0, sk.mp - (caster.mpDiscount || 0));
      newUnits = newUnits.map(u => u.id === caster.id ? { ...u, mp: Math.max(0, u.mp - mpCost) } : u);

      // 处理击杀掉落
      let newInv = [...inventory], newGold = gold;
      newUnits.filter(u => u.type === "enemy" && u.hp <= 0).forEach(d => {
        const orig = level.enemies.find(e => e.id === d.id);
        if (orig?.drop && !inventory.includes(orig.drop)) { newInv.push(orig.drop); addLog(`🎁 获得：${orig.drop}`); }
        newGold += orig?.exp || 10;
      });

      const aliveEn = newUnits.filter(u => u.type === "enemy" && u.hp > 0);
      setInventory(newInv); setGold(newGold);
      setUnits(newUnits);
      setAttackedUnits(a => [...a, caster.id]);
      setCooldowns(c => ({ ...c, [`${caster.id}_${skillMode.skillId}`]: 2 }));
      setSkillMode(null);
      if (aliveEn.length === 0) doVictory(newUnits, newInv, newGold);
      return;
    }

    const unitHere = units.find(u => u.hp > 0 && u.x === x && u.y === y);

    // 选择己方单位
    if (unitHere?.type === "player") {
      setSelectedUnit(prev => prev === unitHere.id ? null : unitHere.id);
      return;
    }

    if (!sel || sel.hp <= 0) return;
    const selStats  = getUnitStats(sel);

    // 普通攻击
    if (unitHere?.type === "enemy" && atkRange.includes(`${x},${y}`)) {
      if (attackedUnits.includes(sel.id)) return;
      const crit     = Math.random() * 100 < (sel.crit || 0);
      const rawDmg   = selStats.atk - unitHere.def + Math.floor(Math.random() * 8) - 3;
      const dmg      = Math.max(1, crit ? Math.floor(rawDmg * 1.5) : rawDmg);
      let newUnits   = units.map(u => u.id === unitHere.id ? { ...u, hp: Math.max(0, u.hp - dmg) } : u);
      addLog(`⚔ ${sel.name} 攻击 ${unitHere.name} -${dmg}HP${crit ? " 暴击!" : ""}`);
      onBondGain?.(1);

      let newInv = [...inventory], newGold = gold, expGain = 0;
      newUnits.filter(u => u.type === "enemy" && u.hp <= 0 && units.find(o => o.id === u.id && o.hp > 0)).forEach(d => {
        const orig = level.enemies.find(e => e.id === d.id);
        if (orig?.drop && !newInv.includes(orig.drop)) { newInv.push(orig.drop); addLog(`🎁 获得：${orig.drop}`); }
        newGold  += orig?.exp || 10;
        expGain  += orig?.exp || 10;
      });

      newUnits = newUnits.map(u => {
        if (u.id !== sel.id) return u;
        return checkLevel({ ...u, exp: (u.exp || 0) + (expGain > 0 ? expGain : 3) }, addLog);
      });

      setInventory(newInv); setGold(newGold);
      setUnits(newUnits);
      setAttackedUnits(a => [...a, sel.id]);
      const aliveEn = newUnits.filter(u => u.type === "enemy" && u.hp > 0);
      if (aliveEn.length === 0) doVictory(newUnits, newInv, newGold);
      return;
    }

    // 移动
    if (moveRange.includes(`${x},${y}`) && !units.find(u => u.hp > 0 && u.x === x && u.y === y)) {
      let newFood = [...food], collected = [];
      const fHere = food.find(f => f.x === x && f.y === y);
      if (fHere) {
        newFood = newFood.filter(f => !(f.x === x && f.y === y));
        const healAmt = fHere.type === "fish" ? 15 : 20;
        setUnits(prev => prev.map(u => u.id === sel.id
          ? { ...u, x, y, hp: Math.min(u.hp + healAmt, getUnitStats(u).maxHp) }
          : u
        ));
        addLog(`${fHere.type==="fish"?"🐟":"🥩"} ${sel.name} 拾取食物 +${healAmt}HP`);
      } else {
        setUnits(prev => prev.map(u => u.id === sel.id ? { ...u, x, y } : u));
      }
      setFood(newFood);
      setMovedUnits(m => [...m, sel.id]);
    }
  }

  function endTurn() {
    if (turn !== "player" || phase !== "battle") return;
    setTurn("enemy");

    setTimeout(() => {
      setUnits(prev => {
        let us = [...prev];
        // 冷却递减
        setCooldowns(c => {
          const nc = { ...c };
          Object.keys(nc).forEach(k => { nc[k] = Math.max(0, nc[k] - 1); if (nc[k] === 0) delete nc[k]; });
          return nc;
        });

        us.filter(u => u.type === "enemy" && u.hp > 0).forEach(en => {
          const players = us.filter(u => u.type === "player" && u.hp > 0);
          if (!players.length) return;
          const tgt = players.reduce((a, b) =>
            Math.abs(a.x - en.x) + Math.abs(a.y - en.y) < Math.abs(b.x - en.x) + Math.abs(b.y - en.y) ? a : b
          );
          const dist = Math.abs(tgt.x - en.x) + Math.abs(tgt.y - en.y);
          if (dist <= en.range) {
            const dmg = Math.max(1, en.atk - tgt.def + Math.floor(Math.random() * 6) - 2);
            us = us.map(u => u.id === tgt.id ? { ...u, hp: Math.max(0, u.hp - dmg) } : u);
            addLog(`👾 ${en.name} 攻击 ${tgt.name} -${dmg}HP`);
          } else {
            let nx = en.x, ny = en.y;
            for (let i = 0; i < en.mov; i++) {
              const tx = nx + (Math.abs(tgt.x - nx) >= Math.abs(tgt.y - ny) ? Math.sign(tgt.x - nx) : 0);
              const ty = ny + (Math.abs(tgt.x - nx) <  Math.abs(tgt.y - ny) ? Math.sign(tgt.y - ny) : 0);
              if (tx >= 0 && tx < level.cols && ty >= 0 && ty < level.rows &&
                  !us.find(u => u.hp > 0 && u.x === tx && u.y === ty)) {
                nx = tx; ny = ty;
              }
            }
            us = us.map(u => u.id === en.id ? { ...u, x: nx, y: ny } : u);
          }
        });

        const allDead = us.filter(u => u.type === "player").every(u => u.hp <= 0);
        if (allDead) { setPhase("gameover"); onGameOver?.(); }

        return us;
      });

      setTurn("player");
      setMovedUnits([]);
      setAttackedUnits([]);
      setSelectedUnit(null);
    }, 400);
  }

  const cols = level.cols, rows = level.rows;

  return (
    <div style={{
      background:"#0a1208", minHeight:"100dvh",
      display:"flex", flexDirection: isMobile ? "column" : "row",
      gap:8, padding:isMobile?6:10,
      fontFamily:"monospace", color:"#c8dca8",
      overflow:"hidden",
    }}>
      {/* ── 地图区 ── */}
      <div style={{ display:"flex", flexDirection:"column", gap:6, flex:1, minWidth:0 }}>
        <div style={{
          fontSize:12, color:"#ffe066",
          display:"flex", justifyContent:"space-between",
        }}>
          <span>第{level.id}关「{level.name}」</span>
          <span style={{ color: turn==="player" ? "#88ff88" : "#ff8888" }}>
            {turn==="player" ? "🐱 玩家回合" : "👾 敌方行动"}
          </span>
        </div>

        {/* 地图格子 */}
        <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
          <div style={{
            display:"grid",
            gridTemplateColumns:`repeat(${cols},${TILE}px)`,
            gridTemplateRows:`repeat(${rows},${TILE}px)`,
            border:"2px solid #3a5a2a", borderRadius:4, overflow:"hidden",
          }}>
            {Array.from({ length:rows }, (_, y) =>
              Array.from({ length:cols }, (_, x) => {
                const key      = `${x},${y}`;
                const unit     = units.find(u => u.hp > 0 && u.x === x && u.y === y);
                const foodHere = food.find(f => f.x === x && f.y === y);
                const isMove   = moveRange.includes(key);
                const isAtk    = atkRange.includes(key) && units.find(u => u.hp > 0 && u.x === x && u.y === y && u.type === "enemy");
                const isSk     = skillMode && skRange.includes(key);
                const isSel    = sel && sel.x === x && sel.y === y;
                const base     = getTileColor(x, y, level.bg);

                return (
                  <div key={key} onClick={() => handleCell(x, y)} style={{
                    width:TILE, height:TILE,
                    background: isSel?"#2255aa55":isSk?"#aa44cc55":isAtk?"#aa222255":isMove?"#2288aa44":base,
                    border: isSel?"2px solid #6699ff":isSk?"2px solid #cc66ff":isAtk?"2px solid #ff6666":isMove?"1px solid #44aacc66":"1px solid rgba(0,0,0,0.3)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxSizing:"border-box", cursor:"pointer",
                  }}>
                    {foodHere && <div style={{ fontSize:TILE>54?18:14 }}>{foodHere.type==="fish"?"🐟":"🥩"}</div>}
                    {unit && (
                      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:1 }}>
                        <UnitAvatar unit={unit} size={TILE > 54 ? 34 : 28}/>
                        {/* HP 条 */}
                        <div style={{ width:TILE-14, height:3, background:"#333", borderRadius:2, overflow:"hidden" }}>
                          <div style={{ width:`${(unit.hp/unit.maxHp)*100}%`, height:"100%",
                            background: unit.type==="player"?"#44cc44":"#cc3333" }}/>
                        </div>
                        {/* MP 条 */}
                        {unit.mp > 0 && (
                          <div style={{ width:TILE-14, height:2, background:"#222", borderRadius:1, overflow:"hidden" }}>
                            <div style={{ width:`${(unit.mp/(unit.maxMp||1))*100}%`, height:"100%", background:"#4488ff" }}/>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 操作栏 */}
        <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
          <button onClick={endTurn} disabled={turn !== "player"}
            style={{
              padding:"7px 18px",
              background: turn==="player" ? "#3a6a22" : "#222",
              color: turn==="player" ? "#c8dca8" : "#555",
              border:"1px solid #3a5a2a", borderRadius:5,
              cursor: turn==="player" ? "pointer" : "not-allowed",
              fontFamily:"monospace", fontSize:12,
            }}>
            结束回合 →
          </button>
          {skillMode && <span style={{ fontSize:11, color:"#cc88ff" }}>选择技能目标 ✕取消</span>}
          {skillMode && <button onClick={() => setSkillMode(null)} style={{
            padding:"4px 10px", background:"#3a1a1a", color:"#ff8888",
            border:"1px solid #aa3333", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11,
          }}>取消</button>}
        </div>

        {/* 战斗日志 */}
        <div style={{
          background:"#0d1a0d", border:"1px solid #2a4020",
          borderRadius:6, padding:"6px 10px",
          height:isMobile?70:90, overflowY:"auto",
          fontSize:10, color:"#90b870",
        }}>
          {log.map((l, i) => <div key={i} style={{ opacity:1-i*0.1 }}>{l}</div>)}
        </div>
      </div>

      {/* ── 侧边栏（英雄面板） ── */}
      <div style={{
        display:"flex",
        flexDirection: isMobile ? "row" : "column",
        gap:8,
        minWidth: isMobile ? "auto" : 175,
        overflowX: isMobile ? "auto" : "visible",
      }}>
        {/* 英雄卡片 */}
        {heroes.map(h => {
          const alive   = units.find(u => u.id === h.id);
          const isSelH  = selectedUnit === h.id;
          const A       = h.avatar === "xiuxiu" ? XiuXiuAvatar : PoPoAvatar;
          return (
            <div key={h.id} onClick={() => setSelectedUnit(prev => prev === h.id ? null : h.id)}
              style={{
                background: isSelH ? "#1e3a14" : "#111a0d",
                border:`1px solid ${isSelH?"#66aa44":"#2a4020"}`,
                borderRadius:8, padding:"8px 10px", cursor:"pointer",
                minWidth: isMobile ? 150 : "auto",
              }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                <A size={isMobile?24:28}/>
                <div>
                  <div style={{ fontSize:12, fontWeight:"bold", color:h.avatar==="xiuxiu"?"#ff9944":"#88ccff" }}>
                    {h.name} Lv{alive?.lv||h.lv}
                  </div>
                </div>
              </div>
              {alive && <>
                <div style={{ fontSize:10, marginBottom:2 }}>
                  HP <span style={{ color:alive.hp>alive.maxHp*0.3?"#44cc44":"#ff4444" }}>{alive.hp}</span>/{getUnitStats(alive).maxHp}
                </div>
                <div style={{ width:"100%", height:4, background:"#333", borderRadius:2, marginBottom:3 }}>
                  <div style={{ width:`${(alive.hp/getUnitStats(alive).maxHp)*100}%`, height:"100%",
                    background:alive.hp>alive.maxHp*0.3?"#44cc44":"#ff4444", borderRadius:2 }}/>
                </div>
                <div style={{ fontSize:10, marginBottom:2 }}>
                  MP <span style={{ color:"#4488ff" }}>{alive.mp}</span>/{getUnitStats(alive).maxMp}
                </div>
                <div style={{ width:"100%", height:3, background:"#222", borderRadius:2, marginBottom:5 }}>
                  <div style={{ width:`${(alive.mp/Math.max(1,getUnitStats(alive).maxMp))*100}%`, height:"100%", background:"#4488ff", borderRadius:2 }}/>
                </div>
                {/* 技能按钮 */}
                {isSelH && turn === "player" && !attackedUnits.includes(h.id) && alive.hp > 0 && (
                  <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
                    {h.skills.map(sk => {
                      const ski  = SKILLS[sk];
                      const cd   = cooldowns?.[`${h.id}_${sk}`] || 0;
                      const noMp = alive.mp < ski.mp;
                      const ok   = !noMp && !cd;
                      return (
                        <button key={sk} disabled={!ok}
                          onClick={e => { e.stopPropagation(); if (ok) setSkillMode({ unitId:h.id, skillId:sk }); }}
                          style={{
                            padding:"3px 6px",
                            background: skillMode?.skillId===sk ? "#6a22aa" : ok ? "#2a2a6a" : "#222",
                            color: ok ? "#cc99ff" : "#555",
                            border:"1px solid #3a3a7a", borderRadius:3,
                            cursor: ok ? "pointer" : "not-allowed",
                            fontFamily:"monospace", fontSize:10, textAlign:"left",
                          }}>
                          {ski.icon}{ski.name} <span style={{ color:"#4488ff" }}>MP{ski.mp}</span>
                          {cd > 0 && <span style={{ color:"#ff8844" }}> CD{cd}</span>}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>}
            </div>
          );
        })}

        {/* 敌方状态 */}
        <div style={{
          background:"#1a0d0d", border:"1px solid #4a2020",
          borderRadius:8, padding:"8px 10px", fontSize:10,
          minWidth: isMobile ? 130 : "auto",
        }}>
          <div style={{ color:"#ff8888", marginBottom:4, fontSize:11 }}>👾 敌方</div>
          {units.filter(u => u.type === "enemy" && u.hp > 0).map(u => (
            <div key={u.id} style={{ marginBottom:5 }}>
              <div style={{ color:"#cc8888" }}>{u.boss?"👑":u.captain?"⭐":""}{u.name}</div>
              <div style={{ width:"100%", height:3, background:"#333", borderRadius:2 }}>
                <div style={{ width:`${(u.hp/u.maxHp)*100}%`, height:"100%", background:"#cc3333", borderRadius:2 }}/>
              </div>
              <div style={{ color:"#888" }}>{u.hp}/{u.maxHp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
