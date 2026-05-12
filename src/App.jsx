import { useState } from "react";

const XiuXiuAvatar = ({ size = 48 }) => {
  const px = [
    [3,1,"#1a1a1a"],[4,0,"#1a1a1a"],[5,1,"#1a1a1a"],[10,1,"#1a1a1a"],[11,0,"#1a1a1a"],[12,1,"#1a1a1a"],
    [4,1,"#3d2b1f"],[11,1,"#3d2b1f"],
    [3,2,"#2a2a2a"],[4,2,"#2a2a2a"],[5,2,"#2a2a2a"],[6,2,"#2a2a2a"],[7,2,"#2a2a2a"],[8,2,"#2a2a2a"],[9,2,"#2a2a2a"],[10,2,"#2a2a2a"],[11,2,"#2a2a2a"],[12,2,"#2a2a2a"],
    [2,3,"#2a2a2a"],[3,3,"#333"],[4,3,"#333"],[5,3,"#333"],[6,3,"#333"],[7,3,"#333"],[8,3,"#333"],[9,3,"#333"],[10,3,"#333"],[11,3,"#333"],[12,3,"#333"],[13,3,"#2a2a2a"],
    [2,4,"#2a2a2a"],[3,4,"#3a3a3a"],[4,4,"#3a3a3a"],[5,4,"#3a3a3a"],[6,4,"#3a3a3a"],[7,4,"#3a3a3a"],[8,4,"#3a3a3a"],[9,4,"#3a3a3a"],[10,4,"#3a3a3a"],[11,4,"#3a3a3a"],[12,4,"#3a3a3a"],[13,4,"#2a2a2a"],
    [2,5,"#2a2a2a"],[3,5,"#3a3a3a"],[4,5,"#e8820c"],[5,5,"#f5a623"],[6,5,"#3a3a3a"],[7,5,"#3a3a3a"],[8,5,"#3a3a3a"],[9,5,"#e8820c"],[10,5,"#f5a623"],[11,5,"#3a3a3a"],[12,5,"#3a3a3a"],[13,5,"#2a2a2a"],
    [2,6,"#2a2a2a"],[3,6,"#3a3a3a"],[4,6,"#c06010"],[5,6,"#e8820c"],[6,6,"#3a3a3a"],[7,6,"#3a3a3a"],[8,6,"#3a3a3a"],[9,6,"#c06010"],[10,6,"#e8820c"],[11,6,"#3a3a3a"],[12,6,"#3a3a3a"],[13,6,"#2a2a2a"],
    [2,7,"#2a2a2a"],[3,7,"#3a3a3a"],[4,7,"#3a3a3a"],[5,7,"#3a3a3a"],[6,7,"#3a3a3a"],[7,7,"#c47a7a"],[8,7,"#c47a7a"],[9,7,"#3a3a3a"],[10,7,"#3a3a3a"],[11,7,"#3a3a3a"],[12,7,"#3a3a3a"],[13,7,"#2a2a2a"],
    [2,8,"#2a2a2a"],[3,8,"#3a3a3a"],[4,8,"#3a3a3a"],[5,8,"#3a3a3a"],[6,8,"#c47a7a"],[7,8,"#3a3a3a"],[8,8,"#3a3a3a"],[9,8,"#c47a7a"],[10,8,"#3a3a3a"],[11,8,"#3a3a3a"],[12,8,"#3a3a3a"],[13,8,"#2a2a2a"],
    [2,9,"#2a2a2a"],[3,9,"#333"],[4,9,"#444"],[5,9,"#444"],[6,9,"#444"],[7,9,"#444"],[8,9,"#444"],[9,9,"#444"],[10,9,"#444"],[11,9,"#444"],[12,9,"#333"],[13,9,"#2a2a2a"],
    [3,10,"#2a2a2a"],[4,10,"#3a3a3a"],[5,10,"#444"],[6,10,"#4a4a4a"],[7,10,"#4a4a4a"],[8,10,"#4a4a4a"],[9,10,"#4a4a4a"],[10,10,"#444"],[11,10,"#3a3a3a"],[12,10,"#2a2a2a"],
    [4,11,"#2a2a2a"],[5,11,"#333"],[6,11,"#3a3a3a"],[7,11,"#3a3a3a"],[8,11,"#3a3a3a"],[9,11,"#3a3a3a"],[10,11,"#333"],[11,11,"#2a2a2a"],
    [0,6,"#888"],[1,6,"#888"],[14,6,"#888"],[15,6,"#888"],[0,7,"#888"],[1,7,"#666"],[14,7,"#666"],[15,7,"#888"],
  ];
  return <svg width={size} height={size} viewBox="0 0 16 16" style={{imageRendering:"pixelated",shapeRendering:"crispEdges",flexShrink:0}}>
    <rect width="16" height="16" fill="#1a0a2e" rx="2"/>
    {px.map(([x,y,c],i)=><rect key={i} x={x} y={y} width={1} height={1} fill={c}/>)}
  </svg>;
};

