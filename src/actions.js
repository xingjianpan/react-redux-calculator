// actions

export const clearKeyPressed = () => {
  return {
    type: 'AC',
  };
};


export const inputDigit = (digit) => {
  return {
    type: 'NUMERIC_KEY',
    payload: digit,
  };
};

export const inputDot = () => {
  return {
    type: 'DOT',
  };
};

export const toggleSign = () => {
  return {
    type: 'TOGGLE_SIGN',
  };
};

export const inputPercentage = () => {
  return {
    type: 'PERCENTAGE',
  };
};

