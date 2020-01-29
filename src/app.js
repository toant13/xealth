import readline from 'readline';
import getAlphabetOrderingFrom from './alphabet-order';


async function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(`${question} `, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function getInput() {
  const wordCountInput = await getUserInput('How many words would you like to enter?');
  const wordCount = parseInt(wordCountInput, 10);
  console.log(`Ok, great! ${wordCount}. Make sure to enter words in sort alphabetical order\n`);

  const wordsList = [];
  for (let i = 1; i <= wordCount; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const word = await getUserInput(`Enter word  ${i}:`);
    wordsList.push(word);
  }
  console.log('\nList of words sorted in alphabetical order:', wordsList);
  return wordsList;
}

async function main() {
  const wordsList = await getInput();
  const output = getAlphabetOrderingFrom(wordsList);
  console.log('Ordering of the alphabet:                  ', output);
}

main().then(() => { process.exit(); });
