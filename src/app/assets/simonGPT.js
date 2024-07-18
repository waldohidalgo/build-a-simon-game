class SimonGame {
  constructor() {
    this.sequence = [];
    this.currentStep = 0;
    this.isHumanTurn = false;
  }

  addStep() {
    const newStep = Math.floor(Math.random() * 4); // Suponiendo que hay 4 colores diferentes
    this.sequence.push(newStep);
  }

  resetGame() {
    this.sequence = [];
    this.currentStep = 0;
    this.isHumanTurn = false;
  }

  startHumanTurn() {
    this.isHumanTurn = true;
    this.currentStep = 0;
  }

  playSequence(playSound, callback) {
    this.isHumanTurn = false;
    this.sequence.forEach((number, index) => {
      setTimeout(() => {
        playSound(number);
        if (index === this.sequence.length - 1) {
          callback();
        }
      }, 1000 * index);
    });
  }

  checkStep(step) {
    if (this.sequence[this.currentStep] === step) {
      this.currentStep += 1;
      if (this.currentStep === this.sequence.length) {
        return "correct-sequence";
      }
      return "correct-step";
    } else {
      return "incorrect-step";
    }
  }
}
