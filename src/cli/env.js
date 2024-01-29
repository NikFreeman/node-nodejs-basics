const parseEnv = () => {
    // Write your code here 
    let result ='';
    const rssVariables = Object.entries(process.env).filter(key => key[0].startsWith("RSS_"));
    rssVariables.forEach(envItem => result = result + `${envItem[0]}=${envItem[1]}; `);   
    console.log(result.slice(0,-2));
};

parseEnv();