import { useState, useEffect } from "react";
import { XiuXiuAvatar, PoPoAvatar } from "./Avatars";

const BG_COLORS = {
  village:   "linear-gradient(135deg,#1a3a10,#2d5a1b)",
  fortress:  "linear-gradient(135deg,#1a0a0a,#3a1010)",
  ruin:      "linear-gradient(135deg,#1a1a3a,#2a2a5a)",
  campfire:  "linear-gradient(135deg,#2a1a08,#4a2a0a)",
  battle:    "linear-gradient(135deg,#1a0808,#3a1a0a)",
  peace:     "linear-gradient(135deg,#0a2a3a,#1a4a6a)",
  void:      "linear-gradient(135deg,#050010,#1a0030)",
  default:   "linear-gradient(135deg,#0d1a0d,#162a16)",
};

const MOOD_COLORS = {
  normal:     "#d4e8b0",
  urgent:     "#ff8844",
  angry:      "#ff4444",
  sleepy:     "#aaaacc",
  smile:      "#ffe066",
  serious:    "#ccddff",
  worried:    "#ffcc44",
  confident:  "#44ffaa",
  gentle:     "#ffaacc",
  nervous:    "#ff9966",
  tease:      "#ffcc88",
  sad:        "#aaccff",
  moved:      "#ff88bb",
  happy:      "#ffee44",
  flustered:  "#ff88aa",
  curious:    "#88ddff",
  reading:    "#aaddff",
  determined: "#ff6644",
  relieved:   "#88ffaa",
  peaceful:   "#aaddcc",
  honest:     "#ccbbff",
  tired:      "#888899",
  sigh:       "#bbbbbb",
  awkward:    "#ddccaa",
  system:     "#88eeee",
};

export default function DialogBox({ story, onFinish }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const scenes = story.scenes;
  const scene  = scenes[idx];

  useEffect(() => {
    setDisplayed("");
    setTyping(true);
    let i = 0;
    const text = scene.text;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(timer); setTyping(false); }
    }, 28);
    return () => clearInterval(timer);
  }, [idx, scene.text]);

  function advance() {
    if (typing) {
      setDisplayed(scene.text);
      setTyping(false);
      return;
    }
    if (idx < scenes.length - 1) {
      setIdx(i => i + 1);
    } else {
      onFinish?.();
    }
  }

  function handleSkipAll() {
    if (idx < scenes.length - 1) {
      setIdx(scenes.length - 1);
      setDisplayed(scenes[scenes.length - 1].text);
      setTyping(false);
    } else {
      onFinish?.();
    }
  }

  const bgKey = scene.bg || "default";
  const bg = BG_COLORS[bgKey] || BG_COLORS.default;
  const textColor = MOOD_COLORS[scene.mood] || MOOD_COLORS.normal;
  const isNarrator = scene.speaker === "旁白" || scene.speaker === "系统";

  return (
    <div
      onClick={advance}
      onTouchEnd={e => { e.preventDefault(); advance(); }}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === " " || e.key === "Enter") advance(); }}
      style={{
        position:"fixed", inset:0, zIndex:1000,
        background: bg,
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"flex-end",
        cursor:"pointer", userSelect:"none",
        touchAction:"manipulation",
      }}
    >
      {/* 章节标题 + 跳过按钮 */}
      <div style={{
        position:"absolute", top:0, left:0, right:0,
        display:"flex", justifyContent:"space-between", alignItems:"center",
        padding:"12px 16px", zIndex:10,
      }}>
        <div style={{ flex:1, textAlign:"center", fontFamily:"monospace", color:"#ffe066aa", fontSize:12, letterSpacing:3 }}>
          ◆ {story.title} ◆
        </div>
        <button onClick={e => { e.stopPropagation(); handleSkipAll(); }}
          onTouchEnd={e => { e.stopPropagation(); e.preventDefault(); handleSkipAll(); }}
          style={{
            background:"#1a2a1a88", border:"1px solid #3a5a2a66",
            color:"#88aa66", borderRadius:4, padding:"4px 10px",
            fontSize:10, cursor:"pointer", fontFamily:"monospace",
            flexShrink:0,
          }}>跳过 ▶▶</button>
      </div>

      {/* 进度点 */}
      <div style={{
        position:"absolute", bottom:170, display:"flex", gap:6,
      }}>
        {scenes.map((_,i) => (
          <div key={i} style={{
            width:6, height:6, borderRadius:"50%",
            background: i === idx ? "#ffe066" : i < idx ? "#88aa66" : "#333",
            transition:"background 0.3s",
          }}/>
        ))}
      </div>

      {/* 角色头像区 */}
      {!isNarrator && (
        <div style={{
          position:"absolute",
          bottom:160,
          left: scene.avatar === "xiuxiu" ? "15%" : "auto",
          right: scene.avatar === "popo"  ? "15%" : "auto",
          opacity:0.95,
        }}>
          {scene.avatar === "xiuxiu" && <XiuXiuAvatar size={80}/>}
          {scene.avatar === "popo"   && <PoPoAvatar size={80}/>}
        </div>
      )}

      {/* 对话框 */}
      <div style={{
        width:"100%", maxWidth:600,
        background:"#0a1208ee",
        borderTop:"2px solid #3a6a2a",
        padding:"16px 20px 20px",
        fontFamily:"monospace",
        boxSizing:"border-box",
      }}>
        <div style={{
          fontSize:12, color:"#88cc66", marginBottom:6,
          letterSpacing:1,
        }}>
          {isNarrator ? `— ${scene.speaker} —` : `【${scene.speaker}】`}
        </div>
        <div style={{
          fontSize:15, color:textColor,
          lineHeight:1.8, minHeight:48,
          whiteSpace:"pre-wrap",
        }}>
          {displayed}
          {typing && <span style={{animation:"blink 0.8s infinite"}}>▌</span>}
        </div>
        <div style={{
          marginTop:10, textAlign:"right",
          fontSize:11, color:"#55884488",
        }}>
          {typing ? "..." : idx < scenes.length-1 ? "点击继续 ▶" : "点击结束 ◆"}
        </div>
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}
