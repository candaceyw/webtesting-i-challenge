module.exports = {
	succeed,
	fail,
	repair,
	get,
};

// method that accepts an item object and returns a
// new item object modified according to the rules
// defined by the client for enhancement success.
function succeed(item) {
	if (item.enhancement === 20) {
		return { ...item };
	} else {
		return { ...item, enhancement: item.enhancement + 1 };
	}
}

/**
   * If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
   */
function fail(item) {
	if (item.enhancement < 15) {
		return { ...item, durability: item.durability - 5 };
	} else if (item.enhancement >= 15 && item.enhancement < 17) {
		return { ...item, durability: item.durability - 10 };
	} else {
		return { ...item, durability: item.durability - 1 };
	}
}

function repair(item) {
	return { ...item, durability: 100 };
}

// method for use when working on the stretch problem.
// method to the enhancer object that takes an item and returns
// a new item with the name property modified according to the following rules:

// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0, change the name to include the
//  enhancement level, preceded by a plus sign ( + ), between square brackets
//   before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would
//   be "[+7] Iron Sword".
function get(item) {
	return { ...item };
}
