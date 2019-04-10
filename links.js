const fetchFiles = require('./fetch.js')

const mdlinksValidate = (data) => {
    const completeURL=/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    let matchOne=data.match(completeURL)
    if(matchOne){
        matchOne =  JSON.stringify(matchOne)
        const urlLinks = /(https?:\/\/[^\)\s ]+)/g;
        const matchFinal = matchOne.match(urlLinks)
        //console.log(matchFinal)
    //console.log('match', match);
     fetchFiles.fetchData(matchFinal)
  }
    
};

const mdlinksJust = (data) => {
    const completeURL=/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    let matchOne=data.match(completeURL)
    if(matchOne){
    matchOne =  JSON.stringify(matchOne)
    const urlLinks =/(https?:\/\/[^\)\s ]+)/g;
    const matchFinal = matchOne.match(urlLinks)
    console.log('match', matchFinal)
    //console.log(`${data}`+`${match}`)
    }
};
const mdlinksStats = (data) => {
    const completeURL=/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    let matchOne=data.match(completeURL)
    if(matchOne){
        matchOne =  JSON.stringify(matchOne)
        const urlLinks = /(https?:\/\/[^\)\s ]+)/g;
        const matchFinal = matchOne.match(urlLinks)
        //console.log(matchFinal)
    //console.log('match', match);
    console.log('Links por archivo:', matchFinal.length)
    const uniqueLinks = new Set(matchFinal)
        console.log( 'Únicos:',`${[...uniqueLinks].length}`)
       // fetchFiles.fetchData(matchFinal)
  }
  
    
    
};

const mdlinksComplete = (data) => {
    const completeURL=/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    let matchOne=data.match(completeURL)
    if(matchOne){
        matchOne =  JSON.stringify(matchOne)
        const urlLinks = /(https?:\/\/[^\)\s ]+)/g;
        const matchFinal = matchOne.match(urlLinks)
        //console.log(matchFinal)
    //console.log('match', match);
    console.log('Links per file:',`${matchFinal.length}`)
    const uniqueLinks = matchFinal.filter(function(element, index, arr){
        return arr.indexOf(element)===index;
        
        })
        console.log( 'Unique:',`${uniqueLinks.length}`)
        fetchFiles.fetchDataCount(matchFinal)
  }
  
    
    
};

module.exports.mdlinksValidate = mdlinksValidate;
module.exports.mdlinksJust = mdlinksJust;
module.exports.mdlinksStats = mdlinksStats;
module.exports.mdlinksComplete = mdlinksComplete;