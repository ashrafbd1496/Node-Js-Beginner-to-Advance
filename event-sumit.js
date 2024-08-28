import School from './school.js';

const school = new School();

school.on('bellRings', ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();
