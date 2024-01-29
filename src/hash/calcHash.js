import {open} from "node:fs/promises"
import {createHash} from "node:crypto"
import { stdout } from 'node:process';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const calculateHash = async () => {
    // Write your code here 
  const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
  const FILE_CALCULATE = 'fileToCalculateHashFor.txt';
  const SOURCE_FOLDER = 'files';

  const fd =await open(join(__DIRNAME, SOURCE_FOLDER,  FILE_CALCULATE));
  const readableStream = fd.createReadStream();
  const hash = createHash('sha256');

  readableStream.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();