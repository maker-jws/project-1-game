[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Boilerplate Reference

This repository provides an example setup for building a basic Tic-Tac-Toe game. You are not required to follow this pattern, but if you are not sure where to start, or how to organize your code, you are free to use this as a reference. 

Need a bit more help? Check out the deliverables [__'general considerations'__](https://git.generalassemb.ly/seir-1213/HW_tic_tac_toe/blob/main/general_considerations.md) documentation:

## Setting goals:
Let's review the requirements from the [deliverable repo](https://git.generalassemb.ly/seir-1213/HW_tic_tac_toe) and break them out into Bronze, Silver, Gold.

## Building an MVP in stages: 

### BRONZE 
- A user should be able to click on different squares to make a move.
- Every click will alternate between marking an X and O
- Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
- A cell should not be able to be replayed once marked.

### SILVER 
- You should not be able to click remaining empty cells after the game is over.
- Add a reset button that will clear the contents of the board.
- Display a message to indicate which turn is about to be played.
- Detect draw conditions (ties/cat's game)

### GOLD 
- Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

### PLATINUM

- Add [CSS Animations](https://www.w3schools.com/css/css3_animations.asp) (transition/transformations/animations)
- Experiment with [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) and [responsive units](https://www.w3schools.com/css/css_units.asp)  (em,rem, % vw, vh) for making your game mobile friendly.