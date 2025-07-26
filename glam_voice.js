// 🎤 Voice Recognition Input
function initVoiceInput() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("glamInput").value = transcript;
    sendCommand();
  };

  recognition.onerror = function(event) {
    alert("Voice recognition error: " + event.error);
  };

  recognition.start();
}

// 🧘 Affirmation Loop (5 min)
let affirmationTimer = null;
function startAffirmationLoop() {
  if (affirmationTimer) return;
  affirmationTimer = setInterval(() => {
    const affirm = "You are divine, polished, and powerful. Your glow funds empires.";
    speak(affirm);
  }, 300000); // every 5 minutes
}

function stopAffirmationLoop() {
  clearInterval(affirmationTimer);
  affirmationTimer = null;
}