/** @type {HTMLCanvasElement} */
import Player from './class/Player.js';
import InputHandler from './class/InputHandler.js';
import Platform from './class/Platform.js';
import { drawStatusText } from './utils/utils.js';
import PlatformEngine from './PlatformEngine.js';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 2000;
  canvas.height = 500;
  const platformEngine = new PlatformEngine();
  const platform = new Platform(ctx);
  const player = new Player(
    canvas.width,
    canvas.height,
    ctx,
    platformEngine.platforms
  );
  const input = new InputHandler();

  let lastTime = 0;

  function animate(timeStamp) {
    //deltaTIme
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStatusText(ctx, player);
    platformEngine.draw(ctx);
    player.update(input.keys, deltaTime, platformEngine.platforms);
    ctx.font = '30px Helvetica';
    ctx.fillText('colision Right: ' + player.colisionRight, 40, 100);
    ctx.font = '30px Helvetica';
    ctx.fillText('Velocity: ' + player.velocity.y, 40, 150);

    // platform.update();

    // requestAnimationFrame(animate);
  }

  animate(0);
});
