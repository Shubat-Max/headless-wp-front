/**
 * Returns string consist of base number and declined word (5 Товаров)
 *
 * @param base Base number for declining
 * @param titles List of declined words (['Товар','Товара','Товаров'])
 * @return string
 */
const declineWord = ( base: number, titles: [string, string, string] ) => {
  const cases = [ 2, 0, 1, 1, 1, 2 ];
  let word = titles[ (base % 100 > 4 && base % 100 < 20) ? 2 : cases[Math.min( base % 10, 5)] ];
  return `${base} ${word}`
}

export default declineWord;