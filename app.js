// Dada una matriz de enteros nums, regresa true si algún valor aparece al menos dos veces en la matriz y regresa false si cada elemento es distinto.

const nums = [1, 2, 3, 1];

var containsDuplicate = function (nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        };
        seen.add(num);
    };
    return false;
};

console.log(containsDuplicate(nums)); // *


// Dado un número entero x, devuelve truesi xes un palíndromo, y falsede otra manera.

const x = 121

var isPalindrome = function (x) {
    const xString = x.toString(); // Convierte a string
    const reverse = xString.split('').reverse().join('');
    // .split('') esto convierte a array | .reverse() esto lo invierte | .join('') convierte la cadena en string.
    if (xString === reverse) {
        return true;
    } else {
        return false;
    };
};

console.log(isPalindrome(x)); // *


// Se le proporcionan dos matrices de enteros nums1y nums2, ordenados en orden no decreciente , y dos enteros m y n, que representan el número de elementos en nums1y nums2 respectivamente.
// Combinar nums1 y nums2en una sola matriz ordenada en orden no decreciente .
// La matriz ordenada final no debe ser devuelta por la función, sino que debe almacenarse dentro de la matriznums1 . Para adaptarse a esto, nums1tiene una longitud de m + n, donde los primeros melementos indican los elementos que deben fusionarse y los últimos nelementos se establecen en 0y deben ignorarse. nums2tiene una longitud de n.
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

merge(nums1, m, nums2, n);
console.log(nums1); // *

// Una frase es un palíndromo si, después de convertir todas las letras mayúsculas en minúsculas y eliminar todos los caracteres no alfanuméricos, se lee igual hacia adelante y hacia atrás. Los caracteres alfanuméricos incluyen letras y números.
// Dada una cadena s, devuelve true si es un palíndromo o false no . 
// s = "Un hombre, un plan, un canal: Panamá"

var isPalindrome = function (s) {
    // Convertir a minúsculas y eliminar caracteres no alfanuméricos
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Leer la cadena resultante de izquierda a derecha y de derecha a izquierda
    const len = cleanStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false;
        };
    };

    // Si todas las comparaciones coinciden, es un palíndromo;
    return true;
};

// Ejemplo de uso
const s = "Un hombre, un plan, un canal: Panamá";
console.log(isPalindrome(s)); // *






/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums2, target) {
    // Crear un objeto para almacenar los valores y sus índices
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        // Calcular el valor que debe complementar al número actual para alcanzar el objetivo
        const complement = target - nums2[i];

        // Verificar si el valor complementario está en el objeto
        if (complement in numMap) {
            // Si se encuentra, devolver los índices actuales y el índice del valor complementario
            return [numMap[complement], i];
        }

        // Si no se encuentra el valor complementario, almacenar el valor actual en el objeto con su índice
        numMap[nums[i]] = i;
    }

    // Si no se encuentra una solución, devolver un arreglo vacío
    return [];
};

// Ejemplo de uso
const nums3 = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums3, target)); // Salida: [0, 1]

// En un array de numeros encontrar el menor, el mayor y sumarlos y devolverlos.
//**************************************************************************** */

function encontrarMaximoYMinimoYSumar(array) {
    // Inicializar las variables para almacenar el máximo y el mínimo.
    let maximo = array[0];
    let minimo = array[0];

    // Recorrer el array para encontrar el máximo y el mínimo.
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }

    // Sumar el máximo y el mínimo.
    const suma = maximo + minimo;

    // Retornar el resultado.
    return suma;
}

// Ejemplo de uso:
const ejemploArray = [1, 2, 3, 4, 56, 7, 8, 10];
const resultado = encontrarMaximoYMinimoYSumar(ejemploArray);
console.log(resultado); // Imprimirá el resultado de la suma del máximo y el mínimo.


// Otra solución

function maxMin(number) {
    const result = number.reduce((acc, number) => {
        if(acc.max < number) acc.max = number;
        if(acc.min > number) acc.min = number;
        return acc
    }, {min: Infinity, max:0});
    console.log(result.min + result.max);
};

maxMin([1,2,3,4,56,7,8,10]);