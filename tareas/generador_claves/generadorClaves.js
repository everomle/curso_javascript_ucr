// JavaScript Document
/*
Tarea #2 Generador de contrasennas
Modulo #2
Evelyn Roman Leiton
11 setiembre 2024

*/

document.getElementById('btnGenerar').addEventListener('click', function(){
const passwordSize = document.getElementById('inputPasswordSize').value;

//validando
if(isNaN(passwordSize)  || passwordSize <= 0  ){
	  document.getElementById('result').textContent = "Ingrese un dato valido";
	 document.getElementById('inputPasswordSize').value = '';
		return; 
	 }	
	

//Convertir un String a Array (78 caracteres y en el array va de 0 a 77)
const arrayCaracteres = Array.from('BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>?');	
	
//Obtengo un numero aleatorio 0 a 77
function numeroAleatorioDecimales(min, max) {
 var num = Math.random() * (max - min);
 return Math.floor(num + min);	
}		
//alert(numeroAleatorioDecimales(0, arrayCaracteres.length-1));	// (0 a 77)

	
//passwordSize = 6	
//numeroAleatorioDecimales = 1

	
let password =''; 	
for (i = 0; i < passwordSize; i++) {
  let numeroAleatorio =	numeroAleatorioDecimales(0, arrayCaracteres.length-1);	
  let caracter = arrayCaracteres[numeroAleatorio];	 // c | d | m
  password += caracter; // c + d = cd
	                    // cd + m = cdm
  //alert(password);	
} 


document.getElementById('result').textContent = password;
document.getElementById('inputPasswordSize').value = '';	

	
});


