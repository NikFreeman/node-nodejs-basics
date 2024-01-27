import * as fs from "node:fs/promises"
import { stdout } from 'node:process';
import * as url from 'node:url';
import * as path from 'node:path';

const read = async () => {
    // Write your code here 
    const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
    const FILE_READ = 'fileToRead.txt';
    const SOURCE_FOLDER = 'files';
  
    const fd =await fs.open(path.join(__DIRNAME, SOURCE_FOLDER, FILE_READ));
    const readableStream = fd.createReadStream();
    readableStream.pipe(stdout);
};

await read();