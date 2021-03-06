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
    }).catch(err => console.log(err))

  });
}

const fetchDataCount = (newMds) => {
  let arrayOK = []
  let countBroken = []
  newMds.forEach(element => {

    fetch(element).then(res => {

      const status = res.status
      if (status === 200) {

        arrayOK.push(status)

        //console.log(countOk)

        //console.log(`Ok : ${colors.white(countOk)}`)
      } else if (status === 404) {
        countBroken.push(status)
      }
      // console.log(`Broken : ${colors.white(countBroken)}`)
    }).catch(err => console.log(err))

  });
  setTimeout(function () {
    console.log(`Broken: ${colors.red(countBroken.length)} Ok: ${colors.green(arrayOK.length)}`)
  }, 4200)
}

module.exports.fetchData = fetchData
module.exports.fetchDataCount = fetchDataCount
