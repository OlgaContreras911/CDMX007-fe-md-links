const directory =()=>{
   
    const fs= require("fs");
    
    fs.readFile("./README.md", function (err,data)  {
        if(err){
    
        }
        console.log(data.toString());
    })
}
    
module.exports = directory()   