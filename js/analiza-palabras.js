/* En el JS, crea una función que se llame analizaPalabras,
que reciba un array de palabras y que devuelva un texto con un análisis de cada palabra.
Para probar la función, escribe palabras separadas por espacios en el textarea del formulario,
y dale al botón "procesar".El resultado aparecerá en la consola. */
/* Crea tu función aquí */
function analizaPalabras(arrayPalabras) {
  let analisis = "#######";
  //Recorremos el array
  for (const i in arrayPalabras) {
    //Capturamos cada palabra en una constante
    const palabra = arrayPalabras[i];
    //Concatenamos a analisis el número de palabra que es y la palabra en cuestión
    analisis += `\nPalabra ${+i + 1}: ${palabra}\n`;
    //Le conctenamos a analisis el número de carácteres que tiene la palabra
    analisis += `Nº de carácteres: ${palabra.length}\n`;
    /*Aquí tenemos una inicialización de una constante, que su expresión lo primero que hace es decir que la palabra capturada la vamos a dividir por letras y dichas letras se meterán en un array,
                    y seguidamente, haremos un join que transformará este array en un string para volver a unir todas las letras,
                    con la diferencia del separador "-", y se lo asignamos a la constante deletreo. */
    const deletreo = palabra.split("").join("-");
    //Concatenamos la constante deletreo a analisis
    analisis += `Deletreo: ${deletreo}\n`;
    //Comprobamos si la palabra es par o inpar haciendo el % con 2 y comprobamos si la palabra empieza por mayúscula y se lo concatenamos a analisis
    analisis += `La palabra es ${
      palabra.length % 2 === 0 ? "par" : "impar"
    } y empieza por ${
      palabra.charAt(0) === palabra.charAt(0).toUpperCase()
        ? "mayúscula"
        : "minúscula"
    }\n`;
    //Hacemos una ternaria comprobando si la palabra incluye "ble", le concatenamos si, sino le concatenamos no a analisis
    analisis += `La palabra ${
      palabra.includes("ble") ? "si" : "no"
    } contiene "ble"\n`;
    analisis += "#######";
  }
  return analisis;
}
