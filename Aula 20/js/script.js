function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome'); 
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome:<strong>${nome.value}</strong></p> 
        <p>Sobrenome:<strong>${sobrenome.value}</strong></p>
        <p>Peso:<strong>${peso.value}Kg</strong></p>
        <p>Altura:<strong>${altura.value}</strong></p>`;
    }

    form.addEventListener("submit",recebeEventoForm);
}

meuEscopo();