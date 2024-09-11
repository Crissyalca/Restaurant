function divide(string, symbol) {
  let firstPart = "";
  let lastPart = "";
  let symbolFound = string.indexOf(symbol);

  if (symbolFound > -1) {
    for (let i = 0; i < symbolFound; i++) {
      firstPart = firstPart + string[i];
    }
    for (let i = symbolFound + 1; i < string.length; i++) {
      lastPart = lastPart + string[i];
    }
    if (lastPart.indexOf(symbol) === -1) {
      return { firstPart, lastPart };
    }
  }

  return false;
}

export function validationEmail(string) {
  let wordDivided = divide(string, "@");
  if (wordDivided && !divide(string, " ")) {
    let firstPart = wordDivided.firstPart;
    let lastPart = wordDivided.lastPart;
    if (firstPart.length >= 3 && lastPart.length >= 6) {
      let lastPartDivided = divide(lastPart, ".");
      if (lastPartDivided) {
        let prePoint = lastPartDivided.firstPart;
        let postPoint = lastPartDivided.lastPart;
        let prePointIsValid = prePoint.length >= 3;
        let postPointIsValid = postPoint.length >= 2;
        return prePointIsValid && postPointIsValid;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
