import {access, mkdir, readdir,copyFile, constants} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const copy = async () => {
  // Write your code here 
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const DESTINATION_FOLDER = 'files_copy';

  try {
    try {
    await access(join(__DIRNAME,SOURCE_FOLDER));
    await mkdir(join(__DIRNAME,DESTINATION_FOLDER));
    let files = await readdir(join(__DIRNAME, SOURCE_FOLDER));
      for (let file of files){
        await copyFile(join(__DIRNAME,SOURCE_FOLDER,file),join(__DIRNAME,DESTINATION_FOLDER,file), constants.COPYFILE_EXCL);
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
