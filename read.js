//const total = {}

const read =()=>{
const fs= require("fs");

fs.readFile("./README.md", "utf8",function (err,data)  {
    if(err){

    }else{
        console.log(data)
    }
    //console.log(data.toString());
})
}
module.exports = read()

//total.read = read;
//module.exports = total;