const PoPoAvatar = ({ size = 48 }) => {
  const px = [
    [2,0,"#e8d5b0"],[3,0,"#e8d5b0"],[4,1,"#c9956a"],[11,0,"#e8d5b0"],[12,0,"#e8d5b0"],[11,1,"#c9956a"],
    [2,1,"#e8d5b0"],[3,1,"#e8d5b0"],[12,1,"#e8d5b0"],[13,1,"#e8d5b0"],
    [2,2,"#f0ebe0"],[3,2,"#f0ebe0"],[4,2,"#f0ebe0"],[5,2,"#8b5e3c"],[6,2,"#8b5e3c"],[7,2,"#8b5e3c"],[8,2,"#8b5e3c"],[9,2,"#8b5e3c"],[10,2,"#f0ebe0"],[11,2,"#f0ebe0"],[12,2,"#f0ebe0"],[13,2,"#f0ebe0"],
    [1,3,"#f0ebe0"],[2,3,"#f5f0e8"],[3,3,"#f5f0e8"],[4,3,"#f5f0e8"],[5,3,"#a0724a"],[6,3,"#a0724a"],[7,3,"#f5f0e8"],[8,3,"#a0724a"],[9,3,"#a0724a"],[10,3,"#f5f0e8"],[11,3,"#f5f0e8"],[12,3,"#f5f0e8"],[13,3,"#f5f0e8"],[14,3,"#f0ebe0"],
    [1,4,"#f0ebe0"],[2,4,"#f5f0e8"],[3,4,"#f5f0e8"],[4,4,"#f5f0e8"],[5,4,"#f5f0e8"],[6,4,"#f5f0e8"],[7,4,"#f5f0e8"],[8,4,"#f5f0e8"],[9,4,"#f5f0e8"],[10,4,"#f5f0e8"],[11,4,"#f5f0e8"],[12,4,"#f5f0e8"],[13,4,"#f5f0e8"],[14,4,"#f0ebe0"],
    [1,5,"#f0ebe0"],[2,5,"#f5f0e8"],[3,5,"#f5f0e8"],[4,5,"#4a9fd4"],[5,5,"#7ac4f0"],[6,5,"#f5f0e8"],[7,5,"#f5f0e8"],[8,5,"#f5f0e8"],[9,5,"#4a9fd4"],[10,5,"#7ac4f0"],[11,5,"#f5f0e8"],[12,5,"#f5f0e8"],[13,5,"#f5f0e8"],[14,5,"#f0ebe0"],
    [1,6,"#f0ebe0"],[2,6,"#f5f0e8"],[3,6,"#f5f0e8"],[4,6,"#2a7ab0"],[5,6,"#4a9fd4"],[6,6,"#f5f0e8"],[7,6,"#f5f0e8"],[8,6,"#f5f0e8"],[9,6,"#2a7ab0"],[10,6,"#4a9fd4"],[11,6,"#f5f0e8"],[12,6,"#f5f0e8"],[13,6,"#f5f0e8"],[14,6,"#f0ebe0"],
    [1,7,"#c9956a"],[2,7,"#c9956a"],[3,7,"#f5f0e8"],[4,7,"#f5f0e8"],[5,7,"#f5f0e8"],[6,7,"#f5f0e8"],[7,7,"#e8a0a0"],[8,7,"#e8a0a0"],[9,7,"#f5f0e8"],[10,7,"#f5f0e8"],[11,7,"#f5f0e8"],[12,7,"#f5f0e8"],[13,7,"#c9956a"],[14,7,"#c9956a"],
    [1,8,"#c9956a"],[2,8,"#c9956a"],[3,8,"#f5f0e8"],[4,8,"#f5f0e8"],[5,8,"#f5f0e8"],[6,8,"#e8a0a0"],[7,8,"#f5f0e8"],[8,8,"#f5f0e8"],[9,8,"#e8a0a0"],[10,8,"#f5f0e8"],[11,8,"#f5f0e8"],[12,8,"#f5f0e8"],[13,8,"#c9956a"],[14,8,"#c9956a"],
    [1,9,"#f0ebe0"],[2,9,"#f5f0e8"],[3,9,"#f5f0e8"],[4,9,"#c9956a"],[5,9,"#c9956a"],[6,9,"#f5f0e8"],[7,9,"#f5f0e8"],[8,9,"#f5f0e8"],[9,9,"#c9956a"],[10,9,"#c9956a"],[11,9,"#f5f0e8"],[12,9,"#f5f0e8"],[13,9,"#f5f0e8"],[14,9,"#f0ebe0"],
    [2,10,"#f0ebe0"],[3,10,"#f5f0e8"],[4,10,"#f5f0e8"],[5,10,"#f5f0e8"],[6,10,"#f5f0e8"],[7,10,"#f5f0e8"],[8,10,"#f5f0e8"],[9,10,"#f5f0e8"],[10,10,"#f5f0e8"],[11,10,"#f5f0e8"],[12,10,"#f5f0e8"],[13,10,"#f0ebe0"],
    [0,6,"#ccc"],[0,7,"#ccc"],[15,6,"#ccc"],[15,7,"#ccc"],[0,5,"#aaa"],[15,5,"#aaa"],
  ];
  return <svg width={size} height={size} viewBox="0 0 16 16" style={{imageRendering:"pixelated",shapeRendering:"crispEdges",flexShrink:0}}>
    <rect width="16" height="16" fill="#0d2a1a" rx="2"/>
    {px.map(([x,y,c],i)=><rect key={i} x={x} y={y} width={1} height={1} fill={c}/>)}
  </svg>;
};

const RatSprite = ({size=32,captain=false,boss=false}) => {
  const c = boss?"#8855aa":captain?"#aa6633":"#888888";
  const c2 = boss?"#bb88ff":captain?"#dd9955":"#aaaaaa";
  const px = [
    [2,0,c],[3,0,c],[5,1,c2],[6,1,c2],
    [1,2,c],[2,2,c2],[3,2,c2],[4,2,c2],[5,2,c2],[6,2,c2],[7,2,c],
    [1,3,c],[2,3,c2],[3,3,"#111"],[4,3,c2],[5,3,"#111"],[6,3,c2],[7,3,c],
    [1,4,c],[2,4,c2],[3,4,c2],[4,4,boss?"#ff44ff":captain?"#ff8844":"#cc8888"],[5,4,c2],[6,4,c2],[7,4,c],
    [1,5,c],[2,5,c2],[3,5,c],[4,5,c],[5,5,c],[6,5,c],[7,5,c],
    [2,6,c],[3,6,c],[4,6,c],[5,6,c],[6,6,c],
    [2,7,c],[4,7,c],[6,7,c],
    [9,3,c],[10,3,c],[11,3,c],[9,4,c],[10,4,c],
  ];
  return <svg width={size} height={size} viewBox="0 0 12 10" style={{imageRendering:"pixelated",shapeRendering:"crispEdges",flexShrink:0}}>
    <rect width="12" height="10" fill="transparent"/>
    {px.map(([x,y,col],i)=><rect key={i} x={x} y={y} width={1} height={1} fill={col}/>)}
  </svg>;
};

