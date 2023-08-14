// FREE_WARNING = 'Free shipping only applies to single customer orders'
// BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
// NONE_SELECTED = '0'

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600 
// else shipping = 800

// shoes = 300 * 1
// toys - 100 * 5
// shirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED' 

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null

FREE_WARNING = 'Free shipping only applies to single customer orders';
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
NONE_SELECTED = 0;

let customers = 1;
const location = 'Brazil';
let currency = 'R';
let shipping = null;
let cost = 0;
let totalCost = 0;

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED; 

cost = shoes + toys + shirts + batteries + pens;

if (location === 'RSA'){
    shipping = 400;
    if (cost >= 1000 && customers === 1){
        shipping = 0;
    }
    else{
        console.log(FREE_WARNING);
    }
}
else if(location === 'namibia'){
    shipping = 600;
    if (cost >= 1000 && customers === 1){
        shipping = 0;
    }
    else{
        console.log(FREE_WARNING);
    }
}

else if(location === 'northKorea'){
    console.log(BANNED_WARNING);
}
else{
    shipping = 800;
}

totalCost = shipping + cost;

console.log('Price:',currency + totalCost );