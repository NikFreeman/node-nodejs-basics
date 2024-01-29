import {open} from "node:fs/promises"
import { stdin, stdout } from 'node:process';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const write = async () => {
    // Write your code here 
    const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
    const FILE_WRITE = 'fileToWrite.txt';
    const SOURCE_FOLDER = 'files';
  
    const fd =await open(join(__DIRNAME, SOURCE_FOLDER, FILE_WRITE),'w');
    const writableStream = fd.createWriteStream();
    stdout.write('In the end press CTRL+C \n');
    stdin.pipe(writableStream);

};

await write();