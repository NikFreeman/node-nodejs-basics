import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const copy = async () => {
  // Write your code here 
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const DESTINATION_FOLDER = 'files_copy';
  try {
    try {
    await fs.access(path.join(__DIRNAME,SOURCE_FOLDER));
    await fs.mkdir(path.join(__DIRNAME,DESTINATION_FOLDER));
    let files = await fs.readdir(path.join(__DIRNAME, SOURCE_FOLDER));
      for (let file of files){
        await fs.copyFile(path.join(__DIRNAME,SOURCE_FOLDER,file),path.join(__DIRNAME,DESTINATION_FOLDER,file), fs.COPYFILE_EXCL);
      }      
    }
    catch {      
      throw new Error('FS operation failed');
    }    
  }
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
};

await copy();
