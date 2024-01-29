import {readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';


const list = async () => {
    // Write your code here
    const __DIRNAME = fileURLToPath(new URL('.', import.meta.url));
    const SOURCE_FOLDER = 'files';
    
    try {
      try{
        const files = await readdir(join(__DIRNAME, SOURCE_FOLDER));        
        for (let file of files){
          console.log(file);            
        }      
      }     
      catch{
        throw new Error('FS operation failed'); 
      }
    }
    catch (e) {
      console.error(`${e.name}: ${e.message}`);
    } 
};

await list();