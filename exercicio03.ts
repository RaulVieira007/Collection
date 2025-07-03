import * as readlineSync from 'readline-sync';

let numeros = new Set<number>();

while(numeros.size < 10){
    let valor = readlineSync.questionInt(`Digite o ${numeros.size + 1} número inteiro:`);
  
    if(numeros.has(valor)){
        console.log("Número já digitado! Digite um valor diferente");
    }else{
        numeros.add(valor);
    }
}

console.clear();
console.log("\nListar dados do Set:");
numeros.forEach((num) => {
    
    console.log(num);
});
