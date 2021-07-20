
form.addEventListener('submit', function (evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        Resultado('Peso inválido!',false);
        return;
    }

    if(!altura){
        Resultado('Altura inválida!',false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

    Resultado

    console.log(imc);
});

function getNivelIMC(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc >= 39.9)return nivel[5]
    if(imc >= 34.0)return nivel[4];
    if(imc >= 29.9)return nivel[3];
    if(imc >= 24.9)return nivel[2];
    if(imc >= 18.5)return nivel[1];
    if(imc <  18.5)return nivel[0];
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);


}


function criaP(){
    const p = document.createElement('p');
    return p;
}

function Resultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = (msg);
    resultado.appendChild(p);
}
