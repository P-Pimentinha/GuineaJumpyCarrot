/** @type {HTMLCanvasElement} */
import Player from './class/Player.js';
import InputHandler from './class/InputHandler.js';
import Background from './background/Background.js';
import { drawStatusText } from './utils/utils.js';
import PlatformEngine from './PlatformEngine.js';
import TokenEngine from './tokens/TokenEngine.js';
import Score from './score/Score.js';

const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 1000;
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

  let lastTime = 0;

  //pauseGame
  let isPaused = false;

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //deltaTIme
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    background.draw(deltaTime);

    drawStatusText(ctx, player);
    token.draw(ctx, deltaTime);
    platformEngine.draw(ctx, deltaTime);

    player.update(input.keys, deltaTime, platformEngine.platforms);
    ctx.font = '30px Helvetica';
    ctx.fillText('Score: ' + score.showScore(), 40, 100);
    ctx.font = '30px Helvetica';
    ctx.fillText('Grounded: ' + player.velocity.y, 40, 150);
    if (player.position.y > 1100) gameOver();

    if (!isPaused) requestAnimationFrame(animate);
  }

  function gameOver() {
    window.cancelAnimationFrame(animate);
  }

  btnStart.addEventListener('click', function (event) {
    animate(0);
    btnStart.remove();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'P' || event.key === 'p') {
      console.log('hello');
      // Call the animate function (replace with your actual animate function)
      if (isPaused) {
        isPaused = false;
        animate(0);
      } else {
        isPaused = true;
      }
    }
  });
});
