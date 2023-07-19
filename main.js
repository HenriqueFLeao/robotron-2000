const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const controle = document . querySelectorAll ("[data-controle]");
const estatistica = document . querySelectorAll ("[data-estatistica]");
const imagens = [ "img/Robotron 2000 - Preto.png", "img/Robotron 2000 - Azul.png", "img/Robotron 2000 - Branco.png", "img/Robotron 2000 - Amarelo.png",
"img/Robotron 2000 - Rosa.png", "img/Robotron 2000 - Vermelho.png"];
const botao__cor = document.getElementById ("botao__robo");

controle.forEach ( (elemento) => {
     elemento.addEventListener ("click", (evento)=>{
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
      atualizaEstatisticas( evento.target.dataset.peca )
     }  )
}  )

function manipulaDados (operacao, controle) {

const contador = controle.querySelector ("[data-contador]")


     if ( operacao === "-" ){
           contador.value = parseInt(contador.value) - 1;
     } else {

           contador.value = parseInt(contador.value) + 1;
     }

}

function atualizaEstatisticas(peca){


estatistica.forEach ( (elemento) => {

      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] 
}  )

}

let indice = 0;

botao__cor.addEventListener("click", function(){
        var img = document.getElementById("robotron");
    indice = (indice + 1) % imagens.length;
    img.src = imagens[indice];
}

)

function pintarRobo () {

    }