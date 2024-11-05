// JavaScript Document

/* document.querySelectorAll('.numero'): Nos trae una coleccion de NodeList(10):
[button.numero, button.numero,.... button.numero.cero]
-> 0: button.numero (propiedades)
-> 1: button.numero (propiedades)

No servia el evento 'click' al realizarlo asi:
let arrayNumeros = document.getElementsByClassName('numero'); /*array[0...9]
*/

let btnClear = document.getElementById('all-clear'); 
let btnEqual = document.getElementsByClassName('equal-sign')[0];
let btnErase = document.getElementById('clear-sign');

let btnSumar = document.getElementsByClassName('sumar');
let btnRestar = document.getElementsByClassName('restar');
let btnDividir = document.getElementsByClassName('dividir');
let btnMultiplicar = document.getElementsByClassName('multiplicar');
let btnRaizCuadrada = document.getElementsByClassName('raizCuadrada');
let btnPorcentaje = document.getElementsByClassName('porcentaje');
let arrayNumeros = document.querySelectorAll('.numero'); 
let arrayOperadores = document.querySelectorAll('.operator'); 
let inputActualizado = '';
let operadorSeleccionado = '';
let numerosScreen1 = '';
let numerosScreen2 = '';
let resultadoOperacion = ''; 


function validarDosPuntosScreen1(eventoTargetValue){
      // Validar si el numerosScreen1 es un punto (.)
  if (eventoTargetValue === ".") {
    // Si ya existe un punto en el número actual (numerosScreen1), no permitir otro
    if (numerosScreen1.includes(".") ) {
      return; // Evitar duplicar el punto
    }
  }
  // Añadir el numerosScreen1 (número o punto) al numerosScreen1
  numerosScreen1 += eventoTargetValue;
  console.log(numerosScreen1); // Mostrar el número actualizado en la calculadora	
}

function validarDosPuntosScreen2(eventoTargetValue){
  if (eventoTargetValue === ".") {
    if (numerosScreen2.includes(".") ) {
      return; 
    }
  }
  
  numerosScreen2 += eventoTargetValue;
  console.log(numerosScreen1); // Mostrar el número actualizado en la calculadora	
}


//Operadores
function sumar(num1, num2){
	//*falta validar q sea un num
	resultadoOperacion = num1 + num2;
	return resultadoOperacion;
}

function restar(num1, num2){
	resultadoOperacion = num1 - num2;
	return resultadoOperacion;
}

function multiplicar(num1, num2){
	resultadoOperacion = num1 * num2;
	return resultadoOperacion;
}

function dividir(num1, num2){
	if (num2 === 0) {
        return "0 no es divisor";
    }
	resultadoOperacion = num1 / num2;
	return resultadoOperacion;
}

function porcentaje(num1, num2){
	if (num1 === 0) {
        return "No puede ser 0";
    }
	resultadoOperacion = (num1 * num2) / 100;
	//resultadoOperacion = num1 / num2;
    return resultadoOperacion;
}

/* arrayNumeros
-> 0: button.numero 1(propiedades)
-> 1: button.numero 2(propiedades) ---> 'click' = lo pinta en pantalla 1
-> 2: button.numero 3(propiedades)
-> 3: button.numero  (propiedades)
-> +: button.numero +(propiedades) ---> 'click' = lo pinta en pantalla 2
-> 4: button.numero 5(propiedades) ---> 'click' = lo pinta en pantalla 3
*/
arrayNumeros.forEach(function(botonNumero) {
    botonNumero.addEventListener('click', function(evento) {
		console.log('evento', evento.target.value);
		if(document.getElementById('calculator-screen2').value ==''){
			validarDosPuntosScreen1(evento.target.value);
			//numerosScreen1 += evento.target.value; 
			document.getElementById('calculator-screen1').value = numerosScreen1;	
			
			
		}else{
			//numerosScreen2 += evento.target.value;
			validarDosPuntosScreen2(evento.target.value);
			document.getElementById('calculator-screen3').value = numerosScreen2;
			
		}
	});
});



arrayOperadores.forEach(function(botonOperador) {
    botonOperador.addEventListener('click', function(evento) {
	    operadorSeleccionado = evento.target.value;
		document.getElementById('calculator-screen2').value = operadorSeleccionado;
		//console.log("El operador seleccionado es: " + '"' + operadorSeleccionado + '"');
	});
});



// Fx calcular
function calcular() {
    let num1 = parseFloat(numerosScreen1);
    let num2 = parseFloat(numerosScreen2);
	
	console.log("calcular",num1, num2)
    
    switch (operadorSeleccionado) {
        case "+":
            resultadoOperacion = sumar(num1, num2);
            break;
        case "-":
            resultadoOperacion = restar(num1, num2);
            break;
        case "*":
            resultadoOperacion = multiplicar(num1, num2);
            break;
        case "/":
            resultadoOperacion = dividir(num1, num2);
            break;
        case "%":
			num2 = 100;
            resultadoOperacion = porcentaje(num1, num2);
            break;
        /*case "√":
			num1 = '';
			resultadoOperacion = raizCuadrada(num2); 
            break;
			*/
        default:
            resultadoOperacion = "error";
            break;
    }

    // Limpiando valores
	let resultado = resultadoOperacion;
	resetear();
	numerosScreen1 = resultado;
	document.getElementById('calculator-screen1').value = resultado;
}



// Fx resetear valores
function resetear() {
	console.log('reseteando');
	operadorSeleccionado = '';
	numerosScreen1 = '';
	numerosScreen2 = '';
	resultadoOperacion = '';
	document.getElementById('calculator-screen1').value = "";
	document.getElementById('calculator-screen2').value = "";
    document.getElementById('calculator-screen3').value = "";
}

//Fx actualizar valores
function actualizando() {
	if(document.getElementById('calculator-screen2').value ==''){
			numerosScreen1 = numerosScreen1.slice(0, -1);
			document.getElementById('calculator-screen1').value = numerosScreen1;	
		    //876
		}else{
			if(document.getElementById('calculator-screen3').value ==''){
			   operadorSeleccionado = operadorSeleccionado.slice(0, -1);
			   document.getElementById('calculator-screen2').value = operadorSeleccionado;
			   }else{
				 numerosScreen2 = numerosScreen2.slice(0, -1);  
				 document.getElementById('calculator-screen3').value = numerosScreen2;  
			   }	
		}
}

// Botón igual
btnEqual.addEventListener('click', calcular);

btnErase.addEventListener('click', actualizando);

btnClear.addEventListener('click', resetear);









/*
btnClear.addEventListener('click', function() {
    resetear();
    document.getElementById('calculator-screen1').value = '';
    document.getElementById('calculator-screen2').value = '';
    document.getElementById('calculator-screen3').value = '';
});
*/


/*
btnEqual.addEventListener('click', calcular);
calcular ();
*/													 
													 
console.log(arrayOperadores);
//console.log(botonNumero);
console.log(arrayNumeros);



//if(evento.target.className === 'numero'){
//				   document.getElementById('calculator-screen3').value += evento.target.value;
	//			}
