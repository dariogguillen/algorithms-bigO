/*
Escribir una función que tome un arreglo de números 
y devuelva el número mayor de la lista.
(No se debe utilizar la función Math.max)
Ejemplo del arreglo : [3, 5, 7, 1, 6]
*/

const func = (arr = []) => {
    return arr.reduce((prev, cur) => {
        if(!prev) return cur
        return prev > cur ? prev : cur
    }, null)
}