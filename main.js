const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'sql-lite-node> '
});

const StatementTypes = {
    SELECT: '.select',
    INSERT: '.insert',
    EXIT: '.exit',
    HELP: '.help'
}

const CheckingTypes = (inputBuffer) => {
    switch (inputBuffer) {
        case StatementTypes.SELECT:
            return inputBuffer
        case StatementTypes.INSERT:
            return inputBuffer
        case StatementTypes.EXIT:
            return inputBuffer
        case StatementTypes.HELP:
            return inputBuffer
        default:
            return false
    }
}

const HelpTypes = {
    exit: '.exit',
    select: '.select',
    insert: '.insert',
    help: '.help'
}

const InputBuffer = (inputBuffer) => {
    if(inputBuffer.length < 1) {
        console.log('Command should more than 1 char')
    } else if(inputBuffer[0] != '.') {
        console.log(`Command should start with '.' `)
    }
    if(!CheckingTypes(inputBuffer)) {
        console.log(`Command '${inputBuffer} not recognized`)
    }
}
console.log('Plese type .help for command list')
rl.prompt();

function main() {
    rl.on('line', (inputBuffer) => {

        while(true) {
            InputBuffer(inputBuffer)
            if(inputBuffer == StatementTypes.INSERT) {
                console.log(`${inputBuffer} SUCCESS`)
            }

            if(inputBuffer == StatementTypes.SELECT) {
                console.log(`${inputBuffer} SUCCESS`)
            }

            if(inputBuffer == StatementTypes.HELP) {
                console.log(Object.values(HelpTypes))
            }

            if(inputBuffer == StatementTypes.EXIT) {
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
