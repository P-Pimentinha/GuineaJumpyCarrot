class FloatingPlatform {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;
    this.delete = false;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(ctx) {
    this.draw(ctx);
    this.position.y += 1;
    if (this.position.y > 1000 + this.height) this.delete = true;
  }
}

export default FloatingPlatform;
