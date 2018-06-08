var dappAddress = "5cea41ec261609a920f7f49be5304985a7dcc40a950dc9157dd86e364878fd2f";
var NebPay = require("nebpay");
var nebPay = new NebPay();




$(function () {
    $('.get').on('click',function (data) {
        console.log(1)
        nebPay.simulateCall(dappAddress, "0", "get", JSON.stringify(['qweqe']), {
            listener: function(res) {
                console.log(res)
            }
        });
    })
    $('.set').on('click',function (data) {
        "use strict";
        console.log(2)
        nebPay.call(dappAddress, "0.001", "set", JSON.stringify(['eqee']), {
            listener: function(res){
                if (res.txhash) {
                    console.log('qweqe',res)
                }
            }
        });
    })
})