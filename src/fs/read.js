import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const read = async () => {
  // Write your code here
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const FILE_READ = 'fileToRead.txt';
  const SOURCE_FOLDER = 'files';
  
  try {
    try {
      const file = await fs.open(path.join(__DIRNAME, SOURCE_FOLDER, FILE_READ));
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