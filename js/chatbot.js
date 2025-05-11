// chatbot.js
function initializeChatbot() {
  const launcher = document.getElementById('chatbot-launcher');
  const box = document.getElementById('chatbot-box');
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatMessages = document.getElementById('chat-messages');
  const suggestBtns = document.querySelectorAll('.suggest-btn');

  if (!launcher || !box || !sendBtn || !userInput || !chatMessages) {
    console.error('Chatbot: Required elements not found');
    return;
  }

  // ✅ Force hidden state on load
  box.classList.add('hidden');

  // ✅ Toggle on launcher click
  launcher.addEventListener('click', () => {
    box.classList.toggle('hidden');
  });

  // ✅ Message sending
  const sendMessage = () => {
    const msg = userInput.value.trim();
    if (!msg) return;
    chatMessages.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
    userInput.value = '';
    setTimeout(() => {
      chatMessages.innerHTML += `<div><strong>Bot:</strong> Let me help you with "${msg}".</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
  };

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  suggestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      userInput.value = btn.textContent;
      sendMessage();
    });
  });
}


  // ✅ Handle suggested buttons
  suggestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      userInput.value = btn.textContent;
      sendMessage();
    });
  });

  // ✅ Append message to chat
  function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // ✅ Bot reply simulation
  function botResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    let response = "Sorry, I didn't understand. Try asking about attractions, food, or events in Pekan.";

    if (msg.includes('attraction')) {
      response = 'Top attractions: Royal Museum, Sungai Pahang River Cruise, Craft Village.';
    } else if (msg.includes('food')) {
      response = 'You should try Pekan’s seafood, kuih-muih, and riverside stalls.';
    } else if (msg.includes('event')) {
      response = 'This month: Cultural parades, handicraft shows, and more!';
    }

    setTimeout(() => appendMessage('Bot', response), 600);
  }

