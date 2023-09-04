//Registro
let nom = document.querySelector("#nom");
let passs = document.querySelector("#passs");
let errNom = document.querySelector("#errNom");
let errMayus = document.querySelector("#errMayus");
let errNums = document.querySelector("#errNums");
let passsValida = document.querySelector("#passsValida");

//Inicio de sesion
let nomIS = document.querySelector("#nomIS");
let passsIS = document.querySelector("#passsIS");
let ISintentos = document.querySelector("#ISintentos");
let olviCon = document.querySelector("#olviCon");
let passsISErr = document.querySelector("#passsISErr");
let nomISErr = document.querySelector("#nomISErr");

//Recuperación
let nomolvide = document.querySelector("#nomolvide");
let nomRecu = document.querySelector("#nomRecu");
let nomRecuErr = document.querySelector("#nomRecuErr");
let botRecu = document.querySelector("#botRecu");

//Preguntas
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");

//Captcha
let capinput = document.querySelector("#capinput");

//Botones
let botR = document.querySelector("#botR");
let botRP = document.querySelector("#botRP");
let butp1 = document.querySelector("#butp1");
let butp2 = document.querySelector("#butp2");
let butp3 = document.querySelector("#butp3");
let capbot = document.querySelector("#capbot");
let ISbot = document.querySelector("#ISbot");
let olvicon = document.querySelector("#olvicon");

//Expresiones para confirmar cada paso de la contraseña y nombre
let nom1regex = /^[A-Z][A-z]+/g;
let nom2regex = /^[A-Z][A-z]+ +[A-Z][A-z]+/g;
let nom3regex = /^[A-Z][A-z]+ +[A-Z][A-z]+ +[A-Z][A-z]+/g;
let mayusregex = /[A-Z]/g;
let num1regex = /\d/g;
let num2regex = /.*\d.*\d.*/g;
let num3regex = /.*\d.*\d.*\d.*/g;

//Expresiones para confirmar totalidades
let nomregex = /^[A-Z][A-z]+ +[A-Z][A-z]+ +[A-Z][A-z]+( +[A-Z][A-z]+)?/g;
let passsregex = /.*[A-Z].*\d.*\d.*\d.*|.*\d.*[A-Z].*\d.*\d.*|.*\d.*\d.*[A-Z].*\d.*|.*\d.*\d.*\d.*[A-Z].*/g;
let p1regex = /\d/g;
let p23regex = /[A-z]+/g;

//Strings globales
let nomS = "";
let passsS ="";
let pp1 = "";
let pp2 = "";
let pp3 = "";

//Listeners
nom.addEventListener("input", listenNomR);
passs.addEventListener("input", listenPasssR);

//Funciones
function listenNomR(){
    nomS = nom.value;
    if(nomS.match(nom3regex) != null) errNom.innerHTML = "<span class=\"chuloVerde\">&check;</span> Nombre valido";
    else if(nomS.match(nom2regex) != null) errNom.innerHTML = "<span class=\"xRoja\">&#10005;</span> Falta un apellido";
    else if(nomS.match(nom1regex) != null) errNom.innerHTML = "<span class=\"xRoja\">&#10005;</span> Faltan dos apellidos";
    else errNom.innerHTML = "<span class=\"xRoja\">&#10005;</span> Falta un nombre y dos apellidos";
}
function listenPasssR(){
    passs.value = passs.value.replaceAll(" ", "");
    passsS = passs.value;
    if(passsS.match(mayusregex) != null){
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errMayus.innerHTML = "<span class=\"chuloVerde\">&check;</span> Tiene una mayuscula";
    }
    else{
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errMayus.innerHTML = "<span class=\"xRoja\">&#10005;</span> Le falta una mayuscula";
    }

    if(passsS.match(num3regex) != null){
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errNums.innerHTML = "<span class=\"chuloVerde\">&check;</span> Tiene 3 numeros";
    }
    else if(passsS.match(num2regex) != null){
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errNums.innerHTML = "<span class=\"xRoja\">&#10005;</span> Le falta un numero";
    }
    else if(passsS.match(num1regex) != null){
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errNums.innerHTML = "<span class=\"xRoja\">&#10005;</span> Le faltan dos numeros";
    }
    else{
        errMayus.hidden = false;
        errNums.hidden = false;
        passsValida.hidden = true;
        errNums.innerHTML = "<span class=\"xRoja\">&#10005;</span> Le faltan tres numeros";
    }

    if(passsS.match(passsregex) != null){
        errMayus.hidden = true;
        errNums.hidden = true;
        passsValida.hidden = false;
    }
}

//Botones onclick
botR.onclick = function(){
    nomS = nom.value;
    passsS = passs.value;
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
        document.querySelector("#inicioDeSesion").hidden = false;
        document.querySelector("#bienvenido").innerHTML = "Bienvenido "+nomS;
    }
    else{
        intentosC-=1;
        document.querySelector("#caperr").innerHTML = "Incorrecto";
    }
}

let intentosP = 2;

ISbot.onclick = function(){
    if(nomIS.value == nomS){
        nomISErr.innerHTML = "";
        if(passsIS.value == passsS){
        document.querySelector("#inicioDeSesion").hidden = true;
        document.querySelector("#sesionIniciada").hidden = false;
        }
        else if(intentosP == 0){
            ISintentos.innerHTML = "Demasiados intentos fallidos, Recupere su contraseña.";
            ISbot.hidden = true;
            nomISErr.innerHTML = "";
            passsISErr.innerHTML = "";
        }
        else{
            passsISErr.innerHTML = "Contraseña incorrecta";
            nomISErr.innerHTML = "";
            intentosP-=1;
        }
    }
    else{
        nomISErr.innerHTML = "Nombre de usuario no existe";
        passsISErr.innerHTML = "";
    }
}

olviCon.onclick = function(){
    nomolvide.hidden = false;
    document.querySelector("#inicioDeSesion").hidden = true;
}

botRecu.onclick = function(){
    if(nomRecu.value == nomS){
        nomolvide.hidden = true;
        confP1.hidden = false;
    }
    else{
        nomRecuErr.innerHTML = "Nombre de usuario no existe";
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