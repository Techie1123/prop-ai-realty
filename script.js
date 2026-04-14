// This function runs when the user clicks 'Send'
async function sendMessage() {
  const input = document.querySelector('input'); 
  const message = input.value;
  if (!message) return;

  try {
    // This calls your Netlify 'Bridge'
    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      body: JSON.stringify({ message: message })
    });
    
    const data = await response.json();
    
    // This is a basic way to show the reply - you can customize this later!
    alert("Alex says: " + data.reply);
    input.value = ""; // Clear the box
  } catch (error) {
    console.error("Connection failed", error);
    alert("Still having a connection issue. Check Netlify logs!");
  }
}

// Attach this to your button
document.querySelector('button').addEventListener('click', sendMessage);
