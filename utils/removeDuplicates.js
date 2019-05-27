/**
 * Removes duplicate items within a flattened array
 *
 * @param {array} items list of items
 */
const removeDuplicates = items => [...new Set(items)];

export default removeDuplicates;
