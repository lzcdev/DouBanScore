var baseUrl = "https://m.douban.com";

var requestHandler = {
  url: '',
  params: {},
  success: function(res) {
    console.log('success:', res)
  },
  fail: function(err) {
    console.log('err:', err)
  }
}

function get(requestHandler) {
  request('GET', requestHandler)
}

function post(requestHandler) {
  request('POST', requestHandler)
}

function request(method, requestHandler) {
  var params = requestHandler.params
  var url = requestHandler.url

  wx.request({
    url: baseUrl + '/' + url,
    data: params,
    method: method,
    success: function(res) {
      requestHandler.success(res)
    },
    fail: function(err) {
      requestHandler.fail(err)
    }
  })
}

module.exports = {
  get: get,
  post: post
}  