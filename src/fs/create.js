import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path'

const create = async () => {
    // Write your code here 
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filename = 'fresh.txt'
    const foldermane = 'files';
    const flags ='wx';

    let pathfile = path.join(__dirname, foldermane, filename);
    try {
      try {
      let file = await fs.open(pathfile, flags);
      await file.write('I am fresh and young')
      await file.close()
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