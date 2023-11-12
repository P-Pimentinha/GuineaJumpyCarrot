export function drawStatusText(context, player) {
  context.font = '30px Helvetica';

  context.fillText('Active State: ' + player.currentState.state, 10, 50);
}
