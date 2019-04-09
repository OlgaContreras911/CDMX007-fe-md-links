#!/usr/bin/env node


const mds = require('./mds.js');
const folderUser = process.argv[2]
const optionOne = process.argv[3]
mds(folderUser, optionOne);



//const [,, ... args] = process.argv
//console.log(`Hello World ${args}`)

