const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

/**
 * Firstly forced the tax string to be an interger(Number) which is 12, so removed the % from the string
 * and divide the value by 100 to get 0.12 as a decimal to make the calculations easy
 */

const taxAsDecimal = parseInt(tax[913])/100;
/**
 * Calculate salary value after deductions by using the decimal value calculated above
 * subtract taxAsDecimal from 1 and then multiply that by the original salary value to get amount after tax
 */
const startingAfterTax = salary * (1 - taxAsDecimal);

/**
 * create the property type key by combining the size and lodging variable using interpolation
 */
const type = `${size}-${lodging}`;

/**
 * Remaining balance after tax and all expenses
 */
const balance = (startingAfterTax - expenses.food - expenses.transport - rent[type]).toFixed(2);

console.log(balance);