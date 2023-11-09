/** @type {HTMLCanvasElement} */
import Player from './class/Player.js';
import InputHandler from './class/InputHandler.js';
import Platform from './class/Platform.js';
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 850;
  canvas.height = 500;

  const player = new Player(canvas.width, canvas.height, ctx);
  const input = new InputHandler();

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update(input.keys, deltaTime);

    requestAnimationFrame(animate);
  }

  animate(0);
});
