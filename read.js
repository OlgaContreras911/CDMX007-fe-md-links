//const total = {}

const read =()=>{
const fs= require("fs");

fs.readFile("./README.md", function (err,data)  {
    if(err){

    }
    console.log(data.toString());
})
}
module.exports = read()

//total.read = read;
//module.exports = total;