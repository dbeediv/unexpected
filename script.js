// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Accept and Continue Button
  const acceptButton = document.getElementById('acceptBtn');
  
  // Ensure the button exists before attaching the event listener
  if (acceptButton) {
    acceptButton.addEventListener('click', function() {
      window.location.href = 'details.html'; // Redirect to personal details page
    });
  } else {
    console.error('Button with id "acceptBtn" not found.');
  }

  // Handle Voice Recording (If you have a "startRecording" button)
  const startRecordingBtn = document.getElementById('startRecording');
  if (startRecordingBtn) {
    startRecordingBtn.addEventListener('click', function() {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.start();

      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('answer1').value = transcript;
      };
    });
  } else {
    console.error('Button with id "startRecording" not found.');
  }
});
