const mds =()=>{
    const fs = require('fs');
const path = require('path');
fs.readdir('./', (err, mdsFile) => {
if(err){
    console.log(err);
} else{
    console.log(mdsFile);
    mdsFile.forEach(element => {
    if(path.extname(element) === ".md"){
       fs.readFile(element, (err,data) =>
            {
                if(err)
                    console.log(err)
                else
                console.log(data.toString());
            });
    }  
    });
}
});}
module.exports = mds()

/*const prueba =()=>{
    const fs = require('fs');
    const path = require('path');
  
  
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