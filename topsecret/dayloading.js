window.onload = function() {
    const gifImage = document.getElementById("gifImage");
    const afterText = document.getElementById("afterText");
    const thedate = document.getElementById("thedate_html");
    const emoji = document.getElementById("thumbsup_emoji");
    // Set the duration in milliseconds for how long the GIF plays
    const gifDuration = 3030; // e.g., 3 seconds

    // Set a timer to hide the GIF and show the text
    setTimeout(() => {
        gifImage.classList.add("hidden"); // Hide the GIF
        afterText.classList.remove("hidden"); // Show the text
        thedate.classList.remove("hidden"); // Show the text
        emoji.classList.remove("hidden");
    }, gifDuration);
};