const SKILLS = {
  shadow_strike: { name:"暗影突袭", icon:"🌑", mp:20, desc:"跳至敌后方攻击，伤害×2.0", range:4, aoe:false, fn:(atk,def)=>Math.max(1,Math.floor(atk*2.0-def)) },
  claw_storm:   { name:"爪刃风暴", icon:"🌀", mp:25, desc:"对周围1格所有敌人造成伤害×1.5", range:1, aoe:true,  fn:(atk,def)=>Math.max(1,Math.floor(atk*1.5-def)) },
  ice_arrow:    { name:"寒冰箭",   icon:"❄️",  mp:15, desc:"远程攻击，伤害×1.8", range:4, aoe:false, fn:(atk,def)=>Math.max(1,Math.floor(atk*1.8-def)) },
  heal_aura:    { name:"治愈光环", icon:"💚", mp:20, desc:"治疗己方单位25%最大HP", range:3, aoe:false, fn:()=>0, heal:true },
  blizzard:     { name:"暴风雪",   icon:"🌨️", mp:35, desc:"3×3范围冰霜伤害×1.3", range:4, aoe:true,  fn:(atk,def)=>Math.max(1,Math.floor(atk*1.3-def)) },
};

const EQUIPMENT = {
  shadow_blade:  { name:"暗影刃",   icon:"🗡️",  type:"weapon", atk:15, def:0,  desc:"锋利的暗影之刃" },
  iron_collar:   { name:"铁护颈",   icon:"🔩",  type:"armor",  atk:0,  def:12, desc:"坚固的铁制护颈" },
  magic_crystal: { name:"魔法水晶", icon:"💎",  type:"weapon", atk:12, def:0,  mp:10, desc:"蕴含魔力的水晶" },
  fur_cape:      { name:"毛皮斗篷", icon:"🧣",  type:"armor",  atk:0,  def:8,  maxHp:15, desc:"温暖的西伯利亚毛皮" },
  rat_fang:      { name:"鼠牙匕首", icon:"🦷",  type:"weapon", atk:8,  def:0,  desc:"从鼠将处夺来的獠牙" },
  ancient_robe:  { name:"古代法袍", icon:"👘",  type:"armor",  atk:0,  def:5,  mp:15, desc:"来自上古时代的魔法袍" },
};

const LEVEL_EXP = [0,30,80,160,280];

const LEVELS = [
  { id:1, name:"荒野鼠患", cols:9, rows:7, bg:"#2d5a1b",
    enemies:[
      {id:"r1",name:"鼠兵",x:7,y:1,hp:40,maxHp:40,atk:18,def:4,mov:2,range:1,exp:12,avatar:"rat",drop:null},
      {id:"r2",name:"鼠兵",x:7,y:5,hp:40,maxHp:40,atk:18,def:4,mov:2,range:1,exp:12,avatar:"rat",drop:null},
      {id:"r3",name:"鼠将",x:8,y:3,hp:70,maxHp:70,atk:24,def:8,mov:1,range:1,exp:25,avatar:"rat",captain:true,drop:"rat_fang"},
    ],
    food:[{x:8,y:1,type:"fish"},{x:8,y:5,type:"meat"}],
    reward:{gold:30,item:"iron_collar"},
  },
  { id:2, name:"古墓迷阵", cols:10, rows:8, bg:"#3a2a10",
    enemies:[
      {id:"r1",name:"鼠弓手",x:8,y:0,hp:35,maxHp:35,atk:20,def:3,mov:2,range:2,exp:15,avatar:"rat",drop:null},
      {id:"r2",name:"鼠弓手",x:8,y:7,hp:35,maxHp:35,atk:20,def:3,mov:2,range:2,exp:15,avatar:"rat",drop:null},
      {id:"r3",name:"鼠卫兵",x:7,y:2,hp:55,maxHp:55,atk:22,def:10,mov:2,range:1,exp:18,avatar:"rat",captain:true,drop:null},
      {id:"r4",name:"鼠卫兵",x:7,y:5,hp:55,maxHp:55,atk:22,def:10,mov:2,range:1,exp:18,avatar:"rat",captain:true,drop:null},
      {id:"r5",name:"鼠祭司",x:9,y:4,hp:50,maxHp:50,atk:26,def:6,mov:1,range:3,exp:22,avatar:"rat",drop:"magic_crystal"},
    ],
    food:[{x:9,y:1,type:"fish"},{x:9,y:6,type:"meat"},{x:5,y:4,type:"fish"}],
    reward:{gold:55,item:"fur_cape"},
  },
  { id:3, name:"鼠王要塞", cols:11, rows:8, bg:"#1a0a0a",
    enemies:[
      {id:"r1",name:"精英鼠兵",x:7,y:0,hp:60,maxHp:60,atk:25,def:8,mov:2,range:1,exp:20,avatar:"rat",captain:true,drop:null},
      {id:"r2",name:"精英鼠兵",x:7,y:7,hp:60,maxHp:60,atk:25,def:8,mov:2,range:1,exp:20,avatar:"rat",captain:true,drop:null},
      {id:"r3",name:"鼠法师",x:9,y:2,hp:50,maxHp:50,atk:30,def:5,mov:1,range:3,exp:25,avatar:"rat",drop:"ancient_robe"},
      {id:"r4",name:"鼠法师",x:9,y:5,hp:50,maxHp:50,atk:30,def:5,mov:1,range:3,exp:25,avatar:"rat",drop:null},
      {id:"boss",name:"鼠王",x:10,y:4,hp:160,maxHp:160,atk:38,def:14,mov:2,range:1,exp:80,avatar:"rat",boss:true,drop:"shadow_blade"},
    ],
    food:[{x:10,y:1,type:"fish"},{x:10,y:7,type:"meat"},{x:6,y:4,type:"fish"},{x:10,y:4,type:"meat"}],
    reward:{gold:100,item:null},
  },
];

function makeHeroes() {
  return [
    { id:"xiuxiu", name:"修修", type:"player", cls:"assassin", x:1, y:2, hp:90, maxHp:90, atk:32, def:10, mov:3, range:1, mp:40, maxMp:40, avatar:"xiuxiu", exp:0, lv:1, skills:["shadow_strike","claw_storm"], equip:{weapon:null,armor:null} },
    { id:"popo",   name:"魄魄", type:"player", cls:"mage",     x:1, y:5, hp:70, maxHp:70, atk:26, def:8,  mov:2, range:3, mp:60, maxMp:60, avatar:"popo",   exp:0, lv:1, skills:["ice_arrow","heal_aura"],    equip:{weapon:null,armor:null} },
  ];
}

