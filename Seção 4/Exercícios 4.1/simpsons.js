const characters_api = require('./simpsons.json');
const fs = require('fs').promises;

function printCharacters(characters) {
  const result = characters.map((character) => {
    return `${character.id} - ${character.name}`
  })

  return result
}
// console.log(printCharacters(characters_api));

// -----------------------------------------------

function tryCharacter(id) {
  try {
    const result = characters_api.find((character) => character.id == id)
    return `${result.id} - ${result.name}`
  } catch {
    console.log("id não encontrado");
  }
}
// console.log(tryCharacter(1));
// console.log(tryCharacter(123));

// -----------------------------------------------

async function removeCharacter() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpsons) => simpsons.id !== '10' && simpsons.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

function main() {
  removeCharacter();
}

main();

// -----------------------------------------------

async function newFile() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);


  const ids = [1, 2, 3, 4];
  const newArray = simpsons.filter((character) => ids.includes(Number(character.id)));

  await fs.writeFile('.simpsonsFamily.json', JSON.stringify(newArray));
}

newFile();


// -------------------------------------------------

async function addNewFile() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({"id":"10","name":"Nelson Muntz"});

  await fs.writeFile('.simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

newFile();

