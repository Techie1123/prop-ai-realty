async function sendMessage() {
  const input = document.querySelector('input[placeholder*="Type"]');
  const message = input.value;
  if (!message) return;

  try {
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    
    // This shows the response in a pop-up so we know it's working!
    alert("Alex says: " + data.reply);
    input.value = ""; 
  } catch (error) {
    alert("Still connecting... wait 1 minute for Netlify to finish!");
  }
}

// This finds the gold button automatically 
document.querySelector('button.bg-gold').onclick = sendMessage;
