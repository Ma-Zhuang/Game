/**
 * Created by litengfei on 2017/9/15.
 */
var path = require("path");
var fs = require("fs");
var BigArray = require('mmap-kit').BigArray;
var UnitTools = require("./../core/UnitTools.js");
class IDs{
    /**
     * 从配置文件中获取ID信息，如果文件存在，就读取，如果文件不存在，则生成文件
     * @param config
     */
    readOrCreateFile(filePath,from,to){
        var fileName = path.basename(filePath);
        var dirName = path.dirname(filePath);
        var hasData = false;
        try {
            var files = fs.readdirSync(filePath);
            if (files.length != 0) hasData = true;
        }
        catch (e){
            hasData = false;
        }


        var bigArray = this.bigArray = new BigArray(dirName,fileName);
        if(hasData == true)return;

        var numArray = [];
        for(var i = from;i<=to;i++){

            numArray.push(i);
        }
        UnitTools.washArray(numArray);
        console.log(numArray);
        for(var key in numArray){
            bigArray.append(Buffer.from(numArray[key].toString()));

        }
        bigArray.flush();


    }

    /**
     * 从文件中读取一个ID并删除
     */
    getAndDeleteOneID(){
        return  Buffer.from(this.bigArray.shift()).toString();
    }
}

module.exports = IDs;


// var ids = new IDs();
// ids.readOrCreateFile(__dirname+"/../data/30000000-39999999.txt",30000000,39999999);

// for(var i = 1000;i<10001;i++){
//     var id = ids.getAndDeleteOneID();
//     console.log(id);
// }
