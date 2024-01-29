import {open} from "node:fs/promises"
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import { stdout } from 'node:process';


const read = async () => {
    // Write your code here 
    const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
    const FILE_READ = 'fileToRead.txt';
    const SOURCE_FOLDER = 'files';
  
    const fd =await open(join(__DIRNAME, SOURCE_FOLDER, FILE_READ));
    const readableStream = fd.createReadStream();
    readableStream.pipe(stdout);
};

await read();