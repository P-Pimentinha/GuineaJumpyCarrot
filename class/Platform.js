class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.position = {
      x: 0,
      y: 450,
    };
    this.width = 850;
    this.height = 50;
  }

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
  }
}

export default Platform;
