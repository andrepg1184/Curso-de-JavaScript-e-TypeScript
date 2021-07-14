const numero = Number(prompt("Digite um número!"));
const numero_titulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numero_titulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz Quadrada:<strong>${Math.sqrt(numero)}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p>É NaN:<strong> ${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}<strong></strong></p>`
