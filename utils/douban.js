"use strict"

var url = 'https://douban.uieee.com/v2/movie';
var fetch = require('./fetch')

function fetchApi(type, params) {
  return fetch(URI, type, params);
}

function find(type) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  var search = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var params = { start: (page - 1) * count, count: count, city: getApp().data.currentCity };
  return fetchApi(type, search ? Object.assign(params, { q: search }) : params).then(function (res) {
    return res.data;
  });
}

function findOne(id) {
  return fetchApi('subject/' + id).then(function (res) {
    return res.data;
  });
}

module.exports = { find: find, findOne: findOne };