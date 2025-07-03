import * as readlineSync from 'readline-sync';

let numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let pesquisa: number = readlineSync.questionInt("Digite o número que você deseja encontrar: ");

if(numeros.has(pesquisa)){
    console.log(`O número ${pesquisa} foi encontrado!`);
}else{
     console.log(`O número ${pesquisa} não foi encontrado!`);
}