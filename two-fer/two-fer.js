//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
  give the variable a default value instead of having a conditional. 
  The default value will act as name's value if it doesn't receive another value. 
  To do this, you can type name = 'you' in the parameter of the function.
*/
export const twoFer = (name = 'you') => {
  return `One for ${name}, one for me.`
};
