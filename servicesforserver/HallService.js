/**
 * Created by litengfei on 2017/9/13.
 */
/**
 * Created by litengfei on 2017/4/10.
 */

/**
 * Created by litengfei on 2017/1/8.
 * 门的主要作用是路由客户端的请求，一般用来做一些实时性不大的请求,比如登录，大厅操作等，比如游戏服务器的话，需要很强的顺序性的话，所以，需要再次联系游戏服务器
 */
var app = require("./../core/app.js").instance;
var UnitTools = require("./../core/UnitTools.js");

module.exports = function () {

    var onStart = function (serverID, serviceType, serverIP, serverPort, custom) {

    }

    var onClientIn = function (session) {

    }

    var onClientOut = function (session) {

    }

    var service = {};


    /**
     * 客户端调用微信登录
     * @param argJson uuid 微信uuid openid 微信openid
     * @param cb -1 表示需要重新认证
     */
    service.weixinLogin = async function (argJson,cb) {
        //调用LoginService的微信登录接口
        var service = app.getRandomService("LoginService");
        var info = await service.runProxy["weixinLogin"](argJson);
        if(info.ok){//登录成功了

        }
        cb(info);
    }

    /**
     * 账号密码登录
     * @param argJson account pass
     * @param cb code -1 表示需要重新登录
     */
    service.normalLogin = function (argJson,cb) {

    }

    /**
     * 注册游戏名字
     * @param argJson name 玩家的名字
     * @param cb
     */
    service.registerName = function (argJson,cb) {

    }




    return {
        service: service, onClientIn: onClientIn, onClientOut: onClientOut, onStart: onStart
    };
}