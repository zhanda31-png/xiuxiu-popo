import { AVATAR_PIXELS } from "../data/gameData";

export const XiuXiuAvatar = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering:"pixelated", shapeRendering:"crispEdges", flexShrink:0 }}>
    <rect width="16" height="16" fill="#1a0a2e" rx="2"/>
    {AVATAR_PIXELS.xiuxiu.map(([x,y,c],i) =>
      <rect key={i} x={x} y={y} width={1} height={1} fill={c}/>)}
  </svg>
);

export const PoPoAvatar = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering:"pixelated", shapeRendering:"crispEdges", flexShrink:0 }}>
    <rect width="16" height="16" fill="#0d2a1a" rx="2"/>
    {AVATAR_PIXELS.popo.map(([x,y,c],i) =>
      <rect key={i} x={x} y={y} width={1} height={1} fill={c}/>)}
  </svg>
);

export const RatSprite = ({ size=32, captain=false, boss=false }) => {
  const c  = boss?"#8855aa":captain?"#aa6633":"#888888";
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
  return (
    <svg width={size} height={size} viewBox="0 0 12 10"
      style={{ imageRendering:"pixelated", shapeRendering:"crispEdges", flexShrink:0 }}>
      <rect width="12" height="10" fill="transparent"/>
      {px.map(([x,y,col],i) => <rect key={i} x={x} y={y} width={1} height={1} fill={col}/>)}
    </svg>
  );
};

export function UnitAvatar({ unit, size=34 }) {
  if (unit.avatar === "xiuxiu") return <XiuXiuAvatar size={size}/>;
  if (unit.avatar === "popo")   return <PoPoAvatar size={size}/>;
  return <RatSprite size={size} captain={unit.captain} boss={unit.boss}/>;
}
