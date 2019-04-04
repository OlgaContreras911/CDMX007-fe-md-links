const fetchFiles = require('./fetch.js')
const mdlinks =(data)=>{
   
            const urlLinks = /(https?:\/\/[^\)\s ]+)/g;      
            const match = data.match(urlLinks)
            //console.log('match', match)
            fetchFiles.fetchData(match)
        };
    

    
module.exports.mdlinks = mdlinks;  