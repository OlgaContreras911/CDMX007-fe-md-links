const fetch = require('node-fetch');
const colors = require('colors');

const fetchData = (newMds)=>{
newMds.forEach(element => {
    fetch(element).then(res =>{
        const status = res.status
        if(status === 200){
            console.log(`link: ${colors.blue(element)} status: ${colors.green(status)}`)
        }else{
        console.log(`link: ${colors.blue(element)} status: ${colors.red(status)}`)}
    })
    
});
}
module.exports.fetchData = fetchData