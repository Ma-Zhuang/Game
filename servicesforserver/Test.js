/**
 * Created by litengfei on 2017/12/10.
 */

/**
 * Created by litengfei on 2017/1/8.
 */
var app = require("./../core/app.js").instance;

module.exports = function () {
    var onStart = function (serverID, serviceType, serverIP, serverPort, custom) {

    }

    var onClientIn = function (session) {

    }

    var onClientOut = function (session) {
    }

    var service = {};


    var  a = 0;
    a.hah();
    service.hello = function (text,cb) {
        console.log("接收到客户端的消息了:"+text);
        cb({mes:"客户端你好，我已经接受到你的消息了"})
    }


    return {
        service: service, onClientIn: onClientIn, onClientOut: onClientOut, onStart: onStart
    };
}