const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons')
let indexCor = 0
let intervalo = null

const ligarSemaforo = (event) => {
    pararIntervalo()
    ligarCores[event.target.id]();
    
}

const pararIntervalo = () =>{
   clearInterval(intervalo)
}

const proximoIndex = () =>{
    if (indexCor < 2){
        ++indexCor
    }else{
        indexCor = 0;
    }
}
const trocaCores = () => {
    let cores = ['red', 'yellow', 'green'];
    let cor = cores[indexCor];
    ligarCores[cor]();
    proximoIndex()
}

const ligarCores = {

    red: () => {
        img.src = './img/vermelho.png';
    },
    yellow: () => {
        img.src = './img/amarelo.png';
    },
    green: () => {
        img.src = './img/verde.png';
    },
    automatic: () => {
       
        intervalo = setInterval(trocaCores, 1000);
      
    }
}

buttons.addEventListener('click', ligarSemaforo)