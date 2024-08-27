
import { writeFile, readFile } from 'fs/promises';


// console.log(fs.Dir);
// console.log(fs.appendFile);

//import { open } from 'fs/promises';
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


  try {
    // Writing to the file
    await writeFile('hello.txt', 'Ashraf, Web Developer!');
    
    // This will replace the previous text
    await writeFile('hello.txt', 'This text has replaced above text');
    
    console.log('File written successfully');
  
    // Reading from the file
    const data = await readFile('hello.txt');
    console.log(data.toString());
  } catch (err) {
    console.error('Error:', err);
  }
console.log('Test Async');