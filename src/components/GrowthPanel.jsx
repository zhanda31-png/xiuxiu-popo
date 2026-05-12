import { useState } from "react";
import { SKILL_TREES, EQUIPMENT, FORGE_RECIPES, MATERIALS } from "../data/gameData";
import { XiuXiuAvatar, PoPoAvatar } from "./Avatars";

// ── 技能树面板 ──────────────────────────────────────────────
function SkillTreePanel({ hero, onUnlockNode }) {
  const tree = SKILL_TREES[hero.id];
  if (!tree) return null;
  const unlocked = hero.unlockedSkillNodes || [];
  const pts = hero.skillPoints || 0;

  return (
    <div>
      <div style={{ fontSize:11, color:"#ffe066", marginBottom:8 }}>
        技能点：<span style={{ color:"#88ffaa" }}>{pts}</span>
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
        {tree.nodes.map(node => {
          const isUnlocked = unlocked.includes(node.id);
          const prereqsMet = node.requires.every(r => unlocked.includes(r));
          const canAfford  = pts >= node.cost;
          const canUnlock  = !isUnlocked && prereqsMet && canAfford;
          return (
            <div key={node.id} style={{
              background: isUnlocked ? "#1a3a0a" : prereqsMet ? "#162010" : "#0d0d0d",
              border:`1px solid ${isUnlocked?"#44aa22":prereqsMet?"#3a5a2a":"#222"}`,
              borderRadius:8, padding:"8px 10px", minWidth:130, opacity: prereqsMet?1:0.5,
            }}>
              <div style={{ fontSize:13 }}>{node.icon} {node.name}</div>
              <div style={{ fontSize:10, color:"#888", margin:"3px 0" }}>{node.effect}</div>
              <div style={{ fontSize:10, color:"#ffe066" }}>花费 {node.cost} 技能点</div>
              {isUnlocked
                ? <div style={{ fontSize:10, color:"#44aa22", marginTop:4 }}>✅ 已解锁</div>
                : <button onClick={() => canUnlock && onUnlockNode(hero.id, node)}
                    disabled={!canUnlock}
                    style={{
                      marginTop:5, padding:"3px 10px",
                      background: canUnlock ? "#2a5a1a" : "#1a1a1a",
                      color: canUnlock ? "#c8e8a0" : "#444",
                      border:"none", borderRadius:4, cursor: canUnlock?"pointer":"not-allowed",
                      fontFamily:"monospace", fontSize:11,
                    }}>
                    {!prereqsMet ? "条件未满足" : !canAfford ? "点数不足" : "解锁"}
                  </button>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 属性加点面板 ─────────────────────────────────────────────
function StatPointPanel({ hero, onAllocate }) {
  const pts = hero.statPoints || 0;
  const stats = [
    { key:"atk",   label:"攻击 ATK", color:"#ff8844" },
    { key:"def",   label:"防御 DEF", color:"#44aaff" },
    { key:"maxHp", label:"生命 HP",  color:"#44cc44" },
    { key:"maxMp", label:"魔力 MP",  color:"#8888ff" },
    { key:"mov",   label:"移动 MOV", color:"#ffcc44", max:5 },
  ];
  return (
    <div>
      <div style={{ fontSize:11, color:"#ffe066", marginBottom:8 }}>
        属性点：<span style={{ color:"#88ffaa" }}>{pts}</span>
      </div>
      {stats.map(s => (
        <div key={s.key} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
          <span style={{ width:80, fontSize:11, color:s.color }}>{s.label}</span>
          <span style={{ width:32, textAlign:"right", fontSize:12, color:"#d4e8b0" }}>
            {hero[s.key]}
          </span>
          <button
            onClick={() => pts > 0 && onAllocate(hero.id, s.key)}
            disabled={pts <= 0 || (s.max && hero[s.key] >= s.max)}
            style={{
              width:24, height:24,
              background: pts > 0 ? "#2a5a1a" : "#1a1a1a",
              color: pts > 0 ? "#88ff88" : "#444",
              border:"none", borderRadius:4,
              cursor: pts > 0 ? "pointer" : "not-allowed",
              fontFamily:"monospace", fontSize:14,
            }}>+</button>
        </div>
      ))}
    </div>
  );
}

// ── 羁绊面板 ────────────────────────────────────────────────
function BondPanel({ bond, bondDialogsSeen }) {
  const level = bond >= 50 ? "❤️ 心意相通" : bond >= 25 ? "💛 相知相伴" : bond >= 10 ? "💚 初次默契" : "🤍 相识";
  const pct   = Math.min(100, (bond % 25) / 25 * 100);
  const milestones = [
    { threshold:10, label:"初次默契", seen: bondDialogsSeen?.includes("bond_10") },
    { threshold:25, label:"共同休息", seen: bondDialogsSeen?.includes("bond_25") },
    { threshold:50, label:"心意相通", seen: bondDialogsSeen?.includes("bond_50") },
    { threshold:75, label:"双星合璧", seen: bondDialogsSeen?.includes("secret") },
  ];
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:12 }}>
        <XiuXiuAvatar size={40}/>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:13, color:"#ffaacc", marginBottom:4 }}>{level}</div>
          <div style={{ background:"#1a1a2a", borderRadius:4, height:8, overflow:"hidden" }}>
            <div style={{ width:`${pct}%`, height:"100%", background:"linear-gradient(90deg,#ff88aa,#ffcc44)", transition:"width 0.5s" }}/>
          </div>
          <div style={{ fontSize:10, color:"#888", marginTop:2 }}>好感度 {bond} / 100</div>
        </div>
        <PoPoAvatar size={40}/>
      </div>
      <div style={{ fontSize:11, color:"#888", marginBottom:6 }}>羁绊里程碑：</div>
      {milestones.map(m => (
        <div key={m.threshold} style={{
          display:"flex", alignItems:"center", gap:6,
          marginBottom:4, opacity: bond >= m.threshold ? 1 : 0.3,
        }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background: bond >= m.threshold ? "#ff88aa" : "#333" }}/>
          <span style={{ fontSize:11, color: m.seen ? "#44aa22" : "#888" }}>
            {m.label} {m.seen ? "✅" : `(好感≥${m.threshold})`}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── 锻造面板 ────────────────────────────────────────────────
function ForgePanel({ inventory, gold, materials, onForge }) {
  return (
    <div>
      <div style={{ fontSize:11, color:"#888", marginBottom:8 }}>💰 金币：{gold}</div>
      {FORGE_RECIPES.map(r => {
        const result   = EQUIPMENT[r.result];
        const canForge = gold >= r.gold &&
          Object.entries(r.materials).every(([mat, cnt]) => {
            if (EQUIPMENT[mat])   return inventory.filter(x=>x===mat).length   >= cnt;
            if (MATERIALS[mat])   return (materials?.[mat] || 0)               >= cnt;
            return false;
          });
        return (
          <div key={r.id} style={{
            background:"#161616", border:"1px solid #2a2a2a",
            borderRadius:8, padding:"8px 10px", marginBottom:8,
          }}>
            <div style={{ fontSize:13, color:"#ddbb66" }}>
              {result?.icon} {result?.name} <span style={{ fontSize:10, color:"#888" }}>Tier{result?.tier}</span>
            </div>
            <div style={{ fontSize:10, color:"#888", margin:"3px 0" }}>{r.desc}</div>
            <div style={{ fontSize:10, color:"#aaa", marginBottom:4 }}>
              需要：
              {Object.entries(r.materials).map(([mat,cnt]) => {
                const item = EQUIPMENT[mat] || MATERIALS[mat];
                return ` ${item?.icon||"📦"}${item?.name||mat}×${cnt}`;
              }).join("，")}
              ，💰{r.gold}金
            </div>
            <button onClick={() => canForge && onForge(r)}
              disabled={!canForge}
              style={{
                padding:"3px 12px",
                background: canForge ? "#4a3800" : "#1a1a1a",
                color: canForge ? "#ffe066" : "#444",
                border:"none", borderRadius:4,
                cursor: canForge ? "pointer" : "not-allowed",
                fontFamily:"monospace", fontSize:11,
              }}>
              {canForge ? "⚒️ 锻造" : "材料不足"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

// ── 主成长面板 ───────────────────────────────────────────────
const TABS = ["技能树","属性加点","羁绊","锻造"];

export default function GrowthPanel({
  heroes, bond, bondDialogsSeen,
  inventory, gold, materials,
  onUnlockNode, onAllocate, onForge,
  onClose,
}) {
  const [tab,   setTab]   = useState("技能树");
  const [heroId,setHeroId] = useState("xiuxiu");
  const hero = heroes.find(h => h.id === heroId) || heroes[0];

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:500,
      background:"#060e06ee",
      display:"flex", flexDirection:"column",
      fontFamily:"monospace", color:"#d4e8b0",
    }}>
      {/* 顶栏 */}
      <div style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"10px 14px", borderBottom:"1px solid #2a4020",
        background:"#0d1a0d",
      }}>
        <div style={{ fontSize:15, color:"#ffe066" }}>📈 成长</div>
        <button onClick={onClose} style={{
          background:"none", border:"none", color:"#888",
          fontSize:20, cursor:"pointer",
        }}>✕</button>
      </div>

      {/* Tab 栏 */}
      <div style={{ display:"flex", gap:4, padding:"8px 10px", borderBottom:"1px solid #1a2a1a" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding:"4px 12px",
            background: tab===t ? "#2a5a1a" : "#0d1a0d",
            color: tab===t ? "#c8e8a0" : "#666",
            border:`1px solid ${tab===t?"#4a7a2a":"#1a2a1a"}`,
            borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11,
          }}>{t}</button>
        ))}
      </div>

      {/* 英雄选择器（技能树/属性加点时显示） */}
      {(tab==="技能树"||tab==="属性加点") && (
        <div style={{ display:"flex", gap:8, padding:"8px 10px", borderBottom:"1px solid #1a2a1a" }}>
          {heroes.map(h => (
            <div key={h.id} onClick={() => setHeroId(h.id)} style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"4px 10px",
              background: heroId===h.id ? "#1a3a0a" : "#0d0d0d",
              border:`1px solid ${heroId===h.id?"#4a8a2a":"#222"}`,
              borderRadius:6, cursor:"pointer",
            }}>
              {h.avatar==="xiuxiu"?<XiuXiuAvatar size={24}/>:<PoPoAvatar size={24}/>}
              <span style={{ fontSize:11, color: heroId===h.id?"#c8e8a0":"#666" }}>{h.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* 内容区 */}
      <div style={{ flex:1, overflowY:"auto", padding:"12px 14px" }}>
        {tab==="技能树"    && <SkillTreePanel hero={hero} onUnlockNode={onUnlockNode}/>}
        {tab==="属性加点"  && <StatPointPanel hero={hero} onAllocate={onAllocate}/>}
        {tab==="羁绊"      && <BondPanel bond={bond} bondDialogsSeen={bondDialogsSeen}/>}
        {tab==="锻造"      && <ForgePanel inventory={inventory} gold={gold} materials={materials} onForge={onForge}/>}
      </div>
    </div>
  );
}
