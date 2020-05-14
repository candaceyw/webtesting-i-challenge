const enhancer = require('./enhancer.js');

describe('enhancer tests', () => {
  let item1, itemm2, item3, item4;

  beforeEach(() => {
    item1 = {
      name: 'wooden sword',
      enhancement: 1,
      durability: 5,
    };
    item2 = {
      name: 'pistol',
      enhancement: 10,
      durability: 50,
    };
    item3 = {
      name: 'helmet',
      enhancement: 12,
      durability: 30,
    };
    item4 = {
      name: 'armour',
      enhancement: 20,
      durability: 100,
    };
  });

  // REPAIR TESTS

  it('enhancer', () => {
    // const newItem = enhancer.get(item1);
    expect(item1).toEqual(item1);
    //  accepts an item
    expect(item1.name).toBe('wooden sword');

    // //returns object with property
    expect(enhancer.repair(item1)).toHaveProperty('name');
    expect(enhancer.repair(item1)).toHaveProperty('enhancement');
    expect(enhancer.repair(item1)).toHaveProperty('durability');

    // return a new item with durability restored to 100
    expect(enhancer.repair(item1).durability).toEqual(100);
  });

  // SUCCEED TESTS
  // accepts and item
  it('accepts a new item', function () {
    const repairedItem = enhancer.succeed(item3);
    expect(repairedItem).not.toBe(item3);
  });

  // return a new item with durability tests
  it('does not change durability', function () {
    let dur = item1.durability;
    expect(enhancer.succeed(item1).durability).toBeLessThanOrEqual(dur);
  });

  //   items enchanced increase by 1
  it('enhancement increases by 1', () => {
    const newItem = enhancer.get(item1);
    const enhancedItem = enhancer.succeed(newItem);
    const originalEnhancement = newItem.enhancement;

    if (newItem.enhancement === 20) {
      expect(enhancedItem.enhancement).toEqual(originalEnhancement);
    } else {
      expect(enhancedItem.enhancement).toEqual(originalEnhancement + 1);
    }
  });

  // FAIL TESTS
  // //returns object with property
  it('returns an obj with a name property', function () {
    expect(enhancer.repair(item2)).toHaveProperty('name');
  });

  // return a new item
  it('returns a new item', function () {
    const repairedItem = enhancer.fail(item3);
    expect(repairedItem).not.toBe(item3);
  });

  // decreases durability and enhancements
  it('decreases ', () => {
    if (item4.enhancement < 15) {
      expect(enhancer.fail(item4).durability).toEqual(item4.durability - 5);
    } else if (item4.enhancement >= 15 && item4.enhancement < 17) {
      expect(enhancer.fail(item4).durability).toEqual(item4.durability - 10);
    } else {
      expect(enhancer.fail(item4).durability).toEqual(item4.durability - 1);
    }
  });

  //STRETCH
  it('returns object when get(item) is called', () => {
    const newItem = enhancer.get(item1);
    expect(newItem).toEqual(item1);

    const newItem2 = enhancer.get(item2);
    expect(newItem2).toEqual(item2);
    delete newItem.durability;

    //returns new item with property name and enhancement level
    expect(newItem2.name).toBe('[+10] pistol');
  });
});
