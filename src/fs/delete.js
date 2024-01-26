import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const remove = async () => {
    // Write your code here 
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const DELETE_FILE='fileToRemove.txt';
  
  try {
    try {
      await fs.rm(path.join(__DIRNAME,SOURCE_FOLDER,DELETE_FILE))
    }
    catch{
      throw new Error('FS operation failed');
    }
  }
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }

};

await remove();