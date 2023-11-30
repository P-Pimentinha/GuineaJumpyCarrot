class GameState {
  constructor() {
    this.state;
    this.pause = false;
    this.firstMenu = true;
    this.win = false;
    this.gameOver = false;
  }

  gamePause() {
    this.pause = !this.pause;
  }

  gameFirstMenu() {
    this.firstMenu = !this.firstMenu;
  }
  gameWin() {
    this.win = !this.win;
  }
  gameGameOver() {
    this.gameOver = !this.gameOver;
  }
}

export default GameState;
