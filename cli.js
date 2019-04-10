#!/usr/bin/env node


const mds = require('./mds.js');
const folderUser = process.argv[2]
const optionOne = process.argv[3]
const optionTwo = process.argv[4]
mds(folderUser, optionOne,optionTwo);



//const [,, ... args] = process.argv
//console.log(`Hello World ${args}`)

