let nom = document.querySelector("#nom");
let passs = document.querySelector("#passs");
let botR = document.querySelector("#botR");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let botRP = document.querySelector("#botRP");
let capbot = document.querySelector("#capbot");
let capinput = document.querySelector("#capinput");
let confbot = document.querySelector("#confbot");
let butp1 = document.querySelector("#butp1");
let butp2 = document.querySelector("#butp2");
let butp3 = document.querySelector("#butp3");


let nomregex = /^[A-Z][A-z]* [A-Z][A-z]* [A-Z][A-z]*( [A-Z][A-z]*)?/g;

let passsregex = /.*[A-Z].*\d.*\d.*\d.*|.*\d.*[A-Z].*\d.*\d.*|.*\d.*\d.*[A-Z].*\d.*|.*\d.*\d.*\d.*[A-Z].*/g;

let p1regex = /\d/g;

let p23regex = /[A-z]+/g;

let nomS = "";
let passsS ="";
let pp1 = "";
let pp2 = "";
let pp3 = "";

botR.onclick = function(){
    nomS = nom.value;
    passsS = passs.value;
    if(nomS.match(nomregex) == null){
        document.querySelector("#errnom").innerHTML = "Formato incorrecto, Ejemplo: Andres Osorio Zapata.";
    }
    else{
        document.querySelector("#errnom").innerHTML = "";
    }
    if(passsS.match(passsregex) == null){
        document.querySelector("#errpasss").innerHTML = "Formato incorrecto, debe contener una mayuscula y 3 numeros como minimo.";
    }
    else{
        document.querySelector("#errpasss").innerHTML = "";
    }
    if(nomS.match(nomregex) != null && passsS.match(passsregex) != null){
        document.querySelector("#registro").hidden = true;
        document.querySelector("#registroP").hidden = false;
    }
}

botRP.onclick = function(){
    pp1 = p1.value;
    pp2 = p2.value;
    pp3 = p3.value;
    console.log(pp1, pp2, pp3);
    if(pp1.match(p1regex) == null){
        document.querySelector("#errp1").innerHTML = "Solo ingrese numeros";
    }
    else{
        document.querySelector("#errp1").innerHTML = "";
    }
    if(pp2.match(p23regex) == null){
        document.querySelector("#errp2").innerHTML = "Solo ingrese caracteres";
    }
    else{
        document.querySelector("#errp2").innerHTML = "";
    }
    if(pp3.match(p23regex) == null){
        document.querySelector("#errp3").innerHTML = "Solo ingrese caracteres";
    }
    else{
        document.querySelector("#errp3").innerHTML = "";
    }
    if(pp1.match(p1regex) != null && pp2.match(p23regex) != null && pp3.match(p23regex) != null){
        document.querySelector("#registroP").hidden = true;
        document.querySelector("#captcha").hidden = false;
    }
}

let control = Math.floor(Math.random() * 3) + 2;
let num = 0;
let resultado = 0;
let intentosC = 2;

for(let i = 0; i < control; i++){
    num = Math.floor(Math.random() * 100) + 1;
    resultado = resultado + num;
    console.log(resultado);
    document.querySelector("#capnum").innerHTML += String(num);
    if(control - 1 != i){
        document.querySelector("#capnum").innerHTML += " + ";
    }
}

capbot.onclick = function(){
    if(intentosC == 0){
        document.querySelector("#captcha").hidden = true;
        document.querySelector("#error").hidden = false;
    }
    if(capinput.value == resultado){
        document.querySelector("#captcha").hidden = true;
        document.querySelector("#confirmacion").hidden = false;
        document.querySelector("#bienvenido").innerHTML = "Bienvenido "+nomS;
    }
    else{
        intentosC-=1;
        document.querySelector("#caperr").innerHTML = "Incorrecto";
    }
}

let intentosP = 2;

confbot.onclick = function(){
    if(intentosP == 0){
        document.querySelector("#confirmacion").hidden = true;
        document.querySelector("#confP1").hidden = false;
    }
    if(document.querySelector("#confpasss").value == passsS){
        document.querySelector("#confirmacion").hidden = true;
        document.querySelector("#sesionIniciada").hidden = false;
    }
    else{
        document.querySelector("#conferr").innerHTML = "Contraseña incorrecta";
        intentosP-=1;
    }
}

butp1.onclick = function(){
    if(document.querySelector("#inputp1").value == pp1){
        document.querySelector("#confP1").hidden = true;
        document.querySelector("#sesionIniciada").hidden = false;

    }
    else{
        document.querySelector("#confP1").hidden = true;
        document.querySelector("#confP2").hidden = false;

    }
}

butp2.onclick = function(){
    if(document.querySelector("#inputp2").value == pp2){
        document.querySelector("#confP2").hidden = true;
        document.querySelector("#sesionIniciada").hidden = false;
        console.log(pp1, pp2, pp3);
    }
    else{
        document.querySelector("#confP2").hidden = true;
        document.querySelector("#confP3").hidden = false;

    }
}

butp3.onclick = function(){
    if(document.querySelector("#inputp3").value == pp3){
        document.querySelector("#confP3").hidden = true;
        document.querySelector("#sesionIniciada").hidden = false;
        console.log(pp1, pp2, pp3);
    }
    else{
        document.querySelector("#confP3").hidden = true;
        document.querySelector("#error").hidden = false;

    }
}