const stringBase = 'Alura';

console.log(`

--- Manipulação de String ---

  String original: ${stringBase}

  toUpperCase: ${stringBase.toUpperCase()}

  toLowerCase: ${stringBase.toLowerCase()}

  slice: ${stringBase.slice(1, 4)}

  substring: ${stringBase.substring(1, 4)}

  charAt: ${stringBase.charAt(0)}

  includes: ${stringBase.includes('Alu')}

  startsWith: ${stringBase.startsWith('Alu')}

  endsWith: ${stringBase.endsWith('ura')}

  indexOf: ${stringBase.indexOf('u')}

  replace: ${stringBase.replace('Alura', 'JavaScript')}

  trim: ${stringBase.trim()}

  length: ${stringBase.length}

  toWellFormed: ${stringBase.toWellFormed()}
`);
