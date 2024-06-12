const _ = require('lodash');

/*
 * Filters an array of objects based on a specific property and value.
 *
 * @param {Array} data The array of objects to filter.
 * @param {string} property The property to filter by.
 * @param {*} value The value to filter for.
 * @returns {Array} The filtered array of objects.
 */
function filterByProperty(data, property, value) {
  return _.filter(data, (item) => item[property] === value);
}

/*
 * Sorts an array of objects based on a specific property in ascending or descending order.
 *
 * @param {Array} data The array of objects to sort.
 * @param {string} property The property to sort by.
 * @param {string} order The order to sort by, either 'asc' or 'desc'. Defaults to 'asc'.
 * @returns {Array} The sorted array of objects.
 */
function sortByProperty(data, property, order = 'asc') {
  return _.orderBy(data, [property], [order]);
}

/*
 * Transforms an array of objects by applying a transformation function to each object.
 *
 * @param {Array} data The array of objects to transform.
 * @param {Function} transformationFn The transformation function to apply to each object.
 * @returns {Array} The transformed array of objects.
 */
function transformData(data, transformationFn) {
  return data.map((item) => transformationFn(item));
}

module.exports = {
  filterByProperty,
  sortByProperty,
  transformData,
};
