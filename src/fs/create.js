import {open} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const create = async () => {
    // Write your code here 
    const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
    const FILE_NAME = 'fresh.txt';
    const FOLDER_NAME = 'files';
    const FLAGS ='wx';

    try {
      try {
        const file = await open(join(__DIRNAME, FOLDER_NAME, FILE_NAME), FLAGS);
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