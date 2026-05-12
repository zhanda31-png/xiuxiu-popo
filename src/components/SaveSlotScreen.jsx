import { useState } from "react";
import { getSaveSlots, loadGame, saveGame, deleteSave } from "../systems/saveSystem";
import { XiuXiuAvatar, PoPoAvatar } from "./Avatars";

export default function SaveSlotScreen({ mode, currentState, onLoad, onBack }) {
  const [slots, setSlots] = useState(() => getSaveSlots());
  const [confirm, setConfirm] = useState(null);

  function refresh() { setSlots(getSaveSlots()); }

  function handleSave(idx) {
    if (slots[idx] && !slots[idx].empty) {
      setConfirm({ action:"save", idx });
    } else {
      saveGame(idx, currentState);
      refresh();
    }
  }

  function handleLoad(idx) {
    const data = loadGame(idx);
    if (data) onLoad(data);
  }

  function handleDelete(idx) {
    setConfirm({ action:"delete", idx });
  }

  function doConfirm() {
    if (!confirm) return;
    if (confirm.action === "save")   { saveGame(confirm.idx, currentState); }
    if (confirm.action === "delete") { deleteSave(confirm.idx); }
    setConfirm(null);
    refresh();
  }

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:800,
      background:"#060e06f0",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center",
      fontFamily:"monospace", color:"#d4e8b0",
      padding:16,
    }}>
      <div style={{ fontSize:17, color:"#ffe066", marginBottom:18 }}>
        {mode === "save" ? "💾 保存游戏" : "📂 读取游戏"}
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:12, width:"100%", maxWidth:420 }}>
        {slots.map(slot => (
          <div key={slot.index} style={{
            background:"#0d1a0d", border:"1px solid #2a4020",
            borderRadius:10, padding:"12px 16px",
            display:"flex", gap:12, alignItems:"center",
          }}>
            {/* 缩略信息 */}
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, color:"#88cc66", marginBottom:4 }}>
                存档 {slot.index + 1}
              </div>
              {slot.empty ? (
                <div style={{ fontSize:11, color:"#444" }}>— 空存档 —</div>
              ) : (
                <>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                    <XiuXiuAvatar size={20}/>
                    <PoPoAvatar size={20}/>
                    <span style={{ fontSize:11, color:"#aaa" }}>
                      {slot.heroes?.[0]?.name} Lv{slot.heroes?.[0]?.lv} ·{" "}
                      {slot.heroes?.[1]?.name} Lv{slot.heroes?.[1]?.lv}
                    </span>
                  </div>
                  <div style={{ fontSize:10, color:"#666" }}>
                    节点：{slot.currentNode || "初始村"} ·{" "}
                    {slot.savedAt}
                  </div>
                </>
              )}
            </div>

            {/* 按钮 */}
            <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
              {mode === "save" && (
                <button onClick={() => handleSave(slot.index)} style={{
                  padding:"4px 12px", background:"#2a5a1a", color:"#c8e8a0",
                  border:"none", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11,
                }}>保存</button>
              )}
              {mode === "load" && !slot.empty && (
                <button onClick={() => handleLoad(slot.index)} style={{
                  padding:"4px 12px", background:"#1a3a5a", color:"#88ccff",
                  border:"none", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11,
                }}>读取</button>
              )}
              {!slot.empty && (
                <button onClick={() => handleDelete(slot.index)} style={{
                  padding:"4px 12px", background:"#3a1010", color:"#ff8888",
                  border:"none", borderRadius:4, cursor:"pointer", fontFamily:"monospace", fontSize:11,
                }}>删除</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button onClick={onBack} style={{
        marginTop:20, padding:"8px 24px",
        background:"#1a2a1a", color:"#88aa66",
        border:"1px solid #3a5a2a", borderRadius:6,
        cursor:"pointer", fontFamily:"monospace", fontSize:12,
      }}>← 返回</button>

      {/* 确认对话框 */}
      {confirm && (
        <div style={{
          position:"fixed", inset:0, background:"#000a",
          display:"flex", alignItems:"center", justifyContent:"center", zIndex:900,
        }}>
          <div style={{
            background:"#0d1a0d", border:"2px solid #3a6a2a",
            borderRadius:10, padding:"20px 28px", textAlign:"center",
            fontFamily:"monospace", color:"#d4e8b0",
          }}>
            <div style={{ marginBottom:12, fontSize:13 }}>
              {confirm.action === "save"   ? `覆盖存档 ${confirm.idx+1}？` : `删除存档 ${confirm.idx+1}？`}
            </div>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button onClick={doConfirm} style={{
                padding:"6px 18px", background:"#3a6a22", color:"#d4e8b0",
                border:"none", borderRadius:5, cursor:"pointer", fontFamily:"monospace",
              }}>确认</button>
              <button onClick={() => setConfirm(null)} style={{
                padding:"6px 18px", background:"#3a1a1a", color:"#ff8888",
                border:"none", borderRadius:5, cursor:"pointer", fontFamily:"monospace",
              }}>取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
