// ============================================================
// 游戏核心数据
// ============================================================

// ---------- 角色头像 SVG 数据 ----------
export const AVATAR_PIXELS = {
  xiuxiu: [
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
  ],
  popo: [
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
  ],
};

// ---------- 技能 ----------
export const SKILLS = {
  shadow_strike: { name:"暗影突袭", icon:"🌑", mp:20, desc:"跳至敌后方，伤害×2.0", range:4, aoe:false, fn:(atk,def)=>Math.max(1,Math.floor(atk*2.0-def)) },
  claw_storm:    { name:"爪刃风暴", icon:"🌀", mp:25, desc:"周围1格所有敌人，伤害×1.5", range:1, aoe:true,  fn:(atk,def)=>Math.max(1,Math.floor(atk*1.5-def)) },
  vanish:        { name:"消影步",   icon:"💨", mp:15, desc:"移动+2格，本回合闪避+30%", range:0, aoe:false, utility:true, fn:()=>0 },
  lethal_blade:  { name:"必杀爪刃", icon:"⚡", mp:35, desc:"单体伤害×3.0，需满HP", range:3, aoe:false, fn:(atk,def)=>Math.max(1,Math.floor(atk*3.0-def)) },
  ice_arrow:     { name:"寒冰箭",   icon:"❄️", mp:15, desc:"远程单体，伤害×1.8，减速", range:4, aoe:false, fn:(atk,def)=>Math.max(1,Math.floor(atk*1.8-def)) },
  heal_aura:     { name:"治愈光环", icon:"💚", mp:20, desc:"治疗己方单位25%最大HP", range:3, aoe:false, heal:true, fn:()=>0 },
  blizzard:      { name:"暴风雪",   icon:"🌨️", mp:35, desc:"3×3范围，伤害×1.3", range:4, aoe:true,  fn:(atk,def)=>Math.max(1,Math.floor(atk*1.3-def)) },
  barrier:       { name:"冰盾",     icon:"🛡️", mp:20, desc:"为己方单位添加护盾(20)", range:3, aoe:false, shield:true, fn:()=>0 },
  // 羁绊技能
  bond_blizzard: { name:"双星冰刃", icon:"✨", mp:40, desc:"【羁绊】修修冲刺+魄魄冰封，对单体伤害×4.0", range:4, aoe:false, bond:true, fn:(atk,def)=>Math.max(1,Math.floor(atk*4.0-def)) },
};

// ---------- 技能树 ----------
export const SKILL_TREES = {
  xiuxiu: {
    nodes: [
      { id:"s1", name:"暗影突袭+",  icon:"🌑", cost:1, requires:[], effect:"shadow_strike伤害提升至×2.5", skillBonus:{shadow_strike:{mult:0.5}} },
      { id:"s2", name:"爪刃风暴+",  icon:"🌀", cost:1, requires:[], effect:"爪刃风暴范围扩大至2格",   skillBonus:{claw_storm:{range:1}} },
      { id:"s3", name:"消影步",     icon:"💨", cost:2, requires:["s1"], effect:"解锁技能：消影步",     unlockSkill:"vanish" },
      { id:"s4", name:"必杀爪刃",   icon:"⚡", cost:3, requires:["s2","s3"], effect:"解锁技能：必杀爪刃", unlockSkill:"lethal_blade" },
      { id:"s5", name:"暗影体质",   icon:"🖤", cost:1, requires:[], effect:"HP+20，移动+1",           statBonus:{maxHp:20,mov:1} },
      { id:"s6", name:"刺客精通",   icon:"🗡️", cost:2, requires:["s5"], effect:"ATK+10，暴击率+15%",  statBonus:{atk:10,crit:15} },
    ]
  },
  popo: {
    nodes: [
      { id:"p1", name:"寒冰箭+",   icon:"❄️", cost:1, requires:[], effect:"寒冰箭伤害提升至×2.2",    skillBonus:{ice_arrow:{mult:0.4}} },
      { id:"p2", name:"暴风雪",    icon:"🌨️", cost:2, requires:["p1"], effect:"解锁技能：暴风雪",     unlockSkill:"blizzard" },
      { id:"p3", name:"治愈光环+", icon:"💚", cost:1, requires:[], effect:"治愈量提升至35%最大HP",    skillBonus:{heal_aura:{healRate:0.1}} },
      { id:"p4", name:"冰盾",      icon:"🛡️", cost:2, requires:["p3"], effect:"解锁技能：冰盾",       unlockSkill:"barrier" },
      { id:"p5", name:"法师冥想",  icon:"🔮", cost:1, requires:[], effect:"MP+20，MP上限+10",         statBonus:{mp:20,maxMp:10} },
      { id:"p6", name:"元素精通",  icon:"💎", cost:2, requires:["p5"], effect:"所有技能伤害+15%，MP消耗-5", statBonus:{spellPower:15,mpDiscount:5} },
    ]
  }
};

