// 💬 Text-to-Speech
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.pitch = 1.2;
  utterance.rate = 1;
  utterance.voice = speechSynthesis.getVoices().find(v => v.name.includes("Samantha") || v.name.includes("Female"));
  speechSynthesis.speak(utterance);
}

// 🧾 Session History Logger
let sessionHistory = [];

function logSession(input, response, mode) {
  const entry = {
    timestamp: new Date().toISOString(),
    input,
    response,
    mode
  };
  sessionHistory.push(entry);
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  const logBox = document.getElementById("history");
  logBox.innerHTML = sessionHistory.map(e =>
    `<div><strong>${e.input}</strong><br><em>${e.response}</em><br><small>${e.timestamp}</small></div><hr>`
  ).join('');
}

// ✨ Hidden Glam Spell Triggers
function checkGlamSpells(input) {
  const spells = {
    "revoke my soft girl era": "Dark Mode activated. Your power is now unapologetic.",
    "summon velvet dominion": "Welcome to Velvet Dominion — everything you touch turns to indulgence.",
    "mirror fracture": "You are no longer bound by reflection. GlamIntelle sees your truth."
  };
  return spells[input.toLowerCase()] || null;
}

// 👑 Combined Glam Handler
async function sendCommand() {
  const input = document.getElementById("glamInput").value;
  const resBox = document.getElementById("response");
  const spell = checkGlamSpells(input);

  if (spell) {
    resBox.innerText = `✨ Spell Triggered: ${spell}`;
    speak(spell);
    logSession(input, spell, "Arcane");
    return;
  }

  resBox.innerText = "Waiting for GlamIntelle...";
  const response = await fetch("/api/glam/command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input })
  });
  const data = await response.json();
  const reply = `💬 ${data.response}\n\n💠 Mode: ${data.mode}`;
  resBox.innerText = reply;
  speak(data.response);
  logSession(input, data.response, data.mode);
}