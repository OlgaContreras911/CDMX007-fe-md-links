const identify =()=>{
   
    const fs= require("fs");
    
    fs.readFile("./README.md", "utf8", function (err,data)  {
        if(err){
    
        }else{
            const urlLinks = /(https?:\/\/[^\s]+)/g;
            const match = data.match(urlLinks)
            console.log(match)
        }
    })
}
    
module.exports = identify()   