// ---------- 装备 ----------
export const EQUIPMENT = {
  shadow_blade:    { name:"暗影刃",   icon:"🗡️", type:"weapon", atk:15, def:0,  tier:1, desc:"锋利的暗影之刃" },
  iron_collar:     { name:"铁护颈",   icon:"🔩", type:"armor",  atk:0,  def:12, tier:1, desc:"坚固的铁制护颈" },
  magic_crystal:   { name:"魔法水晶", icon:"💎", type:"weapon", atk:12, def:0,  mp:10,  tier:1, desc:"蕴含魔力的水晶" },
  fur_cape:        { name:"毛皮斗篷", icon:"🧣", type:"armor",  atk:0,  def:8,  maxHp:15, tier:1, desc:"温暖的西伯利亚毛皮" },
  rat_fang:        { name:"鼠牙匕首", icon:"🦷", type:"weapon", atk:8,  def:0,  tier:1, desc:"从鼠将处夺来的獠牙" },
  ancient_robe:    { name:"古代法袍", icon:"👘", type:"armor",  atk:0,  def:5,  mp:15,  tier:1, desc:"来自上古时代的魔法袍" },
  // 锻造/升级装备
  shadow_blade2:   { name:"暗影刃·改", icon:"🗡️", type:"weapon", atk:28, def:0,  tier:2, desc:"精炼后的暗影之刃，锋芒更甚", upgradedFrom:"shadow_blade" },
  enchanted_robe:  { name:"附魔法袍", icon:"✨", type:"armor",  atk:0,  def:12, mp:25, tier:2, desc:"附有冰系魔法的法袍", upgradedFrom:"ancient_robe" },
  void_claw:       { name:"虚空爪",   icon:"💀", type:"weapon", atk:40, def:0,  tier:3, desc:"传说中的虚空之爪，内含暗能量" },
  blizzard_staff:  { name:"暴风雪法杖",icon:"❄️",type:"weapon", atk:35, def:0,  mp:30, tier:3, desc:"常年降雪的古代法杖" },
};

// ---------- 锻造配方 ----------
export const FORGE_RECIPES = [
  { id:"f1", result:"shadow_blade2", name:"精炼暗影刃", materials:{ shadow_blade:1, iron_shard:3 }, gold:80, desc:"将暗影刃重新锻造" },
  { id:"f2", result:"enchanted_robe", name:"附魔法袍",  materials:{ ancient_robe:1, magic_essence:2 }, gold:100, desc:"为法袍注入冰系魔力" },
  { id:"f3", result:"void_claw",      name:"召唤虚空爪", materials:{ shadow_blade2:1, void_crystal:1 }, gold:200, desc:"融合虚空之力" },
  { id:"f4", result:"blizzard_staff", name:"铸造暴风雪法杖", materials:{ magic_crystal:2, ancient_robe:1, frost_gem:1 }, gold:180, desc:"凝聚冰霜精华" },
];

