//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (words) => {
  // Solution 1) 
  // return words.split("").reverse().join("")
  
  // Solution 2) 
  let chars = words.split('')
  for (let count = words.length -1; count > 0 ; count--) {
    for (let position = 0; position < count; position++) {
      let [first, second] = [chars[position], chars[position+1]]
      chars[position+1] = first
      chars[position] = second
    }
  }
  return chars.join('')
};
