import EventEmitter from 'events';
// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a listener for a specific event
eventEmitter.on('myEvent', () => {
  console.log('Loadeding...');
});


// Trigger the event
setTimeout(() => {
  eventEmitter.emit('myEvent');
  console.log('Event triggered');
}, 2000)

