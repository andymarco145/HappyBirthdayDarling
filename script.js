function showMessage() {
    var heart = document.getElementById("heart");
    var messageCard = document.getElementById("messageCard");
    var button = document.querySelector(".press-btn");
    var playVideoBtn = document.getElementById("playVideoBtn");
    
    button.style.display = "none"; // Hide the button
    
    heart.style.display = "block";
    setTimeout(function() {
        heart.style.display = "none";
        messageCard.style.transform = "translate(-50%, -50%) scale(1)";
        playVideoBtn.style.display = "block"; // Show the video button
    }, 6000); // Heart animation for 1 second
}

function playVideo() {
    var video = document.getElementById("birthdayVideo");
    var thankYouBtn = document.getElementById("thankYouBtn");
    video.style.display = "block";
    video.play();

    video.onended = function() {
        thankYouBtn.style.display = "block"; // Show the thank you button when the video ends
    };
}

function showThankYou() {
    // Show the thank you image and reload button
    var thankYouImg = document.getElementById("thankYouImg");
    var reloadBtn = document.getElementById("reloadBtn");

    thankYouImg.style.display = "block";
    reloadBtn.style.display = "block";
}

function reloadPage() {
    window.location.reload(); // Reload the page
}
