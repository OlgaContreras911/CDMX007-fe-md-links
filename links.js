const fetchFiles = require('./fetch.js')
const mdlinks =(data)=>{
   
            const urlLinks = /(https?:\/\/[^\)\s ]+)/g;      
            const match = data.match(urlLinks)
            //console.log('match', match)
            fetchFiles.fetchData(match)
        };
const mdlinksB =(data)=>{
   
            const urlLinks = /(https?:\/\/[^\)\s ]+)/g;      
            const match = data.match(urlLinks)
            console.log('match', match)
            
        }; 
const mdlinksC =(data)  =>{
   
    const urlLinks = /(https?:\/\/[^\)\s ]+)/g;      
    const match = data.match(urlLinks)
    //console.log('match', match)
    fetchFiles.fetchDataB(match)
};

    
module.exports.mdlinks = mdlinks;  
module.exports.mdlinksB = mdlinksB;
module.exports.mdlinksC = mdlinksC;