// ---------- 材料道具 ----------
export const MATERIALS = {
  iron_shard:    { name:"铁碎片",   icon:"🔧", desc:"普通金属碎片" },
  magic_essence: { name:"魔法精华", icon:"🧪", desc:"提炼自法器的能量精华" },
  void_crystal:  { name:"虚空水晶", icon:"🔮", desc:"来自虚空裂缝的神秘结晶" },
  frost_gem:     { name:"冰霜宝石", icon:"💠", desc:"凝结的永恒冰霜" },
};

// ---------- 经验值表 ----------
export const LEVEL_EXP = [0, 30, 80, 160, 280, 440, 650, 900, 1200, 1560];

// ---------- 世界地图节点 ----------
export const WORLD_MAP = {
  cols: 9,
  rows: 7,
  nodes: [
    // 章节一：荒野
    { id:"start",   x:1, y:3, type:"village",  name:"初始村",      icon:"🏠", chapter:0, unlocked:true,  storyId:"prologue" },
    { id:"wild1",   x:2, y:2, type:"battle",   name:"荒野鼠患",    icon:"⚔️", chapter:1, unlocked:false, levelId:0, prereqs:["start"] },
    { id:"shop1",   x:2, y:4, type:"shop",     name:"旅行商人",    icon:"🛒", chapter:1, unlocked:false, prereqs:["start"] },
    { id:"tomb1",   x:3, y:3, type:"battle",   name:"古墓迷阵",    icon:"⚔️", chapter:1, unlocked:false, levelId:1, prereqs:["wild1"], storyId:"pre_tomb" },
    { id:"rest1",   x:4, y:2, type:"rest",     name:"篝火营地",    icon:"🔥", chapter:1, unlocked:false, prereqs:["tomb1"] },
    { id:"forge1",  x:4, y:4, type:"forge",    name:"矮人锻炉",    icon:"⚒️", chapter:1, unlocked:false, prereqs:["tomb1"] },
    // 章节二：要塞
    { id:"fortress",x:5, y:1, type:"battle",   name:"鼠王要塞",    icon:"👑", chapter:2, unlocked:false, levelId:2, prereqs:["rest1","forge1"], storyId:"pre_fortress" },
    { id:"shop2",   x:5, y:5, type:"shop",     name:"黑市商人",    icon:"🛒", chapter:2, unlocked:false, prereqs:["rest1"] },
    { id:"secret1", x:6, y:3, type:"secret",   name:"神秘遗迹",    icon:"🔮", chapter:2, unlocked:false, prereqs:["fortress"], storyId:"secret" },
    { id:"boss1",   x:7, y:3, type:"battle",   name:"终幕之战",    icon:"💀", chapter:3, unlocked:false, levelId:3, prereqs:["secret1"], storyId:"pre_final" },
    { id:"end",     x:8, y:3, type:"ending",   name:"和平彼岸",    icon:"🌟", chapter:3, unlocked:false, prereqs:["boss1"], storyId:"epilogue" },
  ],
  edges: [
    ["start","wild1"],["start","shop1"],
    ["wild1","tomb1"],["shop1","tomb1"],
    ["tomb1","rest1"],["tomb1","forge1"],
    ["rest1","fortress"],["forge1","fortress"],
    ["rest1","shop2"],
    ["fortress","secret1"],
    ["secret1","boss1"],
    ["boss1","end"],
  ]
};

