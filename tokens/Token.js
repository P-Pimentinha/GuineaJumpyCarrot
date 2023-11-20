class Token {
  constructor(x, y) {
    this.position = { x: x, y: y };

    this.width = 50;
    this.height = 50;
    this.speed = 2;

    this.delete = false;

    // Array of possible image values
    this.possibleImages = [kiwiImage, waterMelonImage, cucumberImage];

    // Select a random image value
    this.image =
      this.possibleImages[
        Math.floor(Math.random() * this.possibleImages.length)
      ];
  }

  draw(ctx) {
    // ctx.fillStyle = 'Orange';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(ctx) {
    this.position.y += this.speed;
    this.draw(ctx);
  }
}

export default Token;
