const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'sql-lite-node> '
});

const HelpTypes = {
    exit: '.exit'
}

const InputBuffer = (inputBuffer) => {
    if(inputBuffer.length < 1) {
        console.log('Command should more than 1 char')
    } else {
        console.log(`Command '${inputBuffer} not recognized`)
    }
}

rl.prompt();

function main() {
    rl.on('line', (inputBuffer) => {

        while(true) {
            InputBuffer(inputBuffer)
            if(inputBuffer == HelpTypes.exit) {
                rl.close()
            } else {
                break;
            }
        }
        rl.prompt();
    }).on("close", () => {
        process.exit(0)
    })

}

main()
