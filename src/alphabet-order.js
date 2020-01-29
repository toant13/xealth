function processAlphabetOrderFrom(precedenceGraph, visited, currentLetter, result) {
  if (visited.has(currentLetter)) {
    return;
  }
  visited.add(currentLetter);
  const precedencesForCurrentLetter = precedenceGraph.get(currentLetter);
  precedencesForCurrentLetter.forEach((letter) => processAlphabetOrderFrom(precedenceGraph, visited, letter, result));
  result.unshift(currentLetter);
}

function getPrecedenceGraphFrom(words) {
  const uniqueCharsSet = new Set(Array.from(words.join('')));
  const uniqueCharsList = Array.from(uniqueCharsSet);
  const precedenceGraph = uniqueCharsList.reduce((graph, char) => graph.set(char, []), new Map());

  for (let i = 1; i < words.length; i += 1) {
    const prevWord = words[i - 1];
    const currWord = words[i];
    const length = currWord.length <= prevWord.length ? currWord.length : prevWord.length;
    for (let j = 0; j < length; j += 1) {
      if (prevWord.charAt(j) !== currWord.charAt(j)) {
        precedenceGraph.get(prevWord.charAt(j)).push(currWord.charAt(j));
        break;
      }
    }
  }
  return precedenceGraph;
}

function getAlphabetOrderingFrom(words) {
  const precedenceGraph = getPrecedenceGraphFrom(words);
  const visited = new Set();
  const output = [];
  precedenceGraph.forEach((value, char) => processAlphabetOrderFrom(precedenceGraph, visited, char, output));
  return output;
}

export default getAlphabetOrderingFrom;
