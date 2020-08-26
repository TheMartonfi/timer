const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const validateUserInput = (userInput) => {
  
  const userInputToNum = Number(userInput);
  
  if (!isNaN(userInputToNum) && Math.sign(userInputToNum) === 1 && userInputToNum > 0 && userInputToNum < 10) {
    return userInputToNum;
  } else {
    process.stdout.write('Please enter a valid number.\n');
    return false;
  }
};

const setAlarm = (userInput) => {
  
  setTimeout(() => {
    process.stdout.write('\x07');
  }, userInput * 1000)

};

stdin.on('data', (key) => {

  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (validateUserInput(key)) {
    process.stdout.write(`Setting timer for ${key} seconds\n`);
    setAlarm(key);
  }

});
