import * as fs from "node:fs/promises"
import * as crypto from "node:crypto"
import { stdout } from 'node:process';
import * as url from 'node:url';
import * as path from 'node:path';


const calculateHash = async () => {
    // Write your code here 
  const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
  const FILE_CALCULATE = 'fileToCalculateHashFor.txt';
  const SOURCE_FOLDER = 'files';

  const fd =await  fs.open(path.join(__DIRNAME, SOURCE_FOLDER,  FILE_CALCULATE));
  const readableStream = fd.createReadStream();
  const hash = crypto.createHash('sha256');

  readableStream.pipe(hash).setEncoding('hex').pipe(stdout);

};

await calculateHash();