/**
 * Module dependencies.
 */

ApiClient = require("../index.js").ApiClient;

var client = new ApiClient({
  appkey: "32593463",
  appsecret: "bbbbbf158fd21857755700128783fc34",
  url: "http://gw.api.taobao.com/router/rest",
});

client.executeWithHeader(
  "alipay.user.trade.search",
  {
    page_no: 1,
    page_size: 100,
    start_time: "2017-03-21 00:00:00",
    end_time: "2017-03-23 23:59:59",
    session:
      "70000100f25719047abee9303ca8ee5d2e84f19cdd4edfb48d5e917a3e9a4aca99aaf042153472040",
  },
  {},
  function (error, response) {
    if (!error) console.log(response);
    else console.log(error);
  }
);
