/* let titulo: HTMLElement | null = document.querySelector("h1");

// Verificamos si 'titulo' no es null antes de usarlo
if (titulo) {
  titulo.innerHTML = "Hora del Desafío";
} else {
  console.error("El elemento 'h1' no fue encontrado.");
}

const presionado = (): void => console.log("El boton fue clicado");

let ciudad: string = "";

const inputCiudad: string | null = prompt("Ingrese una ciudad:");

if (inputCiudad !== null) {
  ciudad = inputCiudad;
}

const ciudadInput = (): void => alert(`Estuve en ${ciudad} y me acorde de ti`);

const loveAlert = (): void => alert("Yo amo JS");

// Función para solicitar un número al usuario y validarlo
const solicitarNumero = (mensaje: string): number => {
  const input: string | null = prompt(mensaje);
  if (input === null || isNaN(Number(input))) {
    throw new Error("Entrada inválida, se esperaba un número.");
  }
  return Number(input);
}; */

// Función para sumar dos números
/* const sumaNumeros = (): void => {
  try {
    const numero1: number = solicitarNumero("Dame un número:");
    const numero2: number = solicitarNumero("Dame otro número:");
    alert(numero1 + numero2);
  } catch (error) {
    console.error(error.message);
    // O cualquier valor por defecto adecuado en caso de error
  }
};
 */

/* const hola = (): void => {
  console.log("Hola mundo");
};

const saludo = (nonmbre: string): string => {
  return `¡Hola, ${nonmbre}`;
};

let nonmbre: string = "Alex";
console.log(saludo(nonmbre));

const doble = (numero: number) => numero * numero;
console.log(doble(2)); */

/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */
