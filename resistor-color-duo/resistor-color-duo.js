//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { colorCode } from './resistor-color'

export const decodedValue = ([color1, color2]) => {
  const code1 = colorCode(color1)
  const code2 = colorCode(color2)
  return code1*10 + code2
}
// export const decodedValue = (colors) => {
//   let resistorIndexString = ''
//   for (let index = 0; index < 2; index++) {
//     resistorIndexString += `${COLORS.indexOf(colors[index])}`
//   }
//   return parseInt(resistorIndexString)
// };

// export const COLORS = [
//   'black',
//   'brown',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'violet',
//   'grey',
//   'white',
// ]
