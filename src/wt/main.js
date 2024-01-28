import {cpus} from "node:os"
import { Worker } from "node:worker_threads";

import { fileURLToPath } from "node:url";
import { join } from "node:path";



const performCalculations = async () => {
    // Write your code here
    const numWorkers = cpus().length;
    const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
    const workers = [];
    function createWorker(data) {
        const promise =new Promise((resolve, reject) => {
         const worker = new Worker(join(__DIRNAME,'worker.js'),{workerData:data})
         worker.on('message',(data)=> resolve({ status: 'resolved', data: data }));
         worker.on('error',() =>reject({status: 'error', data: null}));
        })
        return promise;
       }
       for (let i = 0; i < numWorkers; i++) {
        workers.push(createWorker(i+10))}
      const result = await Promise.allSettled(workers);
      console.log(result.map((elem) => {return elem.status=='fulfilled' ? elem.value : elem.reason}));  
    
};

await performCalculations();