// ---------- 第四关（终幕）----------
export const LEVEL4 = {
  id:4, name:"终幕之战", cols:12, rows:9, bg:"#050008",
  enemies:[
    {id:"e1",name:"虚空卫士",x:9,y:1,hp:80,maxHp:80,atk:30,def:10,mov:2,range:1,exp:30,avatar:"rat",captain:true,drop:"iron_shard"},
    {id:"e2",name:"虚空卫士",x:9,y:7,hp:80,maxHp:80,atk:30,def:10,mov:2,range:1,exp:30,avatar:"rat",captain:true,drop:null},
    {id:"e3",name:"虚空法师",x:10,y:3,hp:65,maxHp:65,atk:38,def:6,mov:1,range:3,exp:35,avatar:"rat",drop:"magic_essence"},
    {id:"e4",name:"虚空法师",x:10,y:5,hp:65,maxHp:65,atk:38,def:6,mov:1,range:3,exp:35,avatar:"rat",drop:null},
    {id:"boss",name:"虚空领主",x:11,y:4,hp:250,maxHp:250,atk:50,def:20,mov:2,range:2,exp:150,avatar:"rat",boss:true,drop:"void_crystal"},
  ],
  food:[{x:11,y:0,type:"fish"},{x:11,y:8,type:"meat"},{x:7,y:4,type:"fish"},{x:11,y:4,type:"meat"},{x:5,y:2,type:"fish"}],
  reward:{gold:200, item:null},
};

