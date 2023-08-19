// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending

 //const order1 = document.querySelector('[data-key = "order1"]');
//  const biscuits1 = order1.dataset.biscuits;
//  const donuts1 = order1.dataset.donuts;
//  const pancakes1 = order1.dataset.pancakes;
//  const status1 = order1.dataset.delivered;

//  const order2 = document.querySelector('[data-key = "order2"]');
//  const biscuits2 = order2.dataset.biscuits;
//  const donuts2 = order2.dataset.donuts;
//  const pancakes2 = order2.dataset.pancakes;
//  const status2 = order2.dataset.delivered;

//  const order3 = document.querySelector('[data-key = "order3"]');
//  const biscuits3 = order3.dataset.biscuits;
//  const donuts3 = order3.dataset.donuts;
//  const pancakes3 = order3.dataset.pancakes;
//  const status3 = order3.dataset.delivered;

 //const x = order1.querySelector('.donuts');
 //x.querySelector('dd').innerText = biscuits1;
 
// order1.querySelector("dd").innerHTML = biscuits1;
// order2.querySelector('dd').innerHTML = biscuits2;

// Changing HTML for order1 using the DOM

const order1 = document.querySelector('[data-key = "order1"]');

const biscuits1 = order1.querySelector('.biscuits');
biscuits1.querySelector('dd').innerHTML = order1.dataset.biscuits;

const donuts1 = order1.querySelector('.donuts');
donuts1.querySelector('dd').innerHTML = order1.dataset.donuts;

const pancakes1 = order1.querySelector('.pancakes');
pancakes1.querySelector('dd').innerHTML = order1.dataset.pancakes;

const status1 = order1.querySelector('.status');
status1.querySelector('dd').innerHTML = order1.dataset.delivered;

 //Changing HTML for order 2 using the DOM
const order2 = document.querySelector('[data-key = "order2"]');

const biscuits2 = order2.querySelector('.biscuits');
biscuits2.querySelector('dd').innerHTML = order2.dataset.biscuits;

const donuts2 = order2.querySelector('.donuts');
donuts2.querySelector('dd').innerHTML = order2.dataset.donuts;

const pancakes2 = order2.querySelector('.pancakes');
pancakes2.querySelector('dd').innerHTML = order1.dataset.pancakes;

const status2 = order2.querySelector('.status');
status2.querySelector('dd').innerHTML = order2.dataset.delivered;

//Changing HTML for order 3 using the DOM
const order3 = document.querySelector('[data-key = "order3"]');

const biscuits3 = order3.querySelector('.biscuits');
biscuits3.querySelector('dd').innerHTML = order3.dataset.biscuits;

const donuts3 = order3.querySelector('.donuts');
donuts3.querySelector('dd').innerHTML = order3.dataset.donuts;

const pancakes3 = order3.querySelector('.pancakes');
pancakes3.querySelector('dd').innerHTML = order3.dataset.pancakes;

const status3 = order3.querySelector('.status');
status3.querySelector('dd').innerHTML = order3.dataset.delivered;