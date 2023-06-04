const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const boton = document.querySelector('#btnCalcular')
const pReulst = document.querySelector('#result')

const form = document.querySelector('form')

input1.value=3;
input2.value=4;

//Nota: no lleva parentesis la funcion que se llama
form.addEventListener('submit',calculo);

function calculo(event){
    event.preventDefault();
    const suma = parseInt(input1.value)*parseInt(input2.value);
    resultado.innerText = "Resultado: " + suma;
}