// ---------- 剧情对话 ----------
export const STORIES = {
  prologue: {
    title:"序章",
    scenes: [
      { speaker:"旁白", text:"奇幻大陆，某个宁静的村庄…", bg:"village" },
      { speaker:"魄魄", avatar:"popo", text:"修修！快起来！村子被鼠兵包围了！", mood:"urgent" },
      { speaker:"修修", avatar:"xiuxiu", text:"……（揉眼睛）…几点了……", mood:"sleepy" },
      { speaker:"魄魄", avatar:"popo", text:"现在不是睡觉的时候啦！！", mood:"angry" },
      { speaker:"修修", avatar:"xiuxiu", text:"好好好，我就知道和你同住迟早出事。", mood:"normal" },
      { speaker:"魄魄", avatar:"popo", text:"你说什么？！", mood:"angry" },
      { speaker:"修修", avatar:"xiuxiu", text:"……开玩笑的。走，打鼠去。", mood:"smile" },
      { speaker:"旁白", text:"两人的奇幻冒险，就这样开始了。", bg:"village" },
    ]
  },
  pre_tomb: {
    title:"古墓前",
    scenes: [
      { speaker:"修修", avatar:"xiuxiu", text:"这地方阴气好重，有点瘆人啊……", mood:"nervous" },
      { speaker:"魄魄", avatar:"popo", text:"怕了？堂堂刺客被一座古墓吓到？", mood:"tease" },
      { speaker:"修修", avatar:"xiuxiu", text:"谁说怕了！就是觉得……不太吉利。", mood:"normal" },
      { speaker:"魄魄", avatar:"popo", text:"听说鼠族的祭司在里面布了阵法……我们小心点。", mood:"serious" },
      { speaker:"修修", avatar:"xiuxiu", text:"放心，有我在，没有闯不过的阵。", mood:"confident" },
      { speaker:"魄魄", avatar:"popo", text:"……那我跟紧你了。", mood:"gentle" },
    ]
  },
  pre_fortress: {
    title:"要塞前",
    scenes: [
      { speaker:"旁白", text:"远处，黑色的要塞在暗夜中散发着诡异的光芒。", bg:"fortress" },
      { speaker:"魄魄", avatar:"popo", text:"鼠王就在里面……我们真的能赢吗？", mood:"worried" },
      { speaker:"修修", avatar:"xiuxiu", text:"问我？我是来打架的，不是来算命的。", mood:"normal" },
      { speaker:"魄魄", avatar:"popo", text:"…你就不能说点鼓励的话？", mood:"sad" },
      { speaker:"修修", avatar:"xiuxiu", text:"……（停顿）……一起回家。打完就一起回家。", mood:"serious" },
      { speaker:"魄魄", avatar:"popo", text:"……嗯。", mood:"moved" },
      { speaker:"旁白", text:"两人并肩，踏入了要塞的大门。", bg:"fortress" },
    ]
  },
  secret: {
    title:"神秘遗迹",
    scenes: [
      { speaker:"旁白", text:"古老的石碑上，刻着两个相互依靠的身影。", bg:"ruin" },
      { speaker:"修修", avatar:"xiuxiu", text:"这画的……是猫？", mood:"curious" },
      { speaker:"魄魄", avatar:"popo", text:"上面的文字我认识……「双星合璧，虚空归零」", mood:"reading" },
      { speaker:"修修", avatar:"xiuxiu", text:"什么意思？", mood:"curious" },
      { speaker:"魄魄", avatar:"popo", text:"意思是……两个人同心合力，才能封印虚空的力量。", mood:"serious" },
      { speaker:"修修", avatar:"xiuxiu", text:"……（看向魄魄）那咱俩凑一对正好。", mood:"smile" },
      { speaker:"魄魄", avatar:"popo", text:"谁……谁跟你凑一对！！", mood:"flustered" },
      { speaker:"旁白", text:"石碑发出淡淡的光芒，两人的羁绊得到了认可。", bg:"ruin" },
      { speaker:"系统", text:"【双星合璧】技能已解锁！修修和魄魄的羁绊达到了新境界。", mood:"system" },
    ]
  },
  pre_final: {
    title:"终幕前",
    scenes: [
      { speaker:"旁白", text:"虚空领主的气息扭曲了空间，黑暗笼罩着大地。", bg:"void" },
      { speaker:"魄魄", avatar:"popo", text:"它比鼠王强太多了……我感受到了极大的威压。", mood:"worried" },
      { speaker:"修修", avatar:"xiuxiu", text:"那又怎样。（握紧爪刃）", mood:"determined" },
      { speaker:"魄魄", avatar:"popo", text:"修修……", mood:"gentle" },
      { speaker:"修修", avatar:"xiuxiu", text:"你记得遗迹里说的吗？双星合璧。", mood:"serious" },
      { speaker:"魄魄", avatar:"popo", text:"……记得。（深呼吸）好。我们一起。", mood:"determined" },
      { speaker:"修修", avatar:"xiuxiu", text:"这才对。走了，别让它等太久。", mood:"smile" },
    ]
  },
  epilogue: {
    title:"尾声",
    scenes: [
      { speaker:"旁白", text:"虚空领主被封印，奇幻大陆重归宁静。", bg:"peace" },
      { speaker:"魄魄", avatar:"popo", text:"终于……结束了。", mood:"relieved" },
      { speaker:"修修", avatar:"xiuxiu", text:"嗯。（望着远处的日落）", mood:"peaceful" },
      { speaker:"魄魄", avatar:"popo", text:"……修修，谢谢你一直保护我。", mood:"gentle" },
      { speaker:"修修", avatar:"xiuxiu", text:"说什么傻话。你也一直在保护我。", mood:"smile" },
      { speaker:"魄魄", avatar:"popo", text:"（笑）……以后还要一起冒险吗？", mood:"happy" },
      { speaker:"修修", avatar:"xiuxiu", text:"当然。——但今天先回家睡觉。", mood:"tired" },
      { speaker:"魄魄", avatar:"popo", text:"哈哈哈！走啦！", mood:"happy" },
      { speaker:"旁白", text:"修修与魄魄，并肩踏上归途。\n故事，还在继续……", bg:"peace" },
    ]
  },
  // 羁绊对话（好感度达到阈值触发）
  bond_10: {
    title:"初次默契",
    scenes: [
      { speaker:"修修", avatar:"xiuxiu", text:"魄魄，你今天表现还不错嘛。", mood:"normal" },
      { speaker:"魄魄", avatar:"popo", text:"……「还不错」？我救了你两次好吗！", mood:"angry" },
      { speaker:"修修", avatar:"xiuxiu", text:"嗯，所以说不错嘛。（眼神飘开）", mood:"awkward" },
      { speaker:"魄魄", avatar:"popo", text:"……算了，我懒得跟你计较。", mood:"sigh" },
    ]
  },
  bond_25: {
    title:"共同休息",
    scenes: [
      { speaker:"旁白", text:"篝火旁，两人各自靠着背包坐着。", bg:"campfire" },
      { speaker:"魄魄", avatar:"popo", text:"修修……你为什么要当刺客？", mood:"curious" },
      { speaker:"修修", avatar:"xiuxiu", text:"……（想了很久）因为快。不用想太多，直接解决问题。", mood:"honest" },
      { speaker:"魄魄", avatar:"popo", text:"……原来如此。（轻声）其实你想得很多的，对吧？", mood:"gentle" },
      { speaker:"修修", avatar:"xiuxiu", text:"……（沉默）……少废话，睡觉。", mood:"flustered" },
      { speaker:"魄魄", avatar:"popo", text:"（微笑，不说话）", mood:"smile" },
    ]
  },
  bond_50: {
    title:"心意相通",
    scenes: [
      { speaker:"旁白", text:"战斗之后，修修挡在了魄魄身前。", bg:"battle" },
      { speaker:"魄魄", avatar:"popo", text:"修修！你没事吧！？", mood:"worried" },
      { speaker:"修修", avatar:"xiuxiu", text:"……没事。就是……有点怕你受伤。", mood:"serious" },
      { speaker:"魄魄", avatar:"popo", text:"……（眼眶微红）笨蛋……", mood:"moved" },
      { speaker:"修修", avatar:"xiuxiu", text:"叫我什么？", mood:"normal" },
      { speaker:"魄魄", avatar:"popo", text:"笨——蛋！（转头不看他）", mood:"flustered" },
      { speaker:"旁白", text:"【羁绊升华！「双星合璧」技能解锁预备！】", bg:"battle" },
    ]
  },
};

