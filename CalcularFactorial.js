function calcularFactorial() {

let numero = parseFloat(prompt("Ingresa un número para calcular su factorial: "));

    if (isNaN(numero)){
    alert("Porfavor, ingresa un valor numérico.");
    calcularFactorial();
    return;
    };

    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    };
    
    console.log("El factorial de " + numero + " es: " + factorial)

}
calcularFactorial();
