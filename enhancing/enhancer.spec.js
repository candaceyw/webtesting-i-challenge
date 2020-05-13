const enhancer = require('./enhancer.js');
// test away!

const item = {
	name: 'candace',
	enhancement: 20,
	durability: 100,
};

describe('enhancer tests', () => {
	describe('the succeed() function', () => {
		it('object with name', function () {
			expect(enhancer.repair(item)).toHaveProperty('name');
		});

		//returns object with enhancement property

		//items enchanced increase by 1
	});

	describe('fail tests', () => {});

	describe('repair tests', () => {});

	describe('get tests', () => {});
});
