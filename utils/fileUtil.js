const fs = require('fs');

let fileUtils = {
    getRandomFile  : getRandomFile,
    getFolderFiles : getFolderFiles,
};

function getRandomFile(){
    return new Promise((resolve, reject) => {
        getFolderFiles().then((files) => {
            if(files){
                let path = 'http://localhost:3000/static/quotes/';
                let rand = Math.floor(Math.random() * files.length);
                let file = files[rand];

                let result = {
                    url : path + file,
                    filename : file
                }

                resolve(result);
            } else {
                resolve({});
            }
        });
    });
}


// Se enviar um folder, utiliza ele como path, senão pega o padrão 'public/quotes/'
function getFolderFiles(folder) {
    const photosFolder = folder || 'public/quotes/';

    return new Promise((resolve, reject) => {
        fs.readdir(photosFolder, {}, (err, files) => {
            if(err){
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

module.exports = fileUtils;