function getUnitStats(u) {
  let atk=u.atk,def=u.def,maxHp=u.maxHp,maxMp=u.maxMp||0;
  if(u.equip){
    const w=u.equip.weapon?EQUIPMENT[u.equip.weapon]:null;
    const a=u.equip.armor?EQUIPMENT[u.equip.armor]:null;
    if(w){atk+=w.atk||0;def+=w.def||0;maxMp+=w.mp||0;maxHp+=w.maxHp||0;}
    if(a){atk+=a.atk||0;def+=a.def||0;maxMp+=a.mp||0;maxHp+=a.maxHp||0;}
  }
  return {atk,def,maxHp,maxMp};
}

function getTileColor(x,y,bg) {
  const v=(x*3+y*7+x*y)%17;
  if(bg==="#2d5a1b") return v<3?"#3a5a30":v<8?"#2d5a1b":"#366922";
  if(bg==="#3a2a10") return v<3?"#5a3a15":v<8?"#4a2e0e":"#3a2810";
  return v<3?"#3a1010":v<8?"#2a0808":"#200606";
}

export default function App() {
  const [screen, setScreen] = useState("menu");
  const [levelIdx, setLevelIdx] = useState(0);
  const [heroes, setHeroes] = useState(makeHeroes());
  const [inventory, setInventory] = useState([]);
  const [gold, setGold] = useState(0);
  const [gs, setGs] = useState(null);
  const [skillMode, setSkillMode] = useState(null);
  const [log, setLog] = useState([]);
  const [shopTab, setShopTab] = useState("equip");

  function startLevel(idx) {
    const lvl = LEVELS[idx];
    const positioned = heroes.map((h,i)=>({...h,x:1,y:i===0?Math.floor(lvl.rows/2)-1:Math.floor(lvl.rows/2)+1}));
    setGs({ units:[...positioned,...lvl.enemies.map(e=>({...e,type:"enemy",skills:[],equip:null,mp:0,maxMp:0}))],
      food:[...lvl.food], collected:[], turn:"player", phase:"battle", movedUnits:[], attackedUnits:[], selectedUnit:null, cooldowns:{} });
    setScreen("battle");
    setLog([`第${idx+1}关「${lvl.name}」开始！`]);
  }

  function addLog(msg){setLog(l=>[msg,...l].slice(0,8));}

  function checkLevel(hero) {
    let h={...hero};
    while(h.lv<LEVEL_EXP.length&&h.exp>=LEVEL_EXP[h.lv]){
      h.lv++;h.atk+=h.cls==="assassin"?4:3;h.def+=2;h.maxHp+=h.cls==="assassin"?8:6;
      h.hp=Math.min(h.hp+10,h.maxHp);h.maxMp+=5;
      addLog(`🎉 ${h.name} 升到 Lv${h.lv}！`);
    }
    return h;
  }

  function getRange(unit,r){
    const cells=[];
    for(let dx=-r;dx<=r;dx++) for(let dy=-r;dy<=r;dy++){
      if(Math.abs(dx)+Math.abs(dy)<=r){const nx=unit.x+dx,ny=unit.y+dy;if(nx>=0&&ny>=0)cells.push(`${nx},${ny}`);}
    }
    return cells;
  }

  function finishLevel(units,inv,gld){
    const lvl=LEVELS[levelIdx];
    let newInv=[...inv],newGold=gld+lvl.reward.gold;
    if(lvl.reward.item){newInv=[...newInv,lvl.reward.item];addLog(`🏆 关卡奖励：${EQUIPMENT[lvl.reward.item]?.name}！`);}
    setInventory(newInv);setGold(newGold);
    const bp=units.filter(u=>u.type==="player");
    setHeroes(hs=>hs.map(h=>{const u=bp.find(x=>x.id===h.id);return u?{...h,hp:u.hp,exp:u.exp,lv:u.lv,atk:u.atk,def:u.def,maxHp:u.maxHp,mp:u.mp,maxMp:u.maxMp}:h;}));
    setTimeout(()=>setScreen("shop"),800);
  }

  function handleCell(x,y){
    if(!gs||gs.turn!=="player") return;
    const lvl=LEVELS[levelIdx];
    if(skillMode){
      const caster=gs.units.find(u=>u.id===skillMode.unitId);
      const sk=SKILLS[skillMode.skillId];
      if(!getRange(caster,sk.range).includes(`${x},${y}`)){setSkillMode(null);return;}
      let newUnits=[...gs.units];
      const stats=getUnitStats(caster);
      if(sk.heal){
        const target=newUnits.find(u=>u.hp>0&&u.x===x&&u.y===y&&u.type==="player");
        if(!target){setSkillMode(null);return;}
        const tStats=getUnitStats(target);
        const healAmt=Math.floor(tStats.maxHp*0.25);
        newUnits=newUnits.map(u=>u.id===target.id?{...u,hp:Math.min(u.hp+healAmt,tStats.maxHp)}:u);
        addLog(`💚 魄魄治疗 ${target.name} 恢复 ${healAmt} HP！`);
      } else if(sk.aoe){
        newUnits.filter(u=>u.hp>0&&u.type==="enemy"&&getRange({x,y},1).includes(`${u.x},${u.y}`)).forEach(t=>{
          const dmg=sk.fn(stats.atk,t.def);
          newUnits=newUnits.map(u=>u.id===t.id?{...u,hp:Math.max(0,u.hp-dmg)}:u);
          addLog(`✨ ${caster.name}【${sk.name}】→${t.name} -${dmg}HP`);
        });
      } else {
        const target=newUnits.find(u=>u.hp>0&&u.x===x&&u.y===y&&u.type==="enemy");
        if(!target){setSkillMode(null);return;}
        const dmg=sk.fn(stats.atk,target.def);
        newUnits=newUnits.map(u=>u.id===target.id?{...u,hp:Math.max(0,u.hp-dmg)}:u);
        addLog(`✨ ${caster.name}【${sk.name}】→${target.name} -${dmg}HP`);
      }
      newUnits=newUnits.map(u=>u.id===caster.id?{...u,mp:Math.max(0,u.mp-sk.mp)}:u);
      const drops=newUnits.filter(u=>u.type==="enemy"&&u.hp<=0&&gs.units.find(o=>o.id===u.id&&o.hp>0));
      let newInv=[...inventory],newGold=gold;
      drops.forEach(d=>{
        const orig=lvl.enemies.find(e=>e.id===d.id);
        if(orig?.drop){newInv=[...newInv,orig.drop];addLog(`🎁 获得：${EQUIPMENT[orig.drop]?.name}`);}
        newGold+=orig?.exp||10;
      });
      const aliveEn=newUnits.filter(u=>u.type==="enemy"&&u.hp>0);
      setInventory(newInv);setGold(newGold);setSkillMode(null);
      setGs(g=>({...g,units:newUnits,attackedUnits:[...g.attackedUnits,caster.id],cooldowns:{...g.cooldowns,[`${caster.id}_${skillMode.skillId}`]:2},phase:aliveEn.length===0?"victory":g.phase}));
      if(aliveEn.length===0) finishLevel(newUnits,newInv,newGold);
      return;
    }
    const unitHere=gs.units.find(u=>u.hp>0&&u.x===x&&u.y===y);
    if(unitHere?.type==="player"){setGs(g=>({...g,selectedUnit:unitHere.id===g.selectedUnit?null:unitHere.id}));return;}
    if(!gs.selectedUnit) return;
    const sel=gs.units.find(u=>u.id===gs.selectedUnit);
    if(!sel||sel.hp<=0) return;
    const selStats=getUnitStats(sel);
    const moveRange=gs.movedUnits.includes(sel.id)?[]:getRange(sel,sel.mov);
    const atkRange=gs.attackedUnits.includes(sel.id)?[]:getRange(sel,sel.range);
    if(unitHere?.type==="enemy"&&atkRange.includes(`${x},${y}`)){
      if(gs.attackedUnits.includes(sel.id)) return;
      const dmg=Math.max(1,selStats.atk-unitHere.def+Math.floor(Math.random()*8)-3);
      let newUnits=gs.units.map(u=>u.id===unitHere.id?{...u,hp:Math.max(0,u.hp-dmg)}:u);
      addLog(`⚔ ${sel.name} 攻击 ${unitHere.name} -${dmg}HP`);
      const drops=newUnits.filter(u=>u.type==="enemy"&&u.hp<=0&&gs.units.find(o=>o.id===u.id&&o.hp>0));
      let newInv=[...inventory],newGold=gold,expGain=0;
      drops.forEach(d=>{
        const orig=lvl.enemies.find(e=>e.id===d.id);
        if(orig?.drop){newInv=[...newInv,orig.drop];addLog(`🎁 获得：${EQUIPMENT[orig.drop]?.name}`);}
        newGold+=orig?.exp||10;expGain+=orig?.exp||10;
      });
      newUnits=newUnits.map(u=>{if(u.id===sel.id){return checkLevel({...u,exp:(u.exp||0)+(expGain>0?expGain:3)});}return u;});
      setHeroes(hs=>hs.map(h=>{const u=newUnits.find(x=>x.id===h.id&&x.type==="player");return u?{...h,...u}:h;}));
      setInventory(newInv);setGold(newGold);
      const aliveEn=newUnits.filter(u=>u.type==="enemy"&&u.hp>0);
      setGs(g=>({...g,units:newUnits,attackedUnits:[...g.attackedUnits,sel.id],phase:aliveEn.length===0?"victory":g.phase}));
      if(aliveEn.length===0) finishLevel(newUnits,newInv,newGold);
      return;
    }
    if(moveRange.includes(`${x},${y}`)&&!gs.units.find(u=>u.hp>0&&u.x===x&&u.y===y)){
      let newFood=[...gs.food],newCol=[...gs.collected];
      const fHere=gs.food.find(f=>f.x===x&&f.y===y);
      if(fHere){newFood=newFood.filter(f=>!(f.x===x&&f.y===y));newCol=[...newCol,fHere];addLog(`🐟 ${sel.name} 拾取了食物！`);}
      setGs(g=>({...g,units:g.units.map(u=>u.id===sel.id?{...u,x,y}:u),movedUnits:[...g.movedUnits,sel.id],food:newFood,collected:newCol}));
    }
  }

  function endTurn(){
    if(!gs||gs.turn!=="player") return;
    setGs(g=>{
      let units=[...g.units];
      g.units.filter(u=>u.type==="enemy"&&u.hp>0).forEach(en=>{
        const players=units.filter(u=>u.type==="player"&&u.hp>0);
        if(!players.length) return;
        const tgt=players.reduce((a,b)=>Math.abs(a.x-en.x)+Math.abs(a.y-en.y)<Math.abs(b.x-en.x)+Math.abs(b.y-en.y)?a:b);
        const dist=Math.abs(tgt.x-en.x)+Math.abs(tgt.y-en.y);
        if(dist<=en.range){
          const dmg=Math.max(1,en.atk-tgt.def+Math.floor(Math.random()*6)-2);
          units=units.map(u=>u.id===tgt.id?{...u,hp:Math.max(0,u.hp-dmg)}:u);
          addLog(`👾 ${en.name} 攻击 ${tgt.name} -${dmg}HP`);
        } else {
          let nx=en.x,ny=en.y;
          const lvl=LEVELS[levelIdx];
          for(let i=0;i<en.mov;i++){
            const tx=nx+(Math.abs(tgt.x-nx)>=Math.abs(tgt.y-ny)?Math.sign(tgt.x-nx):0);
            const ty=ny+(Math.abs(tgt.x-nx)<Math.abs(tgt.y-ny)?Math.sign(tgt.y-ny):0);
            if(tx>=0&&tx<lvl.cols&&ty>=0&&ty<lvl.rows&&!units.find(u=>u.hp>0&&u.x===tx&&u.y===ty)){nx=tx;ny=ty;}
          }
          units=units.map(u=>u.id===en.id?{...u,x:nx,y:ny}:u);
        }
      });
      const dead=units.filter(u=>u.type==="player"&&u.hp<=0).length===units.filter(u=>u.type==="player").length;
      return {...g,units,turn:"player",movedUnits:[],attackedUnits:[],selectedUnit:null,phase:dead?"gameover":g.phase};
    });
  }

  function equipItem(heroId,itemKey){
    const item=EQUIPMENT[itemKey];if(!item) return;
    setHeroes(hs=>hs.map(h=>{
      if(h.id!==heroId) return h;
      const slot=item.type==="weapon"?"weapon":"armor";
      const old=h.equip[slot];
      if(old) setInventory(inv=>{const i=[...inv];i.push(old);return i;});
      return {...h,equip:{...h.equip,[slot]:itemKey}};
    }));
    setInventory(inv=>{const i=[...inv];const idx=i.lastIndexOf(itemKey);if(idx>-1)i.splice(idx,1);return i;});
    addLog(`🔧 装备了 ${item.name}`);
  }

  function restHeroes(){
    setHeroes(hs=>hs.map(h=>{const s=getUnitStats(h);return {...h,hp:Math.min(h.hp+Math.floor(s.maxHp*0.4),s.maxHp),mp:Math.min(h.mp+20,s.maxMp)};}));
    addLog("💤 小憩一会，恢复部分HP/MP");
  }

  const sel=gs?.selectedUnit?gs.units.find(u=>u.id===gs.selectedUnit):null;
  const lvl=LEVELS[levelIdx];

  if(screen==="menu") return (
    <div style={{background:"#0d1a0d",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",color:"#d4e8b0",padding:16}}>
      <div style={{fontSize:26,fontWeight:"bold",color:"#ffe066",letterSpacing:2,marginBottom:4}}>⚔ 修修与魄魄 ⚔</div>
      <div style={{fontSize:12,color:"#a0c070",marginBottom:20}}>奇幻大陆战旗 · 三关版</div>
      <div style={{display:"flex",gap:32,marginBottom:24}}>
        {[{h:heroes[0],A:XiuXiuAvatar,col:"#ff9944",sub:"黑波斯·刺客"},{h:heroes[1],A:PoPoAvatar,col:"#88ccff",sub:"西伯利亚·法师"}].map(({h,A,col,sub})=>(
          <div key={h.id} style={{textAlign:"center"}}><A size={60}/>
            <div style={{color:col,fontWeight:"bold",marginTop:4}}>{h.name}</div>
            <div style={{fontSize:10,color:"#888"}}>{sub}</div>
            <div style={{fontSize:10,color:"#aaa"}}>Lv{h.lv} HP:{h.hp} ATK:{h.atk}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#162010",border:"1px solid #3a5a2a",borderRadius:8,padding:"10px 16px",marginBottom:20,fontSize:11,color:"#b0d080",lineHeight:1.9,maxWidth:300}}>
        🗺 共3关卡｜⚔ 普攻+技能(消耗MP)<br/>🎒 装备系统｜📈 升级成长｜🏆 击败鼠王通关
      </div>
      <button onClick={()=>startLevel(0)} style={{padding:"10px 32px",background:"#3a7a22",color:"#d4e8b0",border:"none",borderRadius:6,fontSize:14,cursor:"pointer",letterSpacing:1}}>开始冒险 ▶</button>
    </div>
  );

  if(screen==="shop"){
    const nextLvl=levelIdx+1;
    const hasNext=nextLvl<LEVELS.length;
    return (
      <div style={{background:"#0d1408",minHeight:"100vh",fontFamily:"monospace",color:"#d4e8b0",padding:16,maxWidth:680,margin:"0 auto"}}>
        <div style={{fontSize:18,color:"#ffe066",marginBottom:4}}>🏪 营地 — 第{levelIdx+1}关通关！</div>
        <div style={{fontSize:12,color:"#aaa",marginBottom:12}}>💰 金币：{gold}</div>
        <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
          {["equip","heroes"].map(t=>(
            <button key={t} onClick={()=>setShopTab(t)} style={{padding:"4px 14px",background:shopTab===t?"#3a6a22":"#1a2a12",color:shopTab===t?"#d4e8b0":"#888",border:"1px solid #3a5a2a",borderRadius:4,cursor:"pointer",fontFamily:"monospace",fontSize:12}}>
              {t==="equip"?"🎒 背包装备":"🐱 角色状态"}
            </button>
          ))}
          <button onClick={restHeroes} style={{padding:"4px 14px",background:"#1a2a3a",color:"#88ccff",border:"1px solid #2a4a6a",borderRadius:4,cursor:"pointer",fontFamily:"monospace",fontSize:12}}>💤 休息回复</button>
        </div>
        {shopTab==="equip"&&(
          <div>
            <div style={{fontSize:12,color:"#aaa",marginBottom:8}}>背包：{inventory.length===0?"（空）":""}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16}}>
              {inventory.map((key,i)=>{const it=EQUIPMENT[key];return(
                <div key={i} style={{background:"#162010",border:"1px solid #3a5a2a",borderRadius:6,padding:"8px 10px",minWidth:120}}>
                  <div style={{fontSize:13}}>{it.icon} {it.name}</div>
                  <div style={{fontSize:10,color:"#888",marginBottom:4}}>{it.desc}</div>
                  <div style={{fontSize:10,color:"#aaa",marginBottom:6}}>{it.atk>0&&`ATK+${it.atk} `}{it.def>0&&`DEF+${it.def} `}{it.mp&&`MP+${it.mp} `}{it.maxHp&&`HP+${it.maxHp}`}</div>
                  <div style={{display:"flex",gap:4}}>{heroes.map(h=>(
                    <button key={h.id} onClick={()=>equipItem(h.id,key)} style={{padding:"2px 8px",background:"#2a5a1a",color:"#c8e8a0",border:"none",borderRadius:3,cursor:"pointer",fontFamily:"monospace",fontSize:10}}>给{h.name}</button>
                  ))}</div>
                </div>
              );})}
            </div>
          </div>
        )}
        {shopTab==="heroes"&&(
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            {heroes.map(h=>{
              const s=getUnitStats(h);const A=h.avatar==="xiuxiu"?XiuXiuAvatar:PoPoAvatar;
              const expNext=h.lv<LEVEL_EXP.length?LEVEL_EXP[h.lv]:999;
              return(
                <div key={h.id} style={{background:"#162010",border:"1px solid #3a5a2a",borderRadius:8,padding:12,minWidth:200}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><A size={36}/>
                    <div><div style={{fontWeight:"bold",color:h.avatar==="xiuxiu"?"#ff9944":"#88ccff"}}>{h.name} Lv{h.lv}</div>
                    <div style={{fontSize:10,color:"#888"}}>{h.cls==="assassin"?"刺客":"法师"}</div></div>
                  </div>
                  <div style={{fontSize:11,lineHeight:2,color:"#b0d090"}}>
                    <div>HP:{h.hp}/{s.maxHp}　MP:{h.mp}/{s.maxMp}</div>
                    <div>ATK:{s.atk}　DEF:{s.def}</div>
                    <div>EXP:{h.exp}/{expNext}</div>
                    <div>武器:{h.equip.weapon?EQUIPMENT[h.equip.weapon].icon+EQUIPMENT[h.equip.weapon].name:"—"}</div>
                    <div>防具:{h.equip.armor?EQUIPMENT[h.equip.armor].icon+EQUIPMENT[h.equip.armor].name:"—"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div style={{marginTop:20}}>
          {hasNext&&<button onClick={()=>{setLevelIdx(nextLvl);startLevel(nextLvl);}} style={{padding:"10px 24px",background:"#3a6a22",color:"#d4e8b0",border:"none",borderRadius:6,fontSize:13,cursor:"pointer",fontFamily:"monospace"}}>前往第{nextLvl+1}关「{LEVELS[nextLvl].name}」▶</button>}
          {!hasNext&&<button onClick={()=>setScreen("win")} style={{padding:"10px 24px",background:"#8a6a00",color:"#ffe066",border:"none",borderRadius:6,fontSize:13,cursor:"pointer",fontFamily:"monospace"}}>🏆 查看结局</button>}
        </div>
      </div>
    );
  }

  if(screen==="gameover") return (
    <div style={{background:"#0d0505",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",color:"#d4e8b0"}}>
      <div style={{fontSize:32,color:"#ff4444",marginBottom:12}}>💀 战败...</div>
      <button onClick={()=>{setHeroes(makeHeroes());setLevelIdx(0);setInventory([]);setGold(0);setScreen("menu");}} style={{padding:"10px 28px",background:"#7a2222",color:"#d4e8b0",border:"none",borderRadius:6,fontSize:14,cursor:"pointer"}}>重新开始</button>
    </div>
  );

  if(screen==="win") return (
    <div style={{background:"#0a0d00",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",color:"#d4e8b0",padding:20}}>
      <div style={{fontSize:30,color:"#ffe066",marginBottom:8}}>🎊 通关！</div>
      <div style={{display:"flex",gap:24,marginBottom:16}}><XiuXiuAvatar size={60}/><PoPoAvatar size={60}/></div>
      <div style={{color:"#a0c070",fontSize:13,textAlign:"center",marginBottom:16,lineHeight:1.8}}>修修与魄魄击败了鼠王，收复了奇幻大陆的和平！<br/>金币：{gold} 枚</div>
      <button onClick={()=>{setHeroes(makeHeroes());setLevelIdx(0);setInventory([]);setGold(0);setScreen("menu");}} style={{padding:"10px 28px",background:"#3a7a22",color:"#d4e8b0",border:"none",borderRadius:6,fontSize:14,cursor:"pointer"}}>再玩一次</button>
    </div>
  );

  if(!gs) return null;
  const cols=lvl.cols,rows=lvl.rows,TILE=60;
  const moveRange=sel&&!gs.movedUnits.includes(sel.id)?getRange(sel,sel.mov):[];
  const atkRange=sel&&!gs.attackedUnits.includes(sel.id)?getRange(sel,sel.range):[];
  const skRange=skillMode?getRange(gs.units.find(u=>u.id===skillMode.unitId),SKILLS[skillMode.skillId].range):[];

  return (
    <div style={{background:"#0a1208",minHeight:"100vh",display:"flex",gap:10,padding:10,fontFamily:"monospace",color:"#c8dca8",overflow:"auto"}}>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        <div style={{fontSize:13,color:"#ffe066"}}>第{levelIdx+1}关「{lvl.name}」　{gs.turn==="player"?"🐱 玩家回合":"👾 敌方行动"}</div>
        <div style={{display:"grid",gridTemplateColumns:`repeat(${cols},${TILE}px)`,gridTemplateRows:`repeat(${rows},${TILE}px)`,border:"2px solid #3a5a2a",borderRadius:4,overflow:"hidden"}}>
          {Array.from({length:rows},(_,y)=>Array.from({length:cols},(_,x)=>{
            const key=`${x},${y}`;
            const unit=gs.units.find(u=>u.hp>0&&u.x===x&&u.y===y);
            const food=gs.food.find(f=>f.x===x&&f.y===y);
            const isMove=moveRange.includes(key);
            const isAtk=atkRange.includes(key)&&gs.units.find(u=>u.hp>0&&u.x===x&&u.y===y&&u.type==="enemy");
            const isSk=skillMode&&skRange.includes(key);
            const isSel=sel&&sel.x===x&&sel.y===y;
            const base=getTileColor(x,y,lvl.bg);
            return(
              <div key={key} onClick={()=>handleCell(x,y)}
                style={{width:TILE,height:TILE,background:isSel?"#2255aa55":isSk?"#aa44cc55":isAtk?"#aa222255":isMove?"#2288aa44":base,
                  border:isSel?"2px solid #6699ff":isSk?"2px solid #cc66ff":isAtk?"2px solid #ff6666":isMove?"1px solid #44aacc66":"1px solid rgba(0,0,0,0.3)",
                  display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",cursor:"pointer"}}>
                {food&&<div style={{fontSize:18}}>{food.type==="fish"?"🐟":"🥩"}</div>}
                {unit&&(
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
                    {unit.avatar==="xiuxiu"?<XiuXiuAvatar size={34}/>:unit.avatar==="popo"?<PoPoAvatar size={34}/>:<RatSprite size={28} captain={unit.captain} boss={unit.boss}/>}
                    <div style={{width:34,height:3,background:"#333",borderRadius:2,overflow:"hidden"}}>
                      <div style={{width:`${(unit.hp/unit.maxHp)*100}%`,height:"100%",background:unit.type==="player"?"#44cc44":"#cc3333"}}/>
                    </div>
                    {unit.mp>0&&<div style={{width:34,height:2,background:"#222",borderRadius:1,overflow:"hidden"}}>
                      <div style={{width:`${(unit.mp/unit.maxMp)*100}%`,height:"100%",background:"#4488ff"}}/>
                    </div>}
                  </div>
                )}
              </div>
            );
          }))}
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <button onClick={endTurn} disabled={gs.turn!=="player"} style={{padding:"6px 18px",background:gs.turn==="player"?"#3a6a22":"#222",color:gs.turn==="player"?"#c8dca8":"#555",border:"1px solid #3a5a2a",borderRadius:5,cursor:gs.turn==="player"?"pointer":"not-allowed",fontFamily:"monospace",fontSize:12}}>结束回合 →</button>
          {skillMode&&<span style={{fontSize:11,color:"#cc88ff"}}>选择技能目标</span>}
          {!skillMode&&sel&&<span style={{fontSize:11,color:"#aaa"}}>已选：{sel.name}</span>}
        </div>
        <div style={{background:"#0d1a0d",border:"1px solid #2a4020",borderRadius:6,padding:"6px 10px",height:100,overflowY:"auto",fontSize:10,color:"#90b870"}}>
          {log.map((l,i)=><div key={i} style={{opacity:1-i*0.1}}>{l}</div>)}
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8,minWidth:170}}>
        {heroes.map(h=>{
          const alive=gs.units.find(u=>u.id===h.id);
          const A=h.avatar==="xiuxiu"?XiuXiuAvatar:PoPoAvatar;
          const isSelH=gs.selectedUnit===h.id;
          return(
            <div key={h.id} onClick={()=>setGs(g=>({...g,selectedUnit:isSelH?null:h.id}))}
              style={{background:isSelH?"#1e3a14":"#111a0d",border:`1px solid ${isSelH?"#66aa44":"#2a4020"}`,borderRadius:8,padding:"8px 10px",cursor:"pointer"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><A size={28}/>
                <div><div style={{fontSize:12,fontWeight:"bold",color:h.avatar==="xiuxiu"?"#ff9944":"#88ccff"}}>{h.name} Lv{alive?.lv||h.lv}</div></div>
              </div>
              {alive&&<>
                <div style={{fontSize:10,marginBottom:2}}>HP <span style={{color:alive.hp>alive.maxHp*0.3?"#44cc44":"#ff4444"}}>{alive.hp}</span>/{getUnitStats(alive).maxHp}</div>
                <div style={{width:"100%",height:4,background:"#333",borderRadius:2,marginBottom:3}}><div style={{width:`${(alive.hp/getUnitStats(alive).maxHp)*100}%`,height:"100%",background:alive.hp>alive.maxHp*0.3?"#44cc44":"#ff4444",borderRadius:2}}/></div>
                <div style={{fontSize:10,marginBottom:2}}>MP <span style={{color:"#4488ff"}}>{alive.mp}</span>/{getUnitStats(alive).maxMp}</div>
                <div style={{width:"100%",height:3,background:"#222",borderRadius:2,marginBottom:6}}><div style={{width:`${(alive.mp/getUnitStats(alive).maxMp)*100}%`,height:"100%",background:"#4488ff",borderRadius:2}}/></div>
                <div style={{fontSize:10,color:"#888",marginBottom:4}}>ATK:{getUnitStats(alive).atk} DEF:{getUnitStats(alive).def}</div>
                {isSelH&&gs.turn==="player"&&!gs.attackedUnits.includes(h.id)&&alive.hp>0&&(
                  <div style={{display:"flex",flexDirection:"column",gap:3}}>
                    {h.skills.map(sk=>{
                      const ski=SKILLS[sk];const cd=gs.cooldowns?.[`${h.id}_${sk}`]||0;const noMp=alive.mp<ski.mp;const onCd=cd>0;
                      return(
                        <button key={sk} disabled={noMp||onCd} onClick={e=>{e.stopPropagation();if(!noMp&&!onCd)setSkillMode({unitId:h.id,skillId:sk});}}
                          style={{padding:"3px 6px",background:skillMode?.skillId===sk?"#6a22aa":(!noMp&&!onCd)?"#2a2a6a":"#222",color:!noMp&&!onCd?"#cc99ff":"#555",border:"1px solid #3a3a7a",borderRadius:3,cursor:!noMp&&!onCd?"pointer":"not-allowed",fontFamily:"monospace",fontSize:10,textAlign:"left"}}>
                          {ski.icon}{ski.name} <span style={{color:"#4488ff"}}>MP{ski.mp}</span>{onCd?` CD${cd}`:""}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>}
            </div>
          );
        })}
        <div style={{background:"#1a0d0d",border:"1px solid #4a2020",borderRadius:8,padding:"8px 10px",fontSize:10}}>
          <div style={{color:"#ff8888",marginBottom:4,fontSize:11}}>👾 敌方</div>
          {gs.units.filter(u=>u.type==="enemy"&&u.hp>0).map(u=>(
            <div key={u.id} style={{marginBottom:4}}>
              <div style={{color:"#cc8888"}}>{u.boss?"👑":u.captain?"⭐":""}{u.name}</div>
              <div style={{width:"100%",height:3,background:"#333",borderRadius:2}}><div style={{width:`${(u.hp/u.maxHp)*100}%`,height:"100%",background:"#cc3333",borderRadius:2}}/></div>
              <div style={{color:"#888"}}>{u.hp}/{u.maxHp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
