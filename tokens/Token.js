class Token {
  constructor(x, y) {
    this.position = { x: x, y: y };

    this.width = 50;
    this.height = 50;

    this.delete = false;

    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = 'Orange';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(ctx) {
    this.draw(ctx);
  }
}

export default Token;
