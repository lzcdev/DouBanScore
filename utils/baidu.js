'use strict'

var url = 'https://api.map.baidu.com';
var fetch = require('./fetch');

function fetchApi(type, params) {
  return fetch(url, type, params)
}

function getCityName() {
  var latitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 39.90403;
  var longitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 116.407526;

  var params = {
    location: latitude + ',' + longitude,
    output: 'json',
    ak: 'B61195334f65b9e4d02ae75d24fa2c53'
  }
  return fetchApi('geocoder/v2/', params).then(function (res) {
    return res.data.result.addressComponent.city
  })
}

module.export = {getCityName: getCityName};
