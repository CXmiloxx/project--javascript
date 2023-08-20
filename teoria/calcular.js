const n1text = document.getElementById ("n1");
const n2text = document.getElementById ("n2");
const suma = document.getElementById ("sum");
const resta = document.getElementById ("res");
const multiplicacion = document.getElementById ("mul");
const division = document.getElementById ("divi");
const respuesta = document.getElementById ("resp");

suma.addEventListener("click", sum, res, mul, divi)

function sum (){
const op1 = parseFloat (n1text.value)
const op2 = parseFloat (n2text.value)

let resul = op1 + op2

    resp.innerText = resul
}


/*async function obtenerData(){
    const response =await fetch( "http://127.0.0.1:5500/teoria/main.json")
    const json = await response.text();
    console.log(JSON.parse(json))
    }
    obtenerData()*/
