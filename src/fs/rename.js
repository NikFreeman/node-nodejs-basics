import {access, rename as rn} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const rename = async () => {
    // Write your code here 
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const OLD_FILE='wrongFilename.txt';
  const NEW_FILE='properFilename.md';
    
  async function existsFile(path) {
    try {
      await access(path)
      return true;
    }
    catch {
      return false;
    }
  }

  try {
    const existsOldFile =  await existsFile(join(__DIRNAME, SOURCE_FOLDER, OLD_FILE));
    if (!existsOldFile) {
      throw new Error('FS operation failed');
    }
    const existsNewFile = await existsFile(join(__DIRNAME, SOURCE_FOLDER, NEW_FILE)); 
    if (existsNewFile) 
      throw new Error('FS operation failed');
    await rn(join(__DIRNAME,SOURCE_FOLDER,OLD_FILE),join(__DIRNAME, SOURCE_FOLDER, NEW_FILE));
  }    
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }      
};

await rename();