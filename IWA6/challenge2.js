const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let balance = 0;
if (minuteOfDay === 0 && hourOfDay === 0){
	const taxAsDecimal = parseInt(tax) / 100;
	const salaryAfterTax = salary * (1 - taxAsDecimal);
	balance = salaryAfterTax - rent - food - transport;
}
else{
	console.log('Balance cannot be calculated at this time');
}

console.log(`'R${balance.toFixed(2)}`);