import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path'

const create = async () => {
    // Write your code here 
    const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
    const FILENAME = 'fresh.txt';
    const FOLDERNAME = 'files';
    const FLAGS ='wx';

    let pathfile = path.join(__DIRNAME, FOLDERNAME, FILENAME);
    try {
      try {
        let file = await fs.open(pathfile, FLAGS);
        await file.write('I am fresh and young');
        await file.close();
      }
      catch {
        throw new Error('FS operation failed'); 
      }
    }
    catch (e) {
        console.error(e.message);
    }
}
await create();