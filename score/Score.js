class Score {
  constructor() {
    this.score = 10;
    this.minimum = 0;
  }

  addScore(toAdd = 1) {
    this.score += toAdd;
  }

  subScore(toSub = 1) {
    this.score = this.score === this.minimum ? this.score : this.score - toSub;
  }

  showScore() {
    return this.score;
  }
}

export default Score;
