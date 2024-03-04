# Hang-Man-Game
Hangman Game Documentation

## Preview

Link : [click here](https://hang-man-game-subhendu.netlify.app/)

Hangman is a word-guessing game where player thinks of a word and tries to guess it by suggesting letters. For each incorrect guess, a part of a hangman is drawn. The goal is to guess the word before the hangman is fully drawn.


HTML Structure:

    Container Structure:
        .container: Flex container for the main game components.
            .hangman-box: Container for hangman image and game title.
                .hang-man: Image displaying the hangman.
                h1: Title for the Hangman game.
            .game-box: Container for the game elements.
                .word-display: List to display the letters of the word to guess.
                .hint-text: Hint text for the word to guess.
                    .hint-text-area: Container for the actual hint text.
                .guess-text: Text displaying incorrect guesses.
                    .guesses: Container for the number of incorrect guesses.
                .keyboard: Container for the letter buttons.

    Game Over Modal:
        .game-over: Modal that appears when the game is over.
            .content: Content container within the modal.
                .imageWin: Image displaying a victory or loss.
                h4.result: Heading indicating game result (Game Over or Congrats!).
                p.model-text: Text displaying the correct word.
                    b: Bold text for the correct word.
                button.play-again: Button to play the game again.



CSS Styling:

    Global Styles:
        Basic styles for the body, setting background color and font styles.

    Container Styles:
        .container: Styling for the main game container.
        .hangman-box: Styling for the hangman box.
            .hang-man: Styling for the hangman image.
            h1: Styling for the game title.
        .game-box: Styling for the game box.
            .word-display: Styling for displaying the word to guess.
            .hint-text: Styling for the hint text.
                .hint-text-area: Styling for the hint text area.
            .guess-text: Styling for displaying incorrect guesses.
                .guesses: Styling for the incorrect guesses count.
            .keyboard: Styling for the letter buttons.

    Hangman Image and Letter Styles:
        Styling for the hangman image and letter boxes within .word-display.
        Different styles for guessed and yet-to-be-guessed letters.

    Game Over Modal Styles:
        Styling for the game over modal and its content.
            .imageWin: Styling for the result image.
            h4, p: Styling for headings and paragraphs.
            button: Styling for the play-again button.

    Media Queries:
        Responsive styles for smaller screens (max-width: 780px).
        


JavaScript Functionality:

    Constants and Variables:
        Variables declared for various game elements and information.
        Keyboard buttons dynamically created and event listeners added.

    Functions:
        showHint: Displays the hint text.
        showWordArea: Displays the initial word with dashes.
        resetGame: Resets the game variables and UI elements.
        getRandomWord: Selects a random word from the word list.
        gameOver: Displays the game over modal with appropriate information.
        initializeGame: Handles the game logic when a letter is clicked.

    Event Listeners:
        Event listeners for keyboard button clicks and play-again button click.

    Game Initialization:
        The game starts by calling getRandomWord to select a random word.

Word List:

    External Word List:
        The game relies on an external JavaScript file (word-list.js) for an array of words and hints.

        

Conclusion:

The Hangman game is structured with HTML, styled with CSS, and features interactive gameplay using JavaScript. It includes a responsive design and a modal for game over scenarios, providing an engaging user experience. The use of external word lists allows for a variety of words and hints in the game.
