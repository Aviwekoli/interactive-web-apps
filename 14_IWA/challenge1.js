const firstName = 'John';
const age = 35;
const hobby1 = 'Coding';

 const logTwice = (parameter = null) => {
   console.log(parameter)
   console.log(parameter)
 }

function hobby() {
  return (`Hello, ${firstName} (${age}). I love ${hobby1}!`);
}

logTwice(hobby());