// ---------- 关卡数据 ----------
export const LEVELS = [
  {
    id:1, name:"荒野鼠患", cols:9, rows:7, bg:"#2d5a1b",
    enemies:[
      {id:"r1",name:"鼠兵",x:7,y:1,hp:40,maxHp:40,atk:18,def:4,mov:2,range:1,exp:12,avatar:"rat",drop:null},
      {id:"r2",name:"鼠兵",x:7,y:5,hp:40,maxHp:40,atk:18,def:4,mov:2,range:1,exp:12,avatar:"rat",drop:null},
      {id:"r3",name:"鼠将",x:8,y:3,hp:70,maxHp:70,atk:24,def:8,mov:1,range:1,exp:25,avatar:"rat",captain:true,drop:"rat_fang"},
    ],
    food:[{x:8,y:1,type:"fish"},{x:8,y:5,type:"meat"}],
    reward:{gold:30,item:"iron_collar"},
    materials:[{type:"iron_shard",count:2}],
  },
  {
    id:2, name:"古墓迷阵", cols:10, rows:8, bg:"#3a2a10",
    enemies:[
      {id:"r1",name:"鼠弓手",x:8,y:0,hp:35,maxHp:35,atk:20,def:3,mov:2,range:2,exp:15,avatar:"rat",drop:null},
      {id:"r2",name:"鼠弓手",x:8,y:7,hp:35,maxHp:35,atk:20,def:3,mov:2,range:2,exp:15,avatar:"rat",drop:null},
      {id:"r3",name:"鼠卫兵",x:7,y:2,hp:55,maxHp:55,atk:22,def:10,mov:2,range:1,exp:18,avatar:"rat",captain:true,drop:null},
      {id:"r4",name:"鼠卫兵",x:7,y:5,hp:55,maxHp:55,atk:22,def:10,mov:2,range:1,exp:18,avatar:"rat",captain:true,drop:null},
      {id:"r5",name:"鼠祭司",x:9,y:4,hp:50,maxHp:50,atk:26,def:6,mov:1,range:3,exp:22,avatar:"rat",drop:"magic_crystal"},
    ],
    food:[{x:9,y:1,type:"fish"},{x:9,y:6,type:"meat"},{x:5,y:4,type:"fish"}],
    reward:{gold:55,item:"fur_cape"},
    materials:[{type:"magic_essence",count:1},{type:"iron_shard",count:3}],
  },
  {
    id:3, name:"鼠王要塞", cols:11, rows:8, bg:"#1a0a0a",
    enemies:[
      {id:"r1",name:"精英鼠兵",x:7,y:0,hp:60,maxHp:60,atk:25,def:8,mov:2,range:1,exp:20,avatar:"rat",captain:true,drop:null},
      {id:"r2",name:"精英鼠兵",x:7,y:7,hp:60,maxHp:60,atk:25,def:8,mov:2,range:1,exp:20,avatar:"rat",captain:true,drop:null},
      {id:"r3",name:"鼠法师",x:9,y:2,hp:50,maxHp:50,atk:30,def:5,mov:1,range:3,exp:25,avatar:"rat",drop:"ancient_robe"},
      {id:"r4",name:"鼠法师",x:9,y:5,hp:50,maxHp:50,atk:30,def:5,mov:1,range:3,exp:25,avatar:"rat",drop:null},
      {id:"boss",name:"鼠王",x:10,y:4,hp:160,maxHp:160,atk:38,def:14,mov:2,range:1,exp:80,avatar:"rat",boss:true,drop:"shadow_blade"},
    ],
    food:[{x:10,y:1,type:"fish"},{x:10,y:7,type:"meat"},{x:6,y:4,type:"fish"},{x:10,y:4,type:"meat"}],
    reward:{gold:100,item:null},
    materials:[{type:"frost_gem",count:1},{type:"magic_essence",count:2}],
  },
  LEVEL4,
];

