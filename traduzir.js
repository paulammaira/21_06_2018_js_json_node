let dicionario = {
    'letargia': 'estado de sono profundo que se assemelha ao coma',
    'comitar': 'comer e vomitar',
    'sapão' : 'homão',
    'poc' : 'perfeita aos olhos de cristo',
};

let palavra = process.argv[2];
let traducao = dicionario[palavra];

if(traducao == undefined){
    console.log('não tem essa palavra, pô');
}else{
    console.log(traducao);
}