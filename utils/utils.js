export function drawStatusText(context, input, player) {
  context.font = '30px Helvetica';
  context.fillText('Last Input: ' + input.lastKey, 10, 60);

  context.fillText('Active State: ' + player.currentState.state, 10, 110);

  context.fillText('this.vy: ' + player.vy, 10, 160);

  context.fillText('gameHeight: ' + player.gameHeight, 10, 200);

  context.fillText('height: ' + player.height, 10, 260);
}
