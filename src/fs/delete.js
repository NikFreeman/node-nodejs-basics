import {rm} from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import {join} from 'node:path';


const remove = async () => {
    // Write your code here 
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const DELETE_FILE='fileToRemove.txt';
  
  try {
    try {
      await rm(join(__DIRNAME,SOURCE_FOLDER,DELETE_FILE))
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