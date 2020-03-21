const fs = require('fs');
module.exports.file = (file) => {
    const self = {
        add: (obj) => {
            fs.readFile(file, 'utf8', (error, data) => {
                if(error)return console.log(error.message);
                let json;
                if(data === ''){
                    json = obj;
                    fs.writeFileSync(file, `[${JSON.stringify(json)}]`);
                }
                else{
                    json = JSON.parse(data);
                    json.push(obj);
                    fs.writeFileSync(file, JSON.stringify(json));
                }
                console.log('object added!');
                return;
            });
        },

        find: (key, value) => {
            return new Promise((resolve, reject) => {
                fs.readFile(file, (error, data) => {
                    if(error) reject(error);
                    let json = JSON.parse(data);
                    if(json.length === 0){
                        console.log('empty');
                        return;
                    } 
                    for(let i in json){
                        if(json[i][key] === value){
                            console.log(`found it!`);
                            resolve(json[i]);
                            return;
                        }else{
                            console.log('does not exist :)');
                            return;
                        }
                    }
                });
            });
        },

        remove: (key, value) => {
            fs.readFile(file, (error, data) => {
                if(error)return console.log(error.message);
                let json = JSON.parse(data);
                for(let i in json){
                    if(json[i][key] === value){
                        json.splice(i, 1);
                        fs.writeFileSync(file, JSON.stringify(json));
                        console.log('object removed');
                        return;
                    }
                }
                console.log(`cannot remove something that does not exist`);
            });
        },

        replace: (whereKey, whereValue, key, newValue) => {
            fs.readFile(file, (error, data) => {
                if(error)return console.log(error.message);
                let json = JSON.parse(data);
                for(let i in json){
                    if(json[i][whereKey] === whereValue){
                        json[i][key] = newValue;
                        fs.writeFileSync(file, JSON.stringify(json));
                        console.log(`${key} key's value was replaced with ${newValue}`);
                        return;
                    }
                }
                console.log(`cannot remove something that does not exist`);
            });
        }
    };

    return self;
}