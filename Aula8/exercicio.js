const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Digite o primeiro número: ', (numero1) => {
    rl.question('Digite o segundo número: ', (numero2) => {
        //Calculando a soma
        numero1 = Number (numero1)
        numero2 = Number (numero2)
        const resultado = numero1 + numero2;
        //Exibindo o resultado
        console.log(`A soma de ${numero1} e ${numero2} é ${resultado}
        `);

        rl.close();
    });
});