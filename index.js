const fs = require('fs');
const path = require('path');
const links = require("./links");


const mds = (folderUser, optionOne,optionTwo) => {

    if (optionOne === "--validate" && optionTwo ==="--stats" || optionOne === "--stats" && optionTwo ==="--validate" ) {
        if (path.extname(folderUser) === ".md") {
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);

                else
                    links.mdlinksComplete(data)
            });
        } else {

            fs.readdir(folderUser, (err, data) => {
                const pathResolve = path.resolve(folderUser)
                //console.log("ruta :",pathResolve)
                if (err) {
                    console.error('Error', err);
                } else {
                    //console.log('folderuser :',folderUser);
                    data.forEach(element => {
                        if (path.extname(element) === ".md") {
                            const file = element;
                            fs.readFile(`${pathResolve}/${file}`, "utf8", (err, data) => {
                                if (err)
                                    console.error('Error', err);

                                else
                                    links.mdlinksComplete(data)
                            });
                        }
                    });
                }

            });
        }
    } else if (optionOne === "--stats") {
        if (path.extname(folderUser) === ".md") {
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);

                else
                    links.mdlinksStats(data)
            });
        } else {

            fs.readdir(folderUser, (err, data) => {
                const pathResolve = path.resolve(folderUser)
                //console.log("ruta :",pathResolve)
                if (err) {
                    console.error('Error', err);
                } else {
                    //console.log('folderuser :',folderUser);
                    data.forEach(element => {
                        if (path.extname(element) === ".md") {
                            const file = element;
                            fs.readFile(`${pathResolve}/${file}`, "utf8", (err, data) => {
                                if (err)
                                    console.error('Error', err);

                                else
                                    links.mdlinksStats(data)
                            });
                        }
                    });
                }

            });
        }
    } else if (optionOne === "--validate") {
        if (path.extname(folderUser) === ".md") {
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);

                else
                    links.mdlinksValidate(data)
            });
        } else {

            fs.readdir(folderUser, (err, data) => {
                const pathResolve = path.resolve(folderUser)
                //console.log("ruta :",pathResolve)
                if (err) {
                    console.error('Error', err);
                } else {
                    //console.log('folderuser :',folderUser);
                    data.forEach(element => {
                        if (path.extname(element) === ".md") {
                            const file = element;
                            fs.readFile(`${pathResolve}/${file}`, "utf8", (err, data) => {
                                if (err)
                                    console.error('Error', err);

                                else
                                    links.mdlinksValidate(data)
                            });
                        }
                    });
                }

            });
        }
    } else {
        if (path.extname(folderUser) === ".md") {
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);

                else
                    links.mdlinksJust(data)
            });
        } else {

            fs.readdir(folderUser, (err, data) => {
                const pathResolve = path.resolve(folderUser)
                //console.log("ruta :",pathResolve)
                if (err) {
                    console.error('Error', err);
                } else {
                    //console.log('folderuser :',folderUser);
                    data.forEach(element => {
                        if (path.extname(element) === ".md") {
                            const file = element;
                            fs.readFile(`${pathResolve}/${file}`, "utf8", (err, data) => {
                                if (err)
                                    console.error('Error', err);

                                else
                                    links.mdlinksJust(data)
                            });
                        }
                    });
                }

            });
        }
    }
}
module.exports = mds;



