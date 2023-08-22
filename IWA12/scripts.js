const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
/**
 * Style edits for Book 2 (THE GOOD BOOK) using the DOM manipulation
 * Here I used the STATUS_MAP Object to make the necessary changes such as
 * changing the color of buttons and disabling certain buttons that need to be disabled
 */
const book1 = document.querySelector('#book1');

const status0 = book1.querySelector('.status');
status0.style.color = STATUS_MAP.overdue.color;

const reserve0 = book1.querySelector('.reserve');
reserve0.disabled = !(STATUS_MAP.overdue.canReserve);

const checkout0 = book1.querySelector('.checkout');
checkout0.disabled = !(STATUS_MAP.overdue.canCheckout);

const checkin0 = book1.querySelector('.checkin');
checkin0.style.color = '';
checkin0.disabled = !(STATUS_MAP.overdue.canCheckIn);

/**
 * Style edits for Book 2 (THE BOOK OF BOOKS) using DOM manipulation
 * Here I used the STATUS_MAP Object to make the necessary changes such as
 * changing the color of buttons and disabling certain buttons that need to be disabled
 */
const book2 = document.querySelector('#book2');

const status2 = book2.querySelector('.status');
status2.style.color = STATUS_MAP.reserved.color;

const reserve2 = book2.querySelector('.reserve');
reserve2.disabled = !(STATUS_MAP.reserved.canReserve);

let checkout2 = book2.querySelector('.checkout');
checkout2.disabled = !(STATUS_MAP.reserved.canCheckout);

let checkin2 = book2.querySelector('.checkin');
checkin2.style.color = '';
checkin2.disabled = !(STATUS_MAP.reserved.canCheckIn);

/**
 * Style edits for Book 3 (ANOTHER BOOK) using DOM manipulation
 * Here I used the STATUS_MAP Object to make the necessary changes such as
 * changing the color of buttons and disabling certain buttons that need to be disabled
 */
const book3 = document.querySelector('#book3');

const status3 = book3.querySelector('.status');
status3.style.color = STATUS_MAP.shelf.color;

const reserve3 = book3.querySelector('.reserve');
reserve3.disabled = !(STATUS_MAP.shelf.canReserve);

const checkout3 = book3.querySelector('.checkout');
checkout3.disabled = !(STATUS_MAP.shelf.canCheckout);

const checkin3 = book3.querySelector('.checkin');
checkin3.style.color = '';
checkin3.disabled = !(STATUS_MAP.shelf.canCheckIn);


// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// const buttonElem = document.querySelectorAll('button');
// for (i =0; i< buttonElem.length; i++) {
//     buttonElem[i].style.color = '';
// }