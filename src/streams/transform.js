import {stdin, stdout} from "node:process";
import { Transform } from "node:stream";


const transform = async () => {
    // Write your code here 
    const reverseStream = new Transform({
      transform(chunk, _encoding, callback) {
        const reversedText = chunk.toString().split('').reverse().join('')+'\n';
        this.push(reversedText);
        callback();
      }
    });
    stdout.write('In the end press CTRL+C \n');
    stdin.pipe(reverseStream).pipe(stdout);
};

await transform();