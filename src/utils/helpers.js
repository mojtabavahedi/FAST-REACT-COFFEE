export function formatCurrency(value) {
  return new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "Irr",
  }).format(value);
}
export function formatNumber(value) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",

    minute: "2-digit",
  }).format(new Date(dateStr));
}
export function formatMintes(dateStr) {
  return new Intl.DateTimeFormat("fa-IR", {
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
