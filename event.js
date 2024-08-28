import EventEmitter from "events";
// Create an instance of EventEmitter

const eventEmitter = new EventEmitter();

// Define a listener for a specific event
eventEmitter.on("myEvent", ({ period, text }) => {
  console.log(`Loading... ${period} ${text}`);
});

// Trigger the event after a delay (simulating a loading process)
setTimeout(() => {
  eventEmitter.emit("myEvent", {
    period: "Second",
    text: "Period Ended",
  });
  console.log("Event triggered");
}, 2000);
