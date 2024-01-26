import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const rename = async () => {
    // Write your code here 
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const OLD_FILE='wrongFilename.txt';
  const NEW_FILE='properFilename.md';
  
  
  async function existsFile(path) {
    try {
      await fs.access(path)
      return true;
    }
    catch {
      return false;
    }
  }


  try {
    const existsOldFile =  await existsFile(path.join(__DIRNAME, SOURCE_FOLDER, OLD_FILE));
    if (!existsOldFile) {
      throw new Error('FS operation failed');
    }
    const existsNewFile = await existsFile(path.join(__DIRNAME, SOURCE_FOLDER, NEW_FILE)); 
    if (existsNewFile) 
      throw new Error('FS operation failed');
    fs.rename(path.join(__DIRNAME,SOURCE_FOLDER,OLD_FILE),path.join(__DIRNAME, SOURCE_FOLDER, NEW_FILE));
  }    
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }      
};

await rename();