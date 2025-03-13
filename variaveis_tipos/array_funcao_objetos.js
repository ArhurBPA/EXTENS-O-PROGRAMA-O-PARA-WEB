let num_A = 10;
let num_B = 20;
let num_C;

const operacoes = ["adicao", "subtracao", "multiplicacao", "divisao"];

function imprimirResultado(oerando1, operando2, resultado, operacao){
    //console.log(`Resultado da ${operacao} entre ${num_A} e ${num_B} é ${num_C}`);
}

num_C = num_A + num_B;
imprimirResultado(num_A, num_B, num_C, operacoes[0]);
num_C = num_A - num_B;
imprimirResultado(num_A, num_B, num_C, operacoes[1]);
num_C = num_A * num_B;
imprimirResultado(num_A, num_B, num_C, operacoes[2]);
num_C = num_A / num_B;
imprimirResultado(num_A, num_B, num_C, operacoes[3]);

let matriz = [[1,2,3] ,[4,5,6] ,[7,8,9]];

function imprimirmatriz(A){
    for(let i = 0; i< A.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i].length; j++){
            linhaMatriz +=  A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

//imprimirmatriz(matriz);


let capitais = {
    DF : "Brasilia",
    DDD_DF : 61,
    SP : "São Paulo",
    DDD_SP : 11,
    RJ : "Rio de Janeiro",
    DDD_RJ : 21

};

for (const key in capitais) {
    //console.log(key + "-" + capitais[key]);
}

function verificarNumeroPar(n) {
    if (n % 2 == 0){
        return true;
    }
    return false;
}

console.log(verificarNumeroPar(2));
console.log(verificarNumeroPar(1));