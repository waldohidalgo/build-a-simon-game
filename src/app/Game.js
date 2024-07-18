export default class SimonGame {
  constructor() {
    this.level = 1;
    this.sequencePC = [];
    this.stepHuman = 0;
    this.strict = false;
    this.maxLevel = 20;
  }

  startGame() {
    this.level = 0;
    this.sequencePC = [];
    this.stepHuman = 0;
  }

  computerTurn() {
    const random = Math.floor(Math.random() * 4) + 1;
    this.sequencePC.push(random);
    return this.sequencePC;
  }

  humanTurn(stepHuman, number) {
    const indexFinal = this.sequencePC.length - 1;

    if (indexFinal === stepHuman && number === this.sequencePC[stepHuman]) {
      if (this.level < this.maxLevel) {
        this.level += 1;
        this.stepHuman = 0;
        //console.log("level", this.level);
        // ahora comienza turno de PC
        return ["pc", false];
      } else {
        return ["win", false];
      }
    }

    if (stepHuman < indexFinal && number === this.sequencePC[stepHuman]) {
      this.stepHuman = stepHuman + 1;
      // se continua con el turno de humano
      return ["human", false];
    }

    if (number !== this.sequencePC[stepHuman]) {
      if (this.strict) {
        this.stepHuman = 0;
        //se reinicia juego
        return [false, false];
      } else {
        this.stepHuman = 0;
        // comienza la repeticion de pasos
        return ["pc", true];
      }
    }
  }

  getLevel() {
    return this.level;
  }

  // async showNumbersWithDelay(arr, setPosition, startDelay = 0) {
  //   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i === 0) {
  //       await delay(500 + startDelay);
  //     }
  //     setPosition(arr[i]);
  //     await delay(500);
  //     setPosition(0);
  //     await delay(250);
  //   }
  //   return "listo";
  // }
}
