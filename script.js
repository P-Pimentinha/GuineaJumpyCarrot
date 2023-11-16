/** @type {HTMLCanvasElement} */
import Player from './class/Player.js';
import InputHandler from './class/InputHandler.js';

import { drawStatusText } from './utils/utils.js';
import PlatformEngine from './PlatformEngine.js';
import TokenEngine from './tokens/TokenEngine.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 1000;
  const platformEngine = new PlatformEngine(canvas.height);
  const token = new TokenEngine();
  const player = new Player(
    canvas.width,
    canvas.height,
    ctx,
    platformEngine.platforms,
    token.tokens
  );
  const input = new InputHandler();

  let lastTime = 0;

  function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //deltaTIme
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    // drawStatusText(ctx, player);

    platformEngine.draw(ctx, deltaTime);
    token.draw(ctx);
    player.update(input.keys, deltaTime, platformEngine.platforms);
    // ctx.font = '30px Helvetica';
    // ctx.fillText('colision Right: ' + player.velocity.y, 40, 100);
    // ctx.font = '30px Helvetica';
    // ctx.fillText('Grounded: ' + player.grounded, 40, 150);

    requestAnimationFrame(animate);
  }

  // animate(0);
});
