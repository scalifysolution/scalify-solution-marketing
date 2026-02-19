const COOLDOWN_MS = 30 * 60 * 1000; // 30 minutes

function storageKey(key: string) {
  return `leadCooldown:${key}`;
}

export function getLeadCooldownRemainingMs(key: string): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(storageKey(key));
  if (!raw) return 0;
  const last = Number(raw);
  if (!Number.isFinite(last)) return 0;
  const remaining = last + COOLDOWN_MS - Date.now();
  return remaining > 0 ? remaining : 0;
}

export function isLeadAllowed(key: string): boolean {
  return getLeadCooldownRemainingMs(key) === 0;
}

export function markLeadSubmitted(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(key), String(Date.now()));
}

export function formatCooldown(remainingMs: number) {
  const totalSec = Math.ceil(remainingMs / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  if (min <= 0) return `${sec}s`;
  if (sec === 0) return `${min}m`;
  return `${min}m ${sec}s`;
}

