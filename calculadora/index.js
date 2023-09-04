let parcial = "";
let txtResultado = document.getElementById("txtResultado");

function actualizarPantalla() {
    txtResultado.innerHTML = parcial;
}

document.querySelectorAll(".tecla").forEach((button) => {
    button.addEventListener("click", () => {
        const valor = button.getAttribute("data-value");

        if (valor === "=") {
            try {
                if (/^[-+*/.\d\s()]+$/.test(parcial)) {
                    parcial = eval(parcial);
                    actualizarPantalla();
                } else {
                    parcial = "Error";
                    actualizarPantalla();
                }
            } catch (error) {
                parcial = "hola";
                actualizarPantalla();
            }
        } else if (valor === "AC") {
            parcial = "";
            actualizarPantalla();
        } else {
            parcial += valor;
            actualizarPantalla();
        }
    });
});
