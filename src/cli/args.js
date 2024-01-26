const parseArgs = () => {
    // Write your code here 
    let result ='';
    process.argv.forEach((arg,index) => {
        if (index > 1){
        (arg.slice(0,2) == '--')? result += `${arg.slice(2)} is `: result += `${arg}, `;
    }
    } );
    console.log(result.slice(0,-2));
};

parseArgs();