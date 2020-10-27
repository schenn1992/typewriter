  // write a function that accept a parameter from the command line
const rollDice = function() {
  let timesToRoll = process.argv.slice(2); 
  let result = [];
  // roll x times according to the parameter with a for loop
  for (let i = 0; i <= String(timesToRoll) - 1; i++) {
  // use random() to roll the dice
    result.push(Math.floor(Math.random() * Math.floor(7)));
  } 
  //store result into an array
  // join the array and convert to String
  const joinedResult = result.join(", ");
  // concenate the result for output
  const outputResult = `Rolled ${timesToRoll} dice: ${joinedResult}`;
  return outputResult;
  // console.log concat result
  // execute function 
};

console.log(rollDice());




