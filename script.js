/** @type {HTMLCanvasElement} */
import Player from './class/Player.js';
import InputHandler from './class/InputHandler.js';
import Background from './background/Background.js';
import { drawStatusText } from './utils/utils.js';
import PlatformEngine from './PlatformEngine.js';
import TokenEngine from './tokens/TokenEngine.js';
import Score from './score/Score.js';
import StartAnimation from './background/StartAnimation.js';
import GameState from './GameState.js';
import GameOverAnimation from './GameOver.js';
import WinAnimation from './Win.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 1000;
  canvas2.width = 200;
  canvas2.height = 200;
  canvas3.width = 600;
  canvas3.height = 600;
  canvas4.width = 400;
  canvas4.height = 600;
  const winAime = new WinAnimation(ctx4, canvas4.width, canvas4.height);
  const gameOverAnimation = new GameOverAnimation(
    ctx3,
    canvas3.width,
    canvas3.height
  );
  const gameState = new GameState();
  const starAnim = new StartAnimation(ctx2, canvas2.width, canvas2.height);
  const score = new Score();
  const platformEngine = new PlatformEngine(canvas.height);
  const token = new TokenEngine(canvas.height);
  const background = new Background(ctx, 0, 0, 1000, 1000);
  const player = new Player(
    canvas.width,
    canvas.height,
    ctx,
    platformEngine.platforms,
    token.tokens,
    score
  );
  const input = new InputHandler();

  //DeltaTimeVariables
  let lastTime = 0;
  let lastTime2 = 0;
  let lastTimeGameOver = 0;
  let lastTimeWin = 0;

  //introAnimation
  function introAnimation(timeStamp) {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    //deltaTIme
    const deltaTime2 = timeStamp - lastTime2;
    lastTime2 = timeStamp;

    starAnim.draw(deltaTime2);
    if (gameState.firstMenu) requestAnimationFrame(introAnimation);
  }

  introAnimation(0);

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //deltaTIme
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    background.draw(deltaTime);

    // drawStatusText(ctx, player);
    token.draw(ctx, deltaTime);
    platformEngine.draw(ctx, deltaTime);

    player.update(input.keys, deltaTime, platformEngine.platforms);
    ctx.font = '30px Helvetica';
    ctx.fillText('Score: ' + score.showScore(), 40, 100);
    // ctx.font = '30px Helvetica';
    // ctx.fillText('Grounded: ' + player.velocity.y, 40, 150);
    if (player.position.y > 1100) gameOver(0);
    if (score.showScore() >= 8) win(0);

    if (!gameState.pause) requestAnimationFrame(animate);
  }

  function animateGameOver(timeStamp) {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    //deltaTIme
    const deltaTime3 = timeStamp - lastTimeGameOver;
    lastTimeGameOver = timeStamp;

    gameOverAnimation.draw(deltaTime3);

    requestAnimationFrame(animateGameOver);
  }

  function animateWin(timeStamp) {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    //deltaTIme
    const deltaTime4 = timeStamp - lastTimeWin;
    lastTimeWin = timeStamp;

    winAime.draw(deltaTime4);

    requestAnimationFrame(animateWin);
  }

  //Extras//////////////////////////////
  function gameOver() {
    gameState.gamePause();
    gameArea.remove();
    animateGameOver(0);
    gameOverHTML.removeAttribute('hidden');
  }

  function win() {
    gameState.gamePause();
    gameArea.remove();
    animateWin(0);
    winHTML.removeAttribute('hidden');
  }

  btnStart.addEventListener('click', function (event) {
    gameState.gameFirstMenu();
    menu.remove();
    animate(0);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'P' || event.key === 'p') {
      // Call the animate function (replace with your actual animate function)
      if (gameState.pause) {
        gameState.gamePause();
        animate(0);
      } else {
        gameState.gamePause();
      }
    }
  });
});
