import * as fs from 'node:fs/promises';
import * as zlib  from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const compress = async () => {
  // Write your code here 
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const SOURCE_FOLDER = 'files';
  const SOURCE_FILE = 'fileToCompress.txt';
  const DESTINATION_FILE = 'archive.gz';
  try {
    try {
      const rf = await fs.open(path.join(__DIRNAME,SOURCE_FOLDER,SOURCE_FILE),'r');
      const readbleFile = rf.createReadStream();
      const df =await fs.open(path.join(__DIRNAME, SOURCE_FOLDER,DESTINATION_FILE),'w');
      const writableFile = df.createWriteStream();
      const zTag = zlib.createGzip();
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

await compress();