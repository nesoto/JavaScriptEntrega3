

let nombre = prompt("¿Como te llamas?");
alert("Hola " + nombre);
let RESULTADO = 0;
let cuantosNumeros;
let numeros = [];

let respuesta = prompt("¿Me darías unos numeros para sumar?(Si/No)");

if (respuesta == "Si" || respuesta == "si"){
	cuantosNumeros = Number(prompt("¿Cuantos numeros me vas a dar?"));
	for (let i=0; i<cuantosNumeros; ++i){
		numeros[i] = Number(prompt("Número " + i + ":"));
	}

	for (let j=0; j<cuantosNumeros; ++j){
		RESULTADO += numeros[j];
	}

	alert("Gracias! el resultado es " + RESULTADO);
}else if( respuesta == "No" || respuesta == "no"){
	RESULTADO = 0;
	alert("Esta bien :C");
}
//Entrega 3
