//const total = {}

const readof={}
const fs= require("fs");
const links=require("./links")

const read =()=>{

fs.readFile("./README.md", "utf8",function (err,data)  {
    if(err){

    }else{
        links.mdlinks(data)
    }
    //console.log(data.toString());
})
}
read()
module.exports.readof = readof

//total.read = read;
//module.exports = total;