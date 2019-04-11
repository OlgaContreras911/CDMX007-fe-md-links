const fetch = require('node-fetch');
const colors = require('colors');
const path = require('path');
const logSymbols = require('log-symbols');


const fetchData = (newMds) => {
    newMds.forEach(element => {
        const filePar = path.parse(element);
        //console.log("filePar",filePar)
        const linkName = filePar.name
        fetch(element).then(res => {

            const status = res.status
            if (status === 200) {
                console.log(`Link name: ${colors.white(linkName)} link: ${colors.blue(element)} status: ${colors.green(status)} ${logSymbols.success} OK`)
            } else if (status === 404) {
                console.log(`Link name: ${colors.white(linkName)} link: ${colors.blue(element)} status: ${colors.red(status)} ${logSymbols.error} FAIL`)
            }
        }).catch(err=>console.log(err))

    });
}

const fetchDataB = (newMds) => {
    let brokenLinks=[]
    let okLinks=[]
    newMds.forEach(element => {
        
        fetch(element).then(res => {

            const status = res.status
            if (status === 200) {
                okLinks.push(element)
                
            } else if (status === 404) {
                brokenLinks.push(element)
               
            }
        }).catch(err=>console.log(err))
         
    });
    console.log(`Link name: ${brokenLinks}`)
}
module.exports.fetchData = fetchData
module.exports.fetchDataB = fetchDataB