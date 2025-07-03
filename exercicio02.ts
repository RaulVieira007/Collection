import * as readlineSync from 'readline-sync';

let numeros : number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let pesquisa: number = readlineSync.questionInt("Digite o número que você deseja encontra");

if(numeros.includes(pesquisa)){
    let posicao = numeros.lastIndexOf(pesquisa);
    console.log(`Número: ${pesquisa} tem na lista \nna posição: ${posicao}`); // numeros.lastIndexOf mostra posição do meu (Array)
}else {
    console.log(`Número: ${pesquisa} Não foi encontrado!`);
}