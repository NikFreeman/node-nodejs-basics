import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const create = async () => {
    // Write your code here 
    const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
    const FILE_NAME = 'fresh.txt';
    const FOLDER_NAME = 'files';
    const FLAGS ='wx';

    const pathFile = path.join(__DIRNAME, FOLDER_NAME, FILE_NAME);
    try {
      try {
        const file = await fs.open(pathFile, FLAGS);
        await file.write('I am fresh and young');
        await file.close();
      }
      catch {
        throw new Error('FS operation failed'); 
      }
    }
    catch (e) {
      console.error(`${e.name}: ${e.message}`);
    }
}
await create();