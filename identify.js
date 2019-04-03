const identify =()=>{
   
    const fs = require('fs');

  
    const readDir = fs.readdir('./', (err, fileNames) => {
    if(err){
        console.log(err);
    } else{
        console.log(fileNames);
        
    }
    }); return readDir

}
    
module.exports = identify()   