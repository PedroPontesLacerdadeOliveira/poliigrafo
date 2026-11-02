const perguntas = [
'  Você tem amigos relacionados à vítima do crime? ',
'  Você conversou com a vítima no dia ou um dia antes do ocorrido? ',
'  Você tem algum tipo de histórico criminal? ',
'  A vítima teve algum conflito ou discussão contigo na última semana? ',
'  Você já teve algum relacionamento com a vítima ? ',
'  Você tem algum tipo de distúrbio que interfere em seu comportamento? ',
'  Sobre o local do ocorrido, você costuma ou costumava frequentá-lo? ',
'  Você já trabalhou com a vítima? ',
'  Você tem algum tipo de vício ou hábito compulsório? ',
'  Está sendo totalmente sincero em suas respostas? '
];


let contador =0;

let indice=0;

//botão sim ou não
function contabilizar(event) {
    
    const botao= event.target.id;

    if (botao === "sim") {
        contador++;
    }
    indice++;
    avancar();
}

function avancar() {
    if (indice>=perguntas.length){
         finalizar();
        return;
    }
document.getElementById("pergunta").innerText=perguntas[indice];
document.getElementById("contador-pergunta").innerText=`Pergunta ${indice+1} de 10`
}


function finalizar(){
    
    let veredito;
if (contador<5){
     veredito = "Inocente";
}else if (contador == 5){
    veredito = "Suspeito";
}else if (contador >= 6 && contador<=8){
    veredito = "Cumplice";
}else {
    veredito = "Culpado";
}
    const fim = document.querySelector('.card')
    fim.innerHTML= 
    `<h2>Resultado do Teste</h2>
    <h3>Perguntas respondidas com "Sim" = ${contador}</h3>
    <h4>Veridito: ${veredito}</h4>
    `;
}
avancar();
