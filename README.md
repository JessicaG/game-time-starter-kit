# Playing Tetris Game 

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```

Visit live page:
COMING SOON

# Project Goals:
- Piece is able to fall on screen
- Piece be manipulated by arrow keys
- Piece can be stacked with other pieces
- Piece can fit with other pieces as instructed
- Row is elimanated when pieces form a consistent line across board
- Game ends when piece is at the top of the board
- User is able to start a new game
- User is able to pause a game
- User is able to save high score

# MVP:
- Piece is able to fall on screen
- Piece be manipulated by arrow keys
- Piece can be stacked with other pieces
- Piece can fit with other pieces as instructed
- Row is elimanated when pieces form a consistent line across board
- Game ends when piece is at the top of the board

# Thursday Work

- Test & Build Board Class
  Should include columns, rows, coordinates, relationship to blocks and hitting bottom

- Test & Build Block Class
  Should incldue coordinates and pieces

- Test & Build Piece Class
  Should include board coordinates 

- Test & Build Keyboard Class
  Should include actions for Left, Right, Up, Down Space and Enter. Needs to interact with block class to then pass information to board with active or no.

# Weekend  

- Randomly generate different block pieces 
- Pieces react to keyboard input
- Pieces stack onto one another
- Deploy to live server

# Tuesday 
- End game when piece is at top of screen
- Add ability to start a new game/new board 
- Plop sound when piece is placed

# Wednesday
- Ability to save high score
- Ability to pause game 

