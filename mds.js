const fs = require('fs');
const path = require('path');
const links = require("./links");
const folderUser = process.argv[2]
const optionOne = process.argv[3]

const mds = () => {

    if (optionOne === "--validate") {
        if (path.extname(folderUser) === ".md"){
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);
    
                else
                    links.mdlinks(data)
            });
        }else{
        
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
                                links.mdlinks(data)
                        });
                    }
                });
            }

        });
    }
    } else if (optionOne === "--stats") {
        if (path.extname(folderUser) === ".md"){
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);
    
                else
                    links.mdlinksC(data)
            });
        }else{
        
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
                                links.mdlinksC(data)
                        });
                    }
                });
            }

        });
    }
    }
    else {
        if (path.extname(folderUser) === ".md"){
            fs.readFile(folderUser, "utf8", (err, data) => {
                if (err)
                    console.error('Error', err);
    
                else
                    links.mdlinksB(data)
            });
        }else{
        
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
                                links.mdlinksB(data)
                        });
                    }
                });
            }

        });
    }
    }
}

module.exports = mds;

