var dappAddress = "n1w1VwdkHvuUorpmTifsHmH8VJBnXaNmtra";
var NebPay = require("nebpay");
var nebPay = new NebPay();




$('.get').on('click',function (data) {
    nebPay.simulateCall(dappAddress, "0", "get", JSON.stringify([]), {
        listener: function(res) {
            console.log(res)
        }
    });
})
$('.set').on('click',function (data) {
    "use strict";
    nebPay.call(dappAddress, "0", "set", JSON.stringify([]), {
        listener: function(res){
            if (res.txhash) {
            }
        }
    });
})