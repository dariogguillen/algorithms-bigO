/*
Un anagrama es una palabra creada a partir de la reordenación de las letras
de otra palabra. Ej: saco - caso
Dado un array de strings, devuelve los anagramas agrupados.

Ejemplo:
Input: words = ['saco', 'arresto', 'programa', 'rastreo', 'caso']
Output: [['saco', 'caso'], ['arresto', 'rastreo'], ['programa']]

Sin timar en cuenta la ñ hay 26 letras minusculas,
Se tiene que iterar una vez el array completo O(N)
y cada palabra se tiene que iterar para generar un hash O(C) y guardarlo en un mapa O(1)
O(N) * O(C) // C corresponde al numero de caracteres de la palabra mas larga y N a la longitud del array
*/

const aCode = "a".charCodeAt(0);
const getAnagrams = (arr = []) => {

  const getHash = (str = "") => {
    const letterCount = new Array(26).fill(0);
    str.split("").forEach((char) => {
      letterCount[char.charCodeAt(0) - aCode]++;
    });
    return letterCount.toString();
  };

  const anagramMap = (words = []) => {
    const wordMap = new Map();
    words.forEach((word) => {
      const hash = getHash(word);
      if (!wordMap.has(hash)) {
        wordMap.set(hash, []);
      }
      wordMap.get(hash).push(word);
    });
    return wordMap;
  };

  if (!arr || arr.length === 0) return [];
  const anagrams = anagramMap(arr);
  return Array.from(anagrams.values());
};

module.exports = getAnagrams;
