import EventEmitter from 'events';

class School extends EventEmitter {
  startPeriod() {
    console.log("Class is starting...");
    // Simulate a delay before the bell rings
    setTimeout(() => {
      // Emit the bellRings event with data
      this.emit('bellRings', {
        period: 'first',
        text: 'period ended'
      });
    }, 2000);
  }
}

export default School;
