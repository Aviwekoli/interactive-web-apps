const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

// console.log(holidays.futureId.name || 'ID {futureId} not created yet')

// copied = holidays.christmas
// copied = { name: 'X-mas Day' }
// correctDate = copied.date
// correctDate.hours = 0
// correctDate.minutes = 0
// isEarlier = copied.date < holidays[6].date
// console.log('New date is earlier:', isEarlier)
// if (isEarlier) copied.date = correctDate
// console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
// console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
// console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

// const firstHolidayTimestamp = Math.min(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const lastHolidayTimestamp = Math.max(
//     holidays[0].date.getTime,
//     holidays[1].date.getTime,
//     holidays[2].date.getTime,
//     holidays[3].date.getTime,
//     holidays[4].date.getTime,
//     holidays[5].date.getTime,
//     holidays[6].date.getTime,
//     holidays[7].date.getTime,
//     holidays[8].date.getTime,
// )

// const firstDay = firstHolidayTimestamp.getDate
// const firstMonth = firstHolidayTimestamp.getMonth
// const lastDay = lastHolidayTimestamp.getDate
// const lastMonth = lastHolidayTimestamp.getMonth

// console.log('{firstDay}/{firstMonth}/{currentYear}')
// console.log('{lastDay}/{lastMonth}/{currentYear}')

// const randomHoliday = holidays[Math.random];
// console.log(randomHoliday.date)



console.log(holidays['futureId']|| `ID ${futureId} not created yet`);

/**
 * Creating a deep copy (clone) of the holidays object and setting it's time to 00:00
 */

const copied = Object.assign({}, holidays[6]);

const correctDate = new Date(holidays[6].date);
correctDate.setHours(0);
correctDate.setMinutes(0);

/**
 * Checking if the copied date is earlier and apply the changes to copied
 */
const isEarlier = correctDate.getHours() < holidays[6].date.getHours() && correctDate.getMinutes() < holidays[6].date.getMinutes();
console.log('New date is earlier:', isEarlier);
if (isEarlier){
    copied.name = 'X-mas';
    copied.date = correctDate;
    console.log('ID change:', holidays[christmas].id !== copied.id && copied.id);
    console.log('Name change:', holidays[christmas].name !== copied.name && copied.name);
    console.log('Date change:', holidays[christmas].date !== copied.date && copied.date.toLocaleDateString());
}

holidays[futureId] = copied;

holidays[0].date = new Date(holidays[0].date);


const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);


const firstDay = (new Date(firstHolidayTimestamp)).getDate();
const firstMonth = 1 + ((new Date(firstHolidayTimestamp)).getMonth());
const lastDay = (new Date(lastHolidayTimestamp)).getDate();
const lastMonth = 1 + ((new Date(lastHolidayTimestamp)).getMonth());

console.log(`${firstDay.toString().padStart(2,"0")}/${firstMonth.toString().padStart(2, "0")}/${currentYear}`);

console.log(`${lastDay.toString().padStart(2,"0")}/${lastMonth.toString().padStart(2, "0")}/${currentYear}`)


const randomHoliday = holidays[Math.floor((Math.random()*10))];

const randomDay = randomHoliday.date.getDate();
const randomMonth = 1 + randomHoliday.date.getMonth();

console.log(`${randomDay.toString().padStart(2,"0")}/${randomMonth.toString().padStart(2, "0")}/${currentYear}`);