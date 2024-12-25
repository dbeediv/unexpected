// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'user' && password === 'password123') {
    window.location.href = 'instructions.html'; // Redirect to instructions page
  } else {
    document.getElementById('errorMessage').textContent = 'Invalid credentials, please try again.';
  }
});

// Accept and Continue Button
document.getElementById('acceptBtn').addEventListener('click', function() {
  window.location.href = 'details.html'; // Redirect to personal details page
});

// Handle Voice Recording
document.getElementById('startRecording').addEventListener('click', function() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('answer1').value = transcript;
  };
});
