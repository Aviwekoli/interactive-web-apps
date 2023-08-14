const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

// Converting the balance strings to float numbers to 2 decimal places
const leoBalanceValue = (-1 * parseFloat(leoBalance)).toFixed(2);
const sarahBalanceValue = (-1 * parseFloat(sarahBalance)).toFixed(2);

// Owed balance calculation
const owed = (parseFloat(leoBalanceValue) + parseFloat(sarahBalanceValue)).toFixed(2);

// leo, sarah and total output format
const leo = `${leoName.split(" ").join("")} ${leoSurname.split(" ").join("")} (Owed: R ${leoBalanceValue})`;
const sarah = `${sarahName.split(" ").join("")} ${sarahSurname} (Owed: R ${sarahBalanceValue})`;
const total = `Total amount owed: R ${owed.slice(0, 2)} ${owed.slice(2)}`;

const result = `\n ${leo} \n ${sarah} \n \n ${divider } \n   ${total} \n ${divider} \n`;

console.log(result); 