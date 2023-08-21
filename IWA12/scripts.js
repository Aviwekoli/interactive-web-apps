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


// Style edits for Book 1 (THE GOOD BOOK) =====>>>>>> overdue
const book1 = document.querySelector('#book1');

let status0 = book1.querySelector('.status');
status0.style.color = STATUS_MAP.overdue.color;

let reserve0 = book1.querySelector('.reserve');
reserve0 = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled';

let checkout0 = book1.querySelector('.checkout');
checkout0 = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled';

let checkin0 = book1.querySelector('.checkin');
checkin0.style.color = 'black';
checkin0 = STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled';

// Style edits for Book 2 (THE BOOK OF BOOKS) ====>>>>>> reserved
const book2 = document.querySelector('#book2');

let status2 = book2.querySelector('.status');
status2.style.color = STATUS_MAP.reserved.color;

let reserve2 = book2.querySelector('.reserve');
reserve2 = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled';

let checkout2 = book2.querySelector('.checkout');
checkout2 = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled';

let checkin2 = book2.querySelector('.checkin');
checkin2.style.color = 'black';
checkin2 = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled';

// Style edits for Book 3 (ANOTHER BOOK) ====>>>>>> shelf
const book3 = document.querySelector('#book3');

let status3 = book3.querySelector('.status');
status3.style.color = STATUS_MAP.shelf.color;

let reserve3 = book3.querySelector('.reserve');
reserve3 = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled';

let checkout3 = book3.querySelector('.checkout');
checkout3 = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled';

let checkin3 = book3.querySelector('.checkin');
checkin3.style.color = 'black';
checkin3 = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled';