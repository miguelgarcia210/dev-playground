(function () {
    "use strict";

    var score = 0;

    function convertSeconds(x) {
        return x * 1000;
    }

    // ==== GAME TIMER ====

    var actualTime = 30;
    var gameTimer = actualTime;

    function updateTimer() {
        if (gameTimer >= 0) {
            // SET TIMER ON HTML
            document.getElementById("timer").innerHTML = "TIMER: " + gameTimer;
            gameTimer--;
        } else if (gameTimer === -1) {
            alert("Score: " + score + " moles were whacked!" + "\n" + "Game Over!");
            // STOP INTERVALS TO REFLECT 'NEW GAME' WHEN PLAY-BUTTON IS CLICKED
            clearInterval(gameTimerUpdate);
            clearInterval(molePopup);
            clearTimeout(removeMole);
            // RESET BUTTONS
            document.getElementById("play-button").disabled = false;
            document.getElementById("pause-button").disabled = true;
        }
    }

    // ==== MOLE DISPLAY ====

    var moleHomes = document.getElementsByClassName("game-tile");

    // Set variables global to allow modifications
    var removeMole;
    var moleLocationCatcher;

    function displayMole() {
        // Generate a number between 0 and 8 representing game-tiles on game-board
        var randomHome = Math.floor(Math.random() * 8) + 1;
        // Select random div A.k.a. moleHome
        var set = moleHomes[randomHome];
        moleLocationCatcher = set;
        // Only run while gameTimer is above 0
        if (gameTimer > 0) {
            set.innerHTML += "<img src=\"img/diglett.png\" alt=\"mole\" id=\"mole\" class=\"moleStyle\">";
        }
        // WHEN MOLE IS CLICKED
        document.getElementById('mole').onclick = function () {
            score += 1;
            document.getElementById("score-card").innerHTML = "Score: " + score;
            moleLocationCatcher.innerHTML = "";
        };

        // Delay mole location change : removes mole from game-tile
        var removeMole = setTimeout(function () {
            set.innerHTML = "";
        }, convertSeconds(1.25));
    }

    // ==== PLAY BUTTON CLICKED ====

    // Set intervals global to allow pause-button to modify
    var gameTimerUpdate;
    var molePopup;
    var playListener = function (playClicked) {
        if (gameTimer === -1) {
            gameTimer = actualTime;
            score = 0;
        }
        // Enable pause button on click
        var pauseWait = setTimeout(function() {
            pause.disabled = false;
        }, convertSeconds(1.25));
        document.getElementById("play-button").disabled = true;
        gameTimerUpdate = setInterval(updateTimer, convertSeconds(1));
        molePopup = setInterval(displayMole, convertSeconds(1.25));
        var pause = document.getElementById("pause-button");
        document.getElementById("score-card").classList.add("score-card")
    };

    // ==== PAUSE BUTTON CLICKED ====

    // DEFAULT: pause-button disabled : explain purpose with demo; uncaught error, also user shouldn't be able to pause a game that hasn't started
    document.getElementById("pause-button").disabled = true;
    var pauseListener = function (pauseClicked) {
        // Enable play button on click
        document.getElementById("play-button").disabled = false;
        // Disable pause button on click
        document.getElementById("pause-button").disabled = true;
        clearInterval(gameTimerUpdate);
        clearInterval(molePopup);
        // Remove mole from game-board when paused.
        moleLocationCatcher.innerHTML = "";
    };

    document.getElementById('play-button').addEventListener('click', playListener, false);
    document.getElementById('pause-button').addEventListener('click', pauseListener, false);
})();