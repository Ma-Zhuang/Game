/**
 * Created by litengfei on 2017/9/15.
 */

/**
 * Created by litengfei on 2017/1/8.
 */
var app = require("./../core/app.js").instance;
var IDs = require("./../model/IDs.js");
module.exports = function () {
    var onStart = function (serverID, serviceType, serverIP, serverPort, custom) {

    }

    var onClientIn = function (session) {

    }

    var onClientOut = function (session) {
    }

    //初始化 IDS
    var idsConfig = app.appConfig["ids"];
    var ids = new IDs();
    ids.readOrCreateFile(__dirname+"/../"+idsConfig.path,ids.from,ids.to);

    var service = {};

    service.getRandomID = function (cb) {
        var id = ids.getAndDeleteOneID();
        cb({ok:true,info:id});
    }
    return {
        service: service, onClientIn: onClientIn, onClientOut: onClientOut, onStart: onStart
    };
}