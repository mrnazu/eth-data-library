// src/common/utils.js

const _ = require('lodash');

function filterByProperty(data, property, value) {
  return _.filter(data, (item) => item[property] === value);
}

function sortByProperty(data, property, order = 'asc') {
  return _.orderBy(data, [property], [order]);
}


function transformData(data, transformationFn) {
  return data.map((item) => transformationFn(item));
}

module.exports = {
  filterByProperty,
  sortByProperty,
  transformData,
};
