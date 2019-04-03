const fs = require('fs');
const path = require('path');
const links=require("./links");

const mds =()=>{

    fs.readdir('./', (err,data) => {
    if(err){
        console.error('Error', err);
    } else{
        
        data.forEach(element => {
        if(path.extname(element) === ".md"){
        fs.readFile(element, "utf8", (err,data) =>
                {
                    if(err)
                    console.error('Error', err);

                    else
                    links.mdlinks(data)
                });
        }  
        });
    }
    });
}

module.exports = mds;

/*const prueba =()=>{
    const fs = require('fs');
    const path = require('path');
  //
  
  fs.readdir('./', (err, fileNames) => {
 const names= fileNames.forEach
(element => {
        if(path.extname(element) === ".md"){
            console.log(names);
        }else{
         console.log(err)
                    }
                        
                });
        } 
  
  )}
        
module.exports = prueba()  */