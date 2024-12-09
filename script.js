// 1. Imprimir elementos de índice 2 y 4
function imprimirElementos() {
    let j = [200, -100, 45, 78, 32];
    console.log(j[2], j[4]);
  }
  
  // 2. Imprimir "cd" y "gh"
  function imprimirElementosF() {
    let f = ["ab", "cd", "ef", "gh"];
    console.log(f[1], f[3]);
  }
  
  // 3. Eliminar el elemento de índice 2
  function eliminarIndice2() {
    let arr = [1, 2, false];
    arr.splice(2, 1);
    console.log(arr);
  }
  
  // 4. Recorrer arreglo con foreach
  function recorrerConForeach() {
    let aux = [10, true, "k200", 20.7];
    aux.forEach((elemento) => console.log(elemento));
  }
  
  // 5. Imprimir números impares
  function imprimirImpares() {
    let k = [17, 4, 64, 79, 109, 112];
    k.forEach((num) => {
      if (num % 2 !== 0) console.log(num);
    });
  }
  
  // 6. Cambiar valores en el arreglo
  function modificarArregloH() {
    let h = [true, true, false, true, false];
    h[2] = true;
    h[3] = false;
    console.log(h);
  }
  
  // 7. Cambiar elementos "jp" y "qr"
  function modificarArregloW() {
    let w = ["wc", "jp", "zx", "qr"];
    w[1] = true;
    w[3] = 30;
    console.log(w);
  }
  
  // 8. Recorrer arreglo e imprimir
  function recorrerArreglo(arr) {
    arr.forEach((elemento) => console.log(elemento));
  }
  
  // 9. Retornar número de elementos
  function contarElementos(arr) {
    return arr.length;
  }
  
  // 10. Mostrar índices de elementos con indexOf
  function mostrarIndices() {
    let arr = [30, 44, 54, 89, 100];
    console.log(arr.indexOf(44), arr.indexOf(89), arr.indexOf(70));
  }
  
  // 11. Eliminar elementos desde índice 3 hasta 4
  function eliminarIndices() {
    let arr = [34, ["q"], 67, 1, 99, 1 / 2];
    arr.splice(3, 2);
    console.log(arr);
  }
  
  // 12. Ordenar frutas y verduras
  function ordenarFrutasYVerduras() {
    let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
    let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
    let frutas = [];
    let verduras = [];
  
    [...arreglo1, ...arreglo2].forEach((elemento) => {
      if (["Pera", "Limón", "Manzana", "Banano"].includes(elemento)) frutas.push(elemento);
      else verduras.push(elemento);
    });
  
    console.log("Frutas:", frutas);
    console.log("Verduras:", verduras);
  }
  
  // 13. Contar apariciones de "c" en nombres
  function contarLetraC(nombres) {
    let contador = 0;
    nombres.forEach((nombre) => {
      for (let letra of nombre) {
        if (letra.toLowerCase() === "c") contador++;
      }
    });
    console.log(`La letra 'c' aparece ${contador} veces.`);
  }
  
  // 14. Ordenar números de menor a mayor
  function ordenarNumeros(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 15. Ordenar letras alfabéticamente
  function ordenarLetras(arr) {
    return arr.sort();
  }
  
  // 16. ADN con más Timina (T)
  function adnConMasTimina(adnArr) {
    let maxCadena = "";
    let maxTimina = 0;
  
    adnArr.forEach((cadena) => {
      let contadorT = (cadena.match(/T/g) || []).length;
      if (contadorT > maxTimina) {
        maxTimina = contadorT;
        maxCadena = cadena;
      }
    });
  
    console.log(`Cadena con más Timina: ${maxCadena}`);
  }
  
  // 17. Números consecutivos
  function encontrarConsecutivos() {
    let arr = [5, 7, 90, 2, 5, 3, 8, 99];
    arr.forEach((a) => {
      arr.forEach((b) => {
        if (a + 1 === b) console.log(`${a} y ${b} son consecutivos.`);
      });
    });
  }
  
  // 18. Contar apariciones de "Maria"
  function contarMaria() {
    let arr = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
    let contador = 0;
  
    arr.forEach((nombre) => {
      if (nombre === "Maria") contador++;
    });
  
    console.log(`Maria aparece ${contador} veces.`);
  }
  
  // 19. Suma de cuadrados
  function sumaCuadrados() {
    let arr = [-2, 8, 99, 1, 7];
    let suma = 0;
  
    arr.forEach((num) => {
      suma += num ** 2;
    });
  
    console.log(`Suma de cuadrados: ${suma}`);
  }
  
  // 20. Suma de elementos
  function sumaElementos() {
    let arr = [15, 7, 9, 12, 1];
    let suma = 0;
  
    arr.forEach((num) => {
      suma += num;
    });
  
    console.log(`Suma de elementos: ${suma}`);
  }
  