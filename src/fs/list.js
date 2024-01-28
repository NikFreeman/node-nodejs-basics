import * as fs from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';


const list = async () => {
    // Write your code here
    const __DIRNAME = url.fileURLToPath(new URL('.', import.meta.url));
    const SOURCE_FOLDER = 'files';
    
    try {
        try{
          const files = await fs.readdir(path.join(__DIRNAME, SOURCE_FOLDER));        
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