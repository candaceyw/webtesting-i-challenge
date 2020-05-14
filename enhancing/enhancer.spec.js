const enhancer = require('./enhancer.js');
// test away!

const item = {
	name: 'candace',
	enhancement: 19,
	durability: 100,
};

describe('enhancer tests', () => {
    let item1, itemm2, item3, item4
	beforeEach(() => {
        item1 =  {
            name: 'wooden sword',
            enhancement: 1,
            durability: 5,
        };
        item2 =  {
            name: 'pistol',
            enhancement: 10,
            durability: 50,
        };
        item3 =  {
            name: 'helmet',
            enhancement: 12,
            durability: 30,
        };
        item4 =  {
            name: 'armour',
            enhancement: 20,
            durability: 100,
        };
    })
		it('object with name', function () {
			expect(enhancer.repair(item)).toHaveProperty('name');
		});

		//returns object with enhancement property

		//items enchanced increase by 1
		it('increase by 1', function () {
			const enhancedItem = enhancer.succeed(item);
			const originalEnhancement = item.enhancement;

			if (item.enhancement === 20) {
				expect(enhancedItem.enhancement).toEqual(originalEnhancement);
			} else {
				expect(enhancedItem.enhancement).toEqual(originalEnhancement + 1);
			}
		});

		it('increases by 1', () => {
			expect(enhancer.succeed(item).toEqual(20));
		});
	});

	describe('fail tests', () => {});

	describe('repair tests', () => {});

	describe('get tests', () => {});
});
