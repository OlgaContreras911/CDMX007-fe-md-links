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
module.exports.fetchData = fetchData