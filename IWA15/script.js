const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

/**
 * Extracting the lists from the object data using both object and arrays destruction
 * and assing the list to desireable variables
 */

const {
	lists: 
	[ [, first]]} = data || {};
const {lists: 
	[, 
	[, second]]} = data || {};
const {lists: 
	[, 
	 , 
	[,third]]} = data || {};

const result = [];

const extractBiggest = () => {
	firstLast = first[first.length -1];
	secondLast = second[second.length -1];
	thirdLast = third[third.length -1];

	if (firstLast > secondLast) {
		return first.pop();
	}
	if (secondLast > thirdLast){
		return second.pop();
    }
	else{
		return third.pop();
	}
}
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

//const first = data.lists[0][1];
//const second = data.lists[1][1];
//const third = data.lists[2][1];
// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

// const result = []

// const extractBiggest = () => {
// 	if (first[-1] > second[-1]) {
// 		return first
// 	}

// 	if (third[-1] < 1) {
// 		return second
// 	}
	
// 	return third
// }