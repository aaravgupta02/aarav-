// script.js
document.addEventListener('DOMContentLoaded', function() {
    const questionScreen = document.getElementById('question-screen');
    const celebrationScreen = document.getElementById('celebration-screen');
    const yesButton = document.getElementById('yes-button');
    const thinkButton = document.getElementById('think-button');

    // Array of button texts (cycling through the sequence)
    const buttonTexts = [
        "nah",
        "are you sure",
        "think again !!!",
        "Mr.Agrahari will go crazyyy !!!"
    ];

    let textIndex = 0;
    let clickCount = 0;

    // Function to switch to celebration screen
    function switchToCelebration() {
        questionScreen.classList.remove('active');
        celebrationScreen.classList.add('active');
    }

    // Function to randomize button position without overlapping yes button
    function randomizePosition() {
        const button = thinkButton;
        const yesRect = yesButton.getBoundingClientRect();
        let randomX, randomY, attempts = 0;
        const maxAttempts = 50;

        do {
            randomX = Math.random() * (window.innerWidth - button.offsetWidth);
            randomY = Math.random() * (window.innerHeight - button.offsetHeight);
            attempts++;
        } while (
            attempts < maxAttempts &&
            (randomX < yesRect.right && randomX + button.offsetWidth > yesRect.left &&
             randomY < yesRect.bottom && randomY + button.offsetHeight > yesRect.top)
        );

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }

    // Function to increase yes button size
    function increaseYesSize() {
        clickCount++;
        const scale = 1 + (clickCount * 0.1);
        yesButton.style.transform = `scale(${scale})`;
    }

    // Event listeners
    yesButton.addEventListener('click', switchToCelebration);

    thinkButton.addEventListener('click', function() {
        // Cycle through texts
        textIndex = (textIndex + 1) % buttonTexts.length;
        thinkButton.textContent = buttonTexts[textIndex];

        // Randomize position
        randomizePosition();

        // Increase yes button size
        increaseYesSize();
    });
});