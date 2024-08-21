/*
Dado un método que recibe un String, comprobar si todos los caracteres son unicos o no.
isUniqueChar('abcde') = true
isUniqueChar('abcded') = false

Complejidad O(1) (constante) ya que si la longitud de los strings es mayor a al numero maximo de caracteres distintos tiene que haber duplicados
solo se tendria que validar cuando la longitud es menos
*/

const isUniqueChar = (str = "") => {
  const NUMBER_OF_CHARS = 128;
  if (str.length > NUMBER_OF_CHARS) return false;
  const chars = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (chars.has(char)) return false;
    chars.add(char);
  }
  return true;
};

module.exports = isUniqueChar
