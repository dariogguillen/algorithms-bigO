/*
Dada una matriz, escribe un algoritmo para establecer ceros
en la fila F y columna C si existe un 0 en la celda F:C

Ejemplo:
Input:  2 0 3 0 2
        7 4 1 3 8
        0 0 1 2 1
        9 3 4 1 9

output: 0 0 0 0 0
        7 0 1 0 8
        0 0 0 0 0
        9 0 4 0 9

*/

const printMatrix = (arr = [[]]) => {
  console.log("\n" + arr.map((a) => a.join(" ")).join("\n"));
};

const zeroMatrix = (matrix = [[0]]) => {
  let rowZeroIndex = [];
  matrix.forEach((value, index) => {
    value.forEach((v, i) => {
      if (v === 0) rowZeroIndex.push([index, i]);
    });
  });
  rowZeroIndex.forEach((value) => {
    matrix[value[0]].fill(0);
    matrix.forEach((v) => (v[value[1]] = 0));
  });
  printMatrix(rowZeroIndex);
  printMatrix(matrix);
};

zeroMatrix([
  [2, 1, 3, 0, 2],
  [7, 4, 1, 3, 8],
  [4, 0, 1, 2, 1],
  [9, 3, 4, 1, 9],
]);
