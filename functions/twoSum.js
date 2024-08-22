/*
Dado un array de números enteros y un target, retorna los índices de dos
números para los que la suma de ambos sea igual al target.

Asumir que hay solamente una solucióñ

Ejemplo 1:
Input: nums = [9,2,5,6], target = 7
Output: [1,2]

Ejemplo 2:
Input: nums = [9,2,4,5], target = 100
Output: null

O(N) porque se tiene que iterar el array completo para saber si se encuentra el resultado
de otra manera se regresa null
*/

const twoSum = (arr = [], target = 0) => {
  const complementMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (complementMap.has(target - curr)) {
      return [complementMap.get(target - curr), i];
    }
    complementMap.set(curr, i);
  }
  return null;
};

module.exports = twoSum;
