function calcularFactorial() {
    let datos = document.getElementById('datos').value;
    let resul = document.getElementById('resultado');
    let factorial = 1;  

    if (!isNaN(datos) && datos >= 0) {
        for (let i = 1; i <= datos; i++) {
            factorial *= i;
        }
        resul.textContent = `El factorial de ${datos} es ${factorial}`;
    } else {
        resul.textContent = 'Por favor, ingrese un número válido.';
    }
}