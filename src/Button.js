class Button {
  constructor(type, instrument, lots = 1) {
    this.type = type;
    this.instrument = instrument;
    this._lots = lots;
  }

  // method to increase lots
  increaseLots(amount) {
    this._lots += amount;
  }

  // method to decrease lots
  decreaseLots(amount) {
    if (this._lots > 1) {
      this._lots-= amount;
    } else {
      console.log('Lots cannot be less than 1');
    }
  }

  getInstrument() {
    return this.instrument;
  }


  get lots() {
    return this._lots;
  }

// method to display button info
  displayInfo() {
    console.log(`This is a ${this.type} button for ${this.instrument} with ${this._lots} lot(s)`);
  }
}
