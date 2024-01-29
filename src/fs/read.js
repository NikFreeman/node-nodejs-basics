import {open} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const read = async () => {
  // Write your code here
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const FILE_READ = 'fileToRead.txt';
  const SOURCE_FOLDER = 'files';
  
  try {
    try {
      const file = await open(join(__DIRNAME, SOURCE_FOLDER, FILE_READ));
      for await (const line of file.readLines()) {
        console.log(line);
      }
      await file.close();
    }
    catch {
      throw new Error('FS operation failed'); 
    }
  }
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
};

await read();