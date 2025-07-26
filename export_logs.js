// 📁 Export Session Log
function exportSessionLog() {
  const blob = new Blob([JSON.stringify(sessionHistory, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "glam_session_log.json";
  link.click();
  URL.revokeObjectURL(url);
}