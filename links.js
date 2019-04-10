const fetchFiles = require('./fetch.js')

const mdlinks = (data) => {
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

const mdlinksB = (data) => {
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
const mdlinksC = (data) => {
    const completeURL=/\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
    let matchOne=data.match(completeURL)
    if(matchOne){
        matchOne =  JSON.stringify(matchOne)
        const urlLinks = /(https?:\/\/[^\)\s ]+)/g;
        const matchFinal = matchOne.match(urlLinks)
        //console.log(matchFinal)
    //console.log('match', match);
    console.log('Links por archivo:', matchFinal.length)
    const uniqueLinks = matchFinal.filter(function(element, index, arr){
        return arr.indexOf(element)===index;
        
        })
        console.log( 'Únicos:',`${uniqueLinks.length}`)
        fetchFiles.fetchDataB(matchFinal)
  }
  
    
    
};

module.exports.mdlinks = mdlinks;
module.exports.mdlinksB = mdlinksB;
module.exports.mdlinksC = mdlinksC;