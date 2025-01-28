// Grab elements
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

// Function to get current time
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Send a message
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const messageText = chatInput.value.trim();
  if (messageText) {
    addMessage("sent", messageText);
    chatInput.value = "";

    // Simulate a reply after 1 second
    setTimeout(() => {
      const replies = ["Hello there!", "How are you?", "I'm learning JavaScript too!", "That's great!"];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      addMessage("received", randomReply);
    }, 2000);
  }
});

// Add a message to the chat
function addMessage(type, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);

  const timestamp = document.createElement("span");
  timestamp.classList.add("timestamp");
  timestamp.innerText = getCurrentTime();

  messageDiv.innerText = text;
  messageDiv.appendChild(timestamp);

  chatMessages.appendChild(messageDiv);

  // Scroll to the latest message
  chatMessages.scrollBy = chatMessages.scrollHeight;
}
