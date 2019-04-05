const fetch = require('node-fetch');
const colors = require('colors');
const path = require('path');

const fetchData = (newMds)=>{
newMds.forEach(element => {
    const filePar = path.parse (element);
    //console.log("filePar",filePar)
        const linkName= filePar.name
    fetch(element).then(res =>{
        
        const status = res.status
        if(status === 200){
            console.log(`Link name: ${colors.white(linkName)} link: ${colors.blue(element)} status: ${colors.green(status)} OK`)
        }else if(status === 404){
        console.log(`Link name: ${colors.white (linkName)} link: ${colors.blue(element)} status: ${colors.red(status)} FAIL`)}
    })
    
});
}
const fetchDataB = (newMds)=>{
    newMds.forEach(element => {
        fetch(element).then(res =>{
            
            const status = res.status
            if(status === 200){
                console.log(` ${newMds.length} OK`)
            }else if(status === 404){
            console.log(`${newMds.length} FAIL`)}
        })
        
    });
    }
module.exports.fetchDataB=fetchDataB
module.exports.fetchData = fetchData