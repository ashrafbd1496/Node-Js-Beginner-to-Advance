
import fs from 'fs';

// console.log(fs.Dir);
// console.log(fs.appendFile);

import { open } from 'fs/promises';
/*
let filehandle;
try {
  filehandle = await open('hello.txt', 'r');
  // You can now use filehandle to read the file
  console.log('File opened successfully');
} catch (err) {
  console.error('Error opening file:', err);
} finally {
  await filehandle?.close();
  console.log('File closed');
}

 fs.readFile('hello.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.toString());
    }
  });
  */
  //const data = fs.readFileSync('hello.txt');


  fs.writeFileSync('hello.txt', 'Ashraf, Web Developer!');
  console.log('File written successfully');
  const data = fs.readFileSync('hello.txt');
  console.log(data.toString());
