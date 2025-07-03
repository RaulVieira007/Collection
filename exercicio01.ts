import * as readlineSync from 'readline-sync';

let cores : string[] = [];

for(let i = 0; i < 5; i++){
    const cor = readlineSync.question(`Digite a ${i + 1} cor:  `);
    cores.push(cor);
}

console.log("\n Listar todas as cores:");
cores.forEach((cor) => {
    console.log(cor);
});

const coresordenadas = [...cores].sort();
console.log("\n Ordenar as cores:");
coresordenadas.forEach((cor) => {
    console.log(cor);
});