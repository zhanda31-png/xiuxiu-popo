import { WORLD_MAP } from "../data/gameData";

const NODE_COLORS = {
  village: { bg:"#2a5a1a", border:"#66aa44", icon:"🏠" },
  battle:  { bg:"#5a1a1a", border:"#aa4444", icon:"⚔️" },
  shop:    { bg:"#1a3a5a", border:"#4488aa", icon:"🛒" },
  rest:    { bg:"#3a2a1a", border:"#aa8844", icon:"🔥" },
  forge:   { bg:"#2a2a2a", border:"#888888", icon:"⚒️" },
  secret:  { bg:"#2a1a4a", border:"#8866cc", icon:"🔮" },
  ending:  { bg:"#4a4a10", border:"#eecc22", icon:"🌟" },
};

const CELL = 72;
const PAD  = 16;

export default function WorldMap({ unlockedNodes, completedNodes, currentNode, onNodeClick, isMobile }) {
  const { cols, rows, nodes, edges } = WORLD_MAP;
  const W = cols * CELL + PAD * 2;
  const H = rows * CELL + PAD * 2;

  function nodePos(nodeId) {
    const n = nodes.find(x => x.id === nodeId);
    return n ? { cx: PAD + n.x * CELL + CELL/2, cy: PAD + n.y * CELL + CELL/2 } : null;
  }

  return (
    <div style={{
      overflowX:"auto", overflowY:"auto",
      maxWidth:"100vw", maxHeight: isMobile ? "60vh" : "70vh",
      WebkitOverflowScrolling:"touch",
    }}>
      <svg width={W} height={H} style={{ display:"block", fontFamily:"monospace" }}>
        {/* 背景 */}
        <rect width={W} height={H} fill="#0a1208"/>
        {/* 格子线 */}
        {Array.from({length:rows+1},(_,i)=>
          <line key={"h"+i} x1={PAD} y1={PAD+i*CELL} x2={PAD+cols*CELL} y2={PAD+i*CELL} stroke="#1a2a1a" strokeWidth={0.5}/>
        )}
        {Array.from({length:cols+1},(_,i)=>
          <line key={"v"+i} x1={PAD+i*CELL} y1={PAD} x2={PAD+i*CELL} y2={PAD+rows*CELL} stroke="#1a2a1a" strokeWidth={0.5}/>
        )}

        {/* 边（路径）*/}
        {edges.map(([a,b],i) => {
          const pa = nodePos(a), pb = nodePos(b);
          if (!pa || !pb) return null;
          const aUnlocked = unlockedNodes.includes(a) || completedNodes.includes(a);
          const bUnlocked = unlockedNodes.includes(b) || completedNodes.includes(b);
          const active    = aUnlocked && bUnlocked;
          return (
            <line key={i}
              x1={pa.cx} y1={pa.cy} x2={pb.cx} y2={pb.cy}
              stroke={active ? "#4a8a3a" : "#1e2e1e"}
              strokeWidth={active ? 2 : 1}
              strokeDasharray={active ? "none" : "4,4"}
            />
          );
        })}

        {/* 节点 */}
        {nodes.map(node => {
          const { cx, cy } = nodePos(node.id);
          const unlocked   = unlockedNodes.includes(node.id) || node.unlocked;
          const completed  = completedNodes.includes(node.id);
          const isCurrent  = currentNode === node.id;
          const style      = NODE_COLORS[node.type] || NODE_COLORS.battle;
          const R          = isMobile ? 22 : 26;

          let fillColor = unlocked ? style.bg   : "#0d0d0d";
          let stroke    = unlocked ? style.border: "#2a2a2a";
          let opacity   = unlocked ? 1 : 0.4;
          if (completed) { fillColor = "#1a3a0a"; stroke = "#44aa22"; }
          if (isCurrent) { stroke = "#ffe066"; }

          return (
            <g key={node.id}
              onClick={() => unlocked && onNodeClick(node)}
              style={{ cursor: unlocked ? "pointer" : "not-allowed" }}
            >
              {/* 脉冲光圈（当前节点）*/}
              {isCurrent && (
                <circle cx={cx} cy={cy} r={R+6} fill="none"
                  stroke="#ffe066" strokeWidth={1.5} opacity={0.5}
                  style={{ animation:"pulse 1.5s infinite" }}
                />
              )}
              <circle cx={cx} cy={cy} r={R}
                fill={fillColor} stroke={stroke} strokeWidth={isCurrent?2.5:1.5}
                opacity={opacity}
              />
              {/* 图标 */}
              <text x={cx} y={cy+1} textAnchor="middle" dominantBaseline="middle"
                fontSize={isMobile?14:16} opacity={opacity}>
                {completed ? "✅" : node.icon}
              </text>
              {/* 名称 */}
              <text x={cx} y={cy+R+12} textAnchor="middle"
                fill={unlocked?"#b0d090":"#444"} fontSize={9} opacity={opacity}>
                {node.name}
              </text>
              {/* 章节标记 */}
              {node.type === "battle" && unlocked && !completed && (
                <circle cx={cx+R-4} cy={cy-R+4} r={6} fill="#aa2222"/>
              )}
            </g>
          );
        })}
      </svg>
      <style>{`@keyframes pulse{0%,100%{r:32;opacity:0.5}50%{r:38;opacity:0.2}}`}</style>
    </div>
  );
}
