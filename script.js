function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
}

// Simple music player (optional)
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to The Cozy Sip Shop! Enjoy the vibe.");
    
    // Optional: Add background music
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    // Uncomment the line below to play music automatically
    // audio.play();
});