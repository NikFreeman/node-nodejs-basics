import {open} from 'node:fs/promises';
import {createGunzip}  from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const decompress = async () => {
  // Write your code here 
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const SOURCE_FILE = 'archive.gz';
  const DESTINATION_FILE ='fileToСompress.txt';
  
  try {
    try {
      const rf = await open(join(__DIRNAME,SOURCE_FOLDER,SOURCE_FILE),'r');
      const readbleFile = rf.createReadStream();
      const df =await open(join(__DIRNAME, SOURCE_FOLDER,DESTINATION_FILE),'w');
      const writableFile = df.createWriteStream();
      const zTag = createGunzip();
      await pipeline(readbleFile,zTag,writableFile);
    }
    catch{
      throw new Error('Something has gone wrong.')
    }
  }
  catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
};

await decompress();