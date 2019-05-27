/**
 * Remove all falsy values from an array. Caveat, this will also remove 0 since it returns false
 *
 * @param {array} items list of elements
 */
const removeFalsy = items => items.filter(item => !!item);

export default removeFalsy;