// ---------- 初始英雄 ----------
export function makeHeroes() {
  return [
    {
      id:"xiuxiu", name:"修修", type:"player", cls:"assassin",
      x:1, y:2, hp:90, maxHp:90, atk:32, def:10, mov:3, range:1,
      mp:40, maxMp:40, avatar:"xiuxiu", exp:0, lv:1,
      skills:["shadow_strike","claw_storm"],
      equip:{weapon:null,armor:null},
      skillPoints:0, statPoints:0,
      unlockedSkillNodes:[], crit:0, spellPower:0,
    },
    {
      id:"popo", name:"魄魄", type:"player", cls:"mage",
      x:1, y:5, hp:70, maxHp:70, atk:26, def:8, mov:2, range:3,
      mp:60, maxMp:60, avatar:"popo", exp:0, lv:1,
      skills:["ice_arrow","heal_aura"],
      equip:{weapon:null,armor:null},
      skillPoints:0, statPoints:0,
      unlockedSkillNodes:[], crit:0, spellPower:0, mpDiscount:0,
    },
  ];
}

export function getUnitStats(u) {
  let atk=u.atk, def=u.def, maxHp=u.maxHp, maxMp=u.maxMp||0, mov=u.mov;
  if(u.equip){
    const w = u.equip.weapon ? EQUIPMENT[u.equip.weapon] : null;
    const a = u.equip.armor  ? EQUIPMENT[u.equip.armor]  : null;
    if(w){ atk+=w.atk||0; def+=w.def||0; maxMp+=w.mp||0; maxHp+=w.maxHp||0; }
    if(a){ atk+=a.atk||0; def+=a.def||0; maxMp+=a.mp||0; maxHp+=a.maxHp||0; }
  }
  return { atk, def, maxHp, maxMp, mov };
}

export function getTileColor(x,y,bg) {
  const v=(x*3+y*7+x*y)%17;
  if(bg==="#2d5a1b") return v<3?"#3a5a30":v<8?"#2d5a1b":"#366922";
  if(bg==="#3a2a10") return v<3?"#5a3a15":v<8?"#4a2e0e":"#3a2810";
  if(bg==="#050008") return v<3?"#1a0030":v<8?"#0d0018":"#180028";
  return v<3?"#3a1010":v<8?"#2a0808":"#200606";
}
