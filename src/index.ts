type ReturnType = `#${Uppercase<string>}`;

/*
 * Utility function to generate a random hexadecimal color
 * @returns {string} hexadecimal color
 */
function randomHexaColor(): ReturnType {
  const alpha = '0123456789ABCDEF';
  const output = ['#'];

  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * (alpha.length - 1));
    const c = alpha[idx];
    output.push(c);
  }

  return output.join('') as ReturnType;
}

export default randomHexaColor;
