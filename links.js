const mdlinks =(data)=>{
   
            const urlLinks = /(https?:\/\/[^\s]+)/g;      
            const match = data.match(urlLinks)
            console.log('match', match)
        };
    

    
module.exports.mdlinks = mdlinks;  