import { useState, useEffect, useCallback } from "react";
import {
  makeHeroes, LEVELS, WORLD_MAP, STORIES,
  EQUIPMENT, getUnitStats,
} from "./data/gameData";
import { autoSave, loadAutoSave } from "./systems/saveSystem";
import { XiuXiuAvatar, PoPoAvatar } from "./components/Avatars";
import DialogBox      from "./components/DialogBox";
import WorldMap       from "./components/WorldMap";
import BattleScreen   from "./components/BattleScreen";
import GrowthPanel    from "./components/GrowthPanel";
import SaveSlotScreen from "./components/SaveSlotScreen";

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 640);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return mobile;
}

function makeInitUnits(level, posHeroes) {
  return [
    ...posHeroes.map((h, i) => ({
      ...h, type:"player",
      x:1, y: i === 0 ? Math.floor(level.rows/2)-1 : Math.floor(level.rows/2)+1,
    })),
    ...level.enemies.map(e => ({
      ...e, type:"enemy", skills:[], equip:null, mp:0, maxMp:0,
    })),
  ];
}

function CampScreen({ heroes, inventory, gold, materials, bond, bondDialogsSeen, onEquip, onRest, onContinue, onGrowth, isMobile }) {
  const [tab, setTab] = useState("bag");
  return (
    <div style={{ background:"#0d1408", minHeight:"100dvh", fontFamily:"monospace", color:"#d4e8b0", padding:14, maxWidth:680, margin:"0 auto" }}>
      <div style={{ fontSize:16, color:"#ffe066", marginBottom:4 }}>🔥 营地</div>
      <div style={{ fontSize:11, color:"#aaa", marginBottom:12 }}>💰 金币：{gold}　💕 好感：{bond}</div>
      <div style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap" }}>
        {["bag","heroes"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding:"4px 12px", background:tab===t?"#2a5a1a":"#0d1a0d", color:tab===t?"#c8e8a0":"#666", border:`1px solid ${tab===t?"#4a7a2a":"#1a2a1a"}`, borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:12 }}>
            {t==="bag"?"🎒 背包":"🐱 角色"}
          </button>
        ))}
        <button onClick={onGrowth} style={{ padding:"4px 12px", background:"#0d1a2a", color:"#88ccff", border:"1px solid #2a4a6a", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:12 }}>📈 成长</button>
        <button onClick={onRest}   style={{ padding:"4px 12px", background:"#1a1a0d", color:"#eecc44", border:"1px solid #4a4a1a", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:12 }}>💤 休息</button>
      </div>
      {tab === "bag" && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
          {inventory.length === 0
            ? <div style={{ color:"#444", fontSize:11 }}>（背包为空）</div>
            : inventory.map((key, i) => {
                const it = EQUIPMENT[key]; if (!it) return null;
                return (
                  <div key={i} style={{ background:"#162010", border:"1px solid #3a5a2a", borderRadius:6, padding:"8px 10px", minWidth:130 }}>
                    <div style={{ fontSize:13 }}>{it.icon} {it.name}</div>
                    <div style={{ fontSize:10, color:"#888", marginBottom:4 }}>{it.desc}</div>
                    <div style={{ fontSize:10, color:"#aaa", marginBottom:6 }}>{it.atk>0&&`ATK+${it.atk} `}{it.def>0&&`DEF+${it.def} `}{it.mp&&`MP+${it.mp} `}{it.maxHp&&`HP+${it.maxHp}`}</div>
                    <div style={{ display:"flex", gap:4 }}>
                      {heroes.map(h => <button key={h.id} onClick={() => onEquip(h.id, key)} style={{ padding:"2px 8px", background:"#2a5a1a", color:"#c8e8a0", border:"none", borderRadius:3, cursor:"pointer", fontFamily:"monospace", fontSize:10 }}>给{h.name}</button>)}
                    </div>
                  </div>
                );
              })
          }
        </div>
      )}
      {tab === "heroes" && (
        <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
          {heroes.map(h => {
            const s = getUnitStats(h);
            const A = h.avatar === "xiuxiu" ? XiuXiuAvatar : PoPoAvatar;
            const expNext = h.lv < 9 ? [0,30,80,160,280,440,650,900,1200,1560][h.lv] : "MAX";
            return (
              <div key={h.id} style={{ background:"#162010", border:"1px solid #3a5a2a", borderRadius:8, padding:12, minWidth:190 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                  <A size={36}/>
                  <div>
                    <div style={{ fontWeight:"bold", color:h.avatar==="xiuxiu"?"#ff9944":"#88ccff" }}>{h.name} Lv{h.lv}</div>
                    <div style={{ fontSize:10, color:"#888" }}>{h.cls==="assassin"?"刺客":"法师"}</div>
                  </div>
                </div>
                <div style={{ fontSize:11, lineHeight:2, color:"#b0d090" }}>
                  <div>HP:{h.hp}/{s.maxHp}　MP:{h.mp}/{s.maxMp}</div>
                  <div>ATK:{s.atk}　DEF:{s.def}　MOV:{s.mov}</div>
                  <div>EXP:{h.exp}/{expNext}</div>
                  <div>技能点:{h.skillPoints||0}　属性点:{h.statPoints||0}</div>
                  <div>武器:{h.equip?.weapon?EQUIPMENT[h.equip.weapon]?.name:"—"}</div>
                  <div>防具:{h.equip?.armor?EQUIPMENT[h.equip.armor]?.name:"—"}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div style={{ marginTop:20 }}>
        <button onClick={onContinue} style={{ padding:"10px 24px", background:"#3a6a22", color:"#d4e8b0", border:"none", borderRadius:6, fontSize:13, cursor:"pointer", fontFamily:"monospace" }}>返回地图 🗺</button>
      </div>
    </div>
  );
}

function MainMenu({ onNewGame, onContinue, hasSave, isMobile }) {
  return (
    <div style={{ background:"#0d1a0d", minHeight:"100dvh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontFamily:"monospace", color:"#d4e8b0", padding:16 }}>
      <div style={{ fontSize:isMobile?22:28, fontWeight:"bold", color:"#ffe066", letterSpacing:2, marginBottom:4 }}>⚔ 修修与魄魄 ⚔</div>
      <div style={{ fontSize:11, color:"#a0c070", marginBottom:28 }}>奇幻大陆战旗 · 完整版</div>
      <div style={{ display:"flex", gap:isMobile?20:36, marginBottom:28 }}>
        {[{name:"修修",A:XiuXiuAvatar,col:"#ff9944",sub:"黑波斯·刺客"},{name:"魄魄",A:PoPoAvatar,col:"#88ccff",sub:"西伯利亚·法师"}].map(({name,A,col,sub})=>(
          <div key={name} style={{ textAlign:"center" }}><A size={isMobile?52:68}/><div style={{ color:col, fontWeight:"bold", marginTop:4, fontSize:13 }}>{name}</div><div style={{ fontSize:10, color:"#888" }}>{sub}</div></div>
        ))}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10, width:"100%", maxWidth:260 }}>
        <button onClick={onNewGame} style={{ padding:"11px 0", background:"#3a7a22", color:"#d4e8b0", border:"none", borderRadius:7, fontSize:14, cursor:"pointer", fontFamily:"monospace", letterSpacing:1 }}>▶ 新游戏</button>
        {hasSave && <button onClick={onContinue} style={{ padding:"11px 0", background:"#1a3a5a", color:"#88ccff", border:"none", borderRadius:7, fontSize:14, cursor:"pointer", fontFamily:"monospace" }}>📂 读取存档</button>}
      </div>
      <div style={{ marginTop:24, fontSize:10, color:"#3a5a2a", textAlign:"center", lineHeight:1.8 }}>
        🗺 大地图 · 📈 技能树成长 · 💕 羁绊系统<br/>⚒️ 装备锻造 · 💾 3槽存档 · 📱 手机适配
      </div>
    </div>
  );
}

function ShopScreen({ gold, inventory, onBuy, onClose }) {
  const SHOP_ITEMS = [
    {key:"iron_collar",price:40},{key:"magic_crystal",price:50},{key:"fur_cape",price:45},{key:"ancient_robe",price:80},{key:"rat_fang",price:30},
  ];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:600, background:"#070d07f0", display:"flex", flexDirection:"column", fontFamily:"monospace", color:"#d4e8b0", padding:14 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
        <div style={{ fontSize:16, color:"#ffe066" }}>🛒 商店</div>
        <div style={{ fontSize:12 }}>💰 {gold}</div>
        <button onClick={onClose} style={{ background:"none", border:"none", color:"#888", fontSize:20, cursor:"pointer" }}>✕</button>
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, overflowY:"auto" }}>
        {SHOP_ITEMS.map(({key,price})=>{
          const it=EQUIPMENT[key]; const owned=inventory.includes(key); const canBuy=gold>=price&&!owned;
          return (
            <div key={key} style={{ background:"#162010", border:"1px solid #3a5a2a", borderRadius:8, padding:"10px 12px", minWidth:160 }}>
              <div style={{ fontSize:13 }}>{it.icon} {it.name}</div>
              <div style={{ fontSize:10, color:"#888", margin:"3px 0" }}>{it.desc}</div>
              <div style={{ fontSize:10, color:"#aaa", marginBottom:6 }}>{it.atk>0&&`ATK+${it.atk} `}{it.def>0&&`DEF+${it.def} `}{it.mp&&`MP+${it.mp} `}{it.maxHp&&`HP+${it.maxHp}`}</div>
              <div style={{ fontSize:11, color:"#ffe066", marginBottom:6 }}>💰 {price}</div>
              <button onClick={()=>canBuy&&onBuy(key,price)} disabled={!canBuy} style={{ padding:"3px 12px", background:owned?"#1a2a1a":canBuy?"#2a5a1a":"#1a1a1a", color:owned?"#44aa22":canBuy?"#c8e8a0":"#555", border:"none", borderRadius:4, cursor:canBuy?"pointer":"not-allowed", fontFamily:"monospace", fontSize:11 }}>
                {owned?"已拥有":canBuy?"购买":"金币不足"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const isMobile = useIsMobile();
  const [screen,          setScreen]          = useState("menu");
  const [heroes,          setHeroes]          = useState(()=>makeHeroes());
  const [inventory,       setInventory]       = useState([]);
  const [materials,       setMaterials]       = useState({});
  const [gold,            setGold]            = useState(0);
  const [bond,            setBond]            = useState(0);
  const [bondDialogsSeen, setBondDialogsSeen] = useState([]);
  const [unlockedNodes,   setUnlockedNodes]   = useState(["start"]);
  const [completedNodes,  setCompletedNodes]  = useState([]);
  const [currentNode,     setCurrentNode]     = useState("start");
  const [pendingStory,    setPendingStory]    = useState(null);
  const [pendingLevel,    setPendingLevel]    = useState(null);
  const [pendingNode,     setPendingNode]     = useState(null);
  const [showGrowth,      setShowGrowth]      = useState(false);
  const [saveMode,        setSaveMode]        = useState(null);
  const [showShop,        setShowShop]        = useState(false);
  const [toast,           setToast]           = useState(null);
  const [hasSave,         setHasSave]         = useState(()=>{
    try{return!!localStorage.getItem("xiuxiu_popo_save_0")||!!localStorage.getItem("xiuxiu_popo_save_1");}catch{return false;}
  });

  const getGameState = useCallback(()=>({
    heroes,inventory,materials,gold,bond,bondDialogsSeen,unlockedNodes,completedNodes,currentNode
  }),[heroes,inventory,materials,gold,bond,bondDialogsSeen,unlockedNodes,completedNodes,currentNode]);

  useEffect(()=>{if(screen==="map")autoSave(getGameState());},[screen,getGameState]);

  useEffect(()=>{
    const thresholds=[{val:10,id:"bond_10"},{val:25,id:"bond_25"},{val:50,id:"bond_50"}];
    for(const t of thresholds){
      if(bond>=t.val&&!bondDialogsSeen.includes(t.id)&&STORIES[t.id]){
        setBondDialogsSeen(s=>[...s,t.id]);
        setPendingStory(t.id);
        break;
      }
    }
  },[bond]);

  function showToast(msg){setToast(msg);setTimeout(()=>setToast(null),2000);}

  function completeNode(nodeId){
    setCompletedNodes(c=>c.includes(nodeId)?c:[...c,nodeId]);
    const newUnlocks=WORLD_MAP.edges
      .filter(([a])=>a===nodeId)
      .map(([,b])=>b)
      .filter(b=>{
        const node=WORLD_MAP.nodes.find(n=>n.id===b);
        if(!node)return false;
        if(unlockedNodes.includes(b))return false;
        const prereqs=node.prereqs||[];
        return prereqs.every(p=>completedNodes.includes(p)||p===nodeId);
      });
    if(newUnlocks.length)setUnlockedNodes(u=>[...u,...newUnlocks]);
  }

  function executeNode(node){
    if(node.type==="battle"){
      const level=LEVELS[node.levelId]||LEVELS[0];
      setPendingLevel(level);
      setScreen("battle");
    }else if(node.type==="shop"){
      setShowShop(true);
    }else if(node.type==="rest"){
      setHeroes(hs=>hs.map(h=>{const s=getUnitStats(h);return{...h,hp:Math.min(h.hp+Math.floor(s.maxHp*0.5),s.maxHp),mp:Math.min(h.mp+25,s.maxMp)};}));
      const hpGain=heroes.reduce((sum,h)=>{const s=getUnitStats(h);return sum+Math.min(h.hp+Math.floor(s.maxHp*0.5),s.maxHp)-h.hp;},0);
      const mpGain=heroes.reduce((sum,h)=>{return sum+Math.min(h.mp+25,getUnitStats(h).maxMp)-h.mp;},0);
      showToast(`💤 休息完毕！HP+${hpGain} MP+${mpGain}`);
      completeNode(node.id);
    }else if(node.type==="forge"){
      setShowGrowth(true);
    }else if(node.type==="secret"){
      completeNode(node.id);
      showToast("🔮 遗迹之力觉醒！");
    }else if(node.type==="ending"){
      setScreen("win");
    }else if(node.type==="village"&&node.storyId){
      setPendingStory(node.storyId);
    }
  }

  function handleNodeClick(node){
    setCurrentNode(node.id);
    if(node.storyId&&!bondDialogsSeen.includes(node.storyId)){
      setBondDialogsSeen(s=>[...s,node.storyId]);
      setPendingStory(node.storyId);
      setPendingNode(node);
    }else{
      executeNode(node);
    }
  }

  function onStoryFinish(){
    const id=pendingStory;
    setPendingStory(null);
    if(id==="prologue"){
      completeNode("start");
      setScreen("map");
      return;
    }
    if(pendingNode){executeNode(pendingNode);setPendingNode(null);}
  }

  function onBattleVictory(survivingHeroes,inv,gld){
    setHeroes(hs=>hs.map(h=>{const s=survivingHeroes.find(x=>x.id===h.id);return s?{...h,...s}:h;}));
    setInventory(inv); setGold(gld);
    const lvl=pendingLevel;
    if(lvl?.materials){setMaterials(m=>{const nm={...m};lvl.materials.forEach(({type,count})=>{nm[type]=(nm[type]||0)+count;});return nm;});}
    completeNode(currentNode);
    setPendingLevel(null);
    setScreen("camp");
  }

  function onBattleGameOver(){setTimeout(()=>setScreen("gameover"),800);}
  function onBondGain(amount){setBond(b=>Math.min(100,b+amount));}

  function equipItem(heroId,itemKey){
    const item=EQUIPMENT[itemKey];if(!item)return;
    setHeroes(hs=>hs.map(h=>{
      if(h.id!==heroId)return h;
      const slot=item.type==="weapon"?"weapon":"armor";
      const old=h.equip?.[slot];
      if(old)setInventory(inv=>[...inv,old]);
      return{...h,equip:{...h.equip,[slot]:itemKey}};
    }));
    setInventory(inv=>{const i=[...inv];const idx=i.lastIndexOf(itemKey);if(idx>-1)i.splice(idx,1);return i;});
  }

  function restHeroes(){
    setHeroes(hs=>hs.map(h=>{const s=getUnitStats(h);return{...h,hp:Math.min(h.hp+Math.floor(s.maxHp*0.4),s.maxHp),mp:Math.min(h.mp+20,s.maxMp)};}));
  }

  function unlockSkillNode(heroId,node){
    setHeroes(hs=>hs.map(h=>{
      if(h.id!==heroId)return h;
      let nh={...h,skillPoints:(h.skillPoints||0)-node.cost,unlockedSkillNodes:[...(h.unlockedSkillNodes||[]),node.id]};
      if(node.statBonus)Object.entries(node.statBonus).forEach(([k,v])=>{nh[k]=(nh[k]||0)+v;});
      if(node.unlockSkill&&!nh.skills.includes(node.unlockSkill))nh.skills=[...nh.skills,node.unlockSkill];
      return nh;
    }));
  }

  function allocateStat(heroId,stat){
    setHeroes(hs=>hs.map(h=>{
      if(h.id!==heroId||(h.statPoints||0)<=0)return h;
      const gains={atk:3,def:2,maxHp:8,maxMp:6,mov:1};
      return{...h,statPoints:h.statPoints-1,[stat]:h[stat]+(gains[stat]||1)};
    }));
  }

  function forgeItem(recipe){
    if(gold<recipe.gold)return;
    let newInv=[...inventory],newMat={...materials},ok=true;
    Object.entries(recipe.materials).forEach(([mat,cnt])=>{
      if(EQUIPMENT[mat]){let r=0;newInv=newInv.filter(x=>{if(x===mat&&r<cnt){r++;return false;}return true;});if(r<cnt)ok=false;}
      else{if((newMat[mat]||0)<cnt)ok=false;else newMat[mat]-=cnt;}
    });
    if(!ok)return;
    newInv.push(recipe.result);
    setInventory(newInv);setMaterials(newMat);setGold(g=>g-recipe.gold);
  }

  function buyItem(key,price){
    if(gold<price||inventory.includes(key))return;
    setGold(g=>g-price);setInventory(i=>[...i,key]);
  }

  function loadSave(data){
    setHeroes(data.heroes||makeHeroes());setInventory(data.inventory||[]);setMaterials(data.materials||{});
    setGold(data.gold||0);setBond(data.bond||0);setBondDialogsSeen(data.bondDialogsSeen||[]);
    setUnlockedNodes(data.unlockedNodes||["start"]);setCompletedNodes(data.completedNodes||[]);
    setCurrentNode(data.currentNode||"start");setSaveMode(null);setScreen("map");
  }

  function resetGame(){
    setHeroes(makeHeroes());setInventory([]);setMaterials({});setGold(0);setBond(0);
    setBondDialogsSeen([]);setUnlockedNodes(["start"]);setCompletedNodes([]);
    setCurrentNode("start");setPendingLevel(null);setPendingNode(null);setScreen("menu");
  }

  const growthProps={heroes,bond,bondDialogsSeen,inventory,gold,materials,onUnlockNode:unlockSkillNode,onAllocate:allocateStat,onForge:forgeItem,onClose:()=>setShowGrowth(false)};

  // ── 渲染 ────────────────────────────────────────────────────
  if(pendingStory&&STORIES[pendingStory])
    return <DialogBox story={STORIES[pendingStory]} onFinish={onStoryFinish}/>;

  if(saveMode)
    return <SaveSlotScreen mode={saveMode} currentState={getGameState()} onLoad={loadSave} onBack={()=>setSaveMode(null)}/>;

  if(screen==="menu")
    return <MainMenu isMobile={isMobile} hasSave={hasSave} onNewGame={()=>setPendingStory("prologue")} onContinue={()=>setSaveMode("load")}/>;

  if(screen==="map") return (
    <div style={{ background:"#0a1208", minHeight:"100dvh", fontFamily:"monospace", color:"#d4e8b0", display:"flex", flexDirection:"column" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 14px", borderBottom:"1px solid #2a4020", background:"#0d1a0d", flexWrap:"wrap", gap:6 }}>
        <div style={{ fontSize:13, color:"#ffe066" }}>🗺 奇幻大陆</div>
        <div style={{ display:"flex", gap:6, alignItems:"center", fontSize:11, color:"#aaa", flexWrap:"wrap" }}>
          <span>💰{gold}</span><span>💕{bond}</span>
          {heroes.map(h=>{
            const w=h.equip?.weapon?EQUIPMENT[h.equip.weapon]:null;
            const a=h.equip?.armor?EQUIPMENT[h.equip.armor]:null;
            return <span key={h.id} style={{color:h.avatar==="xiuxiu"?"#ff9944":"#88ccff",fontSize:10}}>{h.name}Lv{h.lv}{w?` ${w.icon}`:""}{a?` ${a.icon}`:""}</span>;
          })}
        </div>
        <div style={{ display:"flex", gap:6 }}>
          <button onClick={()=>setShowGrowth(true)} style={{ padding:"4px 10px", background:"#0d1a2a", color:"#88ccff", border:"1px solid #2a4a6a", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11 }}>📈</button>
          <button onClick={()=>setSaveMode("save")}  style={{ padding:"4px 10px", background:"#1a2a1a", color:"#88aa66", border:"1px solid #2a4a2a", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11 }}>💾</button>
        </div>
      </div>
      <div style={{ flex:1, padding:10, overflowY:"auto" }}>
        <WorldMap unlockedNodes={unlockedNodes} completedNodes={completedNodes} currentNode={currentNode} onNodeClick={handleNodeClick} isMobile={isMobile}/>
      </div>
      {currentNode&&(
        <div style={{ padding:"8px 14px", borderTop:"1px solid #1a2a1a", background:"#0d1408", fontSize:11, color:"#888" }}>
          {(()=>{const n=WORLD_MAP.nodes.find(x=>x.id===currentNode);return n?`${n.icon} ${n.name} — ${n.type==="battle"?"点击进入战斗":n.type==="shop"?"点击进入商店":n.type==="rest"?"点击休息":n.type==="forge"?"点击锻造":n.type==="ending"?"查看结局":""}`:""})()}
        </div>
      )}
      {showGrowth&&<GrowthPanel {...growthProps}/>}
      {showShop&&<ShopScreen gold={gold} inventory={inventory} onBuy={buyItem} onClose={()=>setShowShop(false)}/>}
      {toast&&<div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"#0a1208f0",border:"2px solid #4a8a3a",borderRadius:8,padding:"12px 24px",fontFamily:"monospace",fontSize:15,color:"#ffe066",zIndex:500,pointerEvents:"none",animation:"fadeInOut 2s"}}>{toast}</div>}
      <style>{`@keyframes fadeInOut{0%{opacity:0;transform:translate(-50%,-50%) scale(0.8)}10%{opacity:1;transform:translate(-50%,-50%) scale(1)}80%{opacity:1}100%{opacity:0}}`}</style>
    </div>
  );

  if(screen==="battle"&&pendingLevel){
    const initUnits=makeInitUnits(pendingLevel,heroes);
    return <BattleScreen level={pendingLevel} initUnits={initUnits} heroes={heroes} isMobile={isMobile} onVictory={onBattleVictory} onGameOver={onBattleGameOver} onBondGain={onBondGain}/>;
  }

  if(screen==="camp") return (
    <>
      <CampScreen heroes={heroes} inventory={inventory} gold={gold} materials={materials} bond={bond} bondDialogsSeen={bondDialogsSeen} onEquip={equipItem} onRest={restHeroes} onContinue={()=>setScreen("map")} onGrowth={()=>setShowGrowth(true)} isMobile={isMobile}/>
      {showGrowth&&<GrowthPanel {...growthProps}/>}
    </>
  );

  if(screen==="gameover") return (
    <div style={{ background:"#0d0505", minHeight:"100dvh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontFamily:"monospace", color:"#d4e8b0" }}>
      <div style={{ fontSize:32, color:"#ff4444", marginBottom:8 }}>💀 战败...</div>
      <div style={{ fontSize:12, color:"#888", marginBottom:20 }}>不要放弃，再来一次！</div>
      <div style={{ display:"flex", gap:12 }}>
        <button onClick={resetGame} style={{ padding:"10px 22px", background:"#7a2222", color:"#d4e8b0", border:"none", borderRadius:6, fontSize:13, cursor:"pointer", fontFamily:"monospace" }}>重新开始</button>
        <button onClick={()=>setSaveMode("load")} style={{ padding:"10px 22px", background:"#1a3a5a", color:"#88ccff", border:"none", borderRadius:6, fontSize:13, cursor:"pointer", fontFamily:"monospace" }}>读取存档</button>
      </div>
    </div>
  );

  if(screen==="win") return (
    <div style={{ background:"#0a0d00", minHeight:"100dvh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontFamily:"monospace", color:"#d4e8b0", padding:20 }}>
      <div style={{ fontSize:28, color:"#ffe066", marginBottom:10 }}>🎊 通关！</div>
      <div style={{ display:"flex", gap:24, marginBottom:16 }}><XiuXiuAvatar size={60}/><PoPoAvatar size={60}/></div>
      <div style={{ color:"#a0c070", fontSize:13, textAlign:"center", marginBottom:16, lineHeight:1.9 }}>
        修修与魄魄封印了虚空领主，守护了奇幻大陆！<br/>💰 金币：{gold}　💕 好感：{bond}
      </div>
      <button onClick={resetGame} style={{ padding:"10px 28px", background:"#3a7a22", color:"#d4e8b0", border:"none", borderRadius:6, fontSize:14, cursor:"pointer", fontFamily:"monospace" }}>再玩一次</button>
    </div>
  );

  return null;
}
