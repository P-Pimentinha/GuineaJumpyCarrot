class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.position = {
      x: 300,
      y: 380,
    };
    this.width = 100;
    this.height = 20;
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
