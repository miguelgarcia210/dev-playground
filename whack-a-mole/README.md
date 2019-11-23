# Whack-A-Mole Game

>http://en.wikipedia.org/wiki/Whac-A-Mole is a popular game created in the 1970s. The game randomly has plastic (or wooden) moles pop out of holes, and the object of the game is to hit the moles and have them go back in their hole.

BUILDING WHACK-A-MOLE

We will be building an online version of the Whack-A-Mole game using HTML, CSS, and jQuery.

Video Source: https://www.youtube.com/watch?v=IlQs7uzULs0

To build this game, follow these steps:
1. Setup a new project locally and link it to your github.
2. Create your HTML markup and CSS to position your holes. These will be element that your mole will pop in and out of.
3. Randomly select a hole on page load and change its background color to red. You may want to nest another element, and use an animated method like .fadeIn().
4. Change the red background to use an image. This could be a mole, or any other image you'd like to use.
5. Update the code to remove the mole when it is clicked.
6. Add score. Each time the mole is successfully clicked, increase the displayed score by 1.

BONUS
- Add a start button. Don't start the game until the button is pressed.
- Add a timer. Only allow clicks during the period. If the timer is 30 seconds, the game should quit recording clicks after 30 seconds, and should activate the start button. Clicking the start button should reset the game.
- Keep the high score for the round. This does not need to persist between page loads, although it could if you wanted it to.
- Make the moles appear more often after each click.

Source: https://java.codeup.com/jquery/whack-a-mole/create-game/