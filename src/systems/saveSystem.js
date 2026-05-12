// ============================================================
// 存档系统 — 3个存档槽，localStorage 持久化
// ============================================================

const SAVE_PREFIX = "xiuxiu_popo_save_";
const SLOT_COUNT = 3;

export function getSaveSlots() {
  const slots = [];
  for (let i = 0; i < SLOT_COUNT; i++) {
    const raw = localStorage.getItem(SAVE_PREFIX + i);
    if (raw) {
      try {
        slots.push({ index: i, ...JSON.parse(raw) });
      } catch {
        slots.push({ index: i, empty: true });
      }
    } else {
      slots.push({ index: i, empty: true });
    }
  }
  return slots;
}

export function saveGame(slotIndex, gameState) {
  const data = {
    ...gameState,
    savedAt: new Date().toLocaleString("zh-CN"),
    version: 2,
  };
  localStorage.setItem(SAVE_PREFIX + slotIndex, JSON.stringify(data));
}

export function loadGame(slotIndex) {
  const raw = localStorage.getItem(SAVE_PREFIX + slotIndex);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function deleteSave(slotIndex) {
  localStorage.removeItem(SAVE_PREFIX + slotIndex);
}

export function autoSave(gameState) {
  saveGame("auto", gameState);
}

export function loadAutoSave() {
  const raw = localStorage.getItem(SAVE_PREFIX + "auto");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
