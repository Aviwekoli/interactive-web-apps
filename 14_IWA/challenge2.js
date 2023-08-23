function add (){
	return this.internal.a + this.internal.b;
  }
  
  function multiply () {
	return this.add() * this.internal.c;
  }
  
  function internal () {
	this.product = this.multiply();
	return this.product;
  }

// Not allowed to change below this
const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

console.log(example1.calculate());
console.log(example2.calculate());