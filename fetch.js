const fetch = require('node-fetch');
const mds = require("./mds");

const newMds = mds.mds(data);

const fetchData = ()=>{
newMds.forEach(element => {
    fetch(element).then(res =>{
        console.log(res.status)
    })
    
});
}
module.exports.fetchData = fetchData