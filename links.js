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

    const urlLinks = /[^\!]\[(.*?)\]\s?\((.*?)\)/g;
    const match = data.match(urlLinks)
    console.log('match', match)
    //console.log(`${data}`+`${match}`)

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
    const uniqueLinks = matchFinal.filter(function(item, index, array){
        return array.indexOf(item)===index;
        
        })
        console.log( 'Únicos:',`${uniqueLinks.length}`)
    
  }
    
    
};

module.exports.mdlinks = mdlinks;
module.exports.mdlinksB = mdlinksB;
module.exports.mdlinksC = mdlinksC;