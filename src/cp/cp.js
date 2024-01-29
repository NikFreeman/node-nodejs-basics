import {spawn} from 'node:child_process'

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node', ['src/cp/files/script.js', ...args], {stdio: ['pipe', 'pipe', 'pipe', 'ipc']});
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
    return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);

