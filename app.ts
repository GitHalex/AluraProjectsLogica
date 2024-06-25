let titulo: HTMLElement | null = document.querySelector("h1");

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
};

// Función para sumar dos números
const sumaNumeros = (): void => {
  try {
    const numero1: number = solicitarNumero("Dame un número:");
    const numero2: number = solicitarNumero("Dame otro número:");
    alert(numero1 + numero2);
  } catch (error) {
    console.error(error.message);
    // O cualquier valor por defecto adecuado en caso de error
  }
};
