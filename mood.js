// Joseph Green 11/21/25

// Step 1: Select the mood display element from the DOM
// NOTE: ID must match the HTML: id="moodDisplay"
const moodDisplay = document.getElementById('moodDisplay');

// Step 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
const moods = {
    happy: {
        backgroundColor: '#ffd900',
        textColor: '#000000',
        message: 'You are feeling happy! Keep smiling!'
    },
    calm: {
        backgroundColor: '#0000ff',
        textColor: '#ffffff',
        message: 'You are feeling calm. Take a deep breath and relax.'
    },
    excited: {
        backgroundColor: '#ff4500',
        textColor: '#ffffff',
        message: 'You are feeling excited! Enjoy the moment!'
    },
    chill: {
        backgroundColor: '#00ff00',
        textColor: '#000000',
        message: 'You are feeling chill. Take it easy and unwind.'
    },
    mysterious: {
        backgroundColor: '#800080',
        textColor: '#ffffff',
        message: 'You are feeling mysterious. Embrace the unknown!'
    }
};

// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
        // Get the mood from the data-mood attribute
        const mood = event.target.getAttribute('data-mood');

        // Get the configuration for this mood from the moods object
        const config = moods[mood]; 
        if (!config) return;

        // Update the background color of the body
        document.body.style.backgroundColor = config.backgroundColor;

        // Update the text color of the body
        document.body.style.color = config.textColor;

        // Update the display message
        moodDisplay.textContent = config.message;
    }
});
