
const getUserInput = () => {
  return process.argv.splice(2);
};


const validateUserInputs = (userInput) => {
  
  let validInputs = [];
  
  for (const input of userInput) {

    const userInputToNum = Number(input)

    if (!isNaN(userInputToNum) && Math.sign(userInputToNum) === 1 && Number.isInteger(userInputToNum) && userInputToNum > 0) {
      validInputs.push(userInputToNum);
    }
  }
  
  return validInputs;
};

const setAlarm = (userInput) => {
  
  if (!userInput.length) {
    return null;
  } else {
    for (const input of userInput) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, input * 1000)
    }
  }
};

setAlarm(validateUserInputs(getUserInput()));
