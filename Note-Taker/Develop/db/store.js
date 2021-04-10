const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
    read(){
        return readFileAsync("db/db.json", "utf8")
    }
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then(notes => {
            let parseNotes;
        
            try{
                parseNotes= [].concat(JSON.parse(notes))
            }catch(error){

            }
            return parseNotes
        })
    }
    addNote(){

    }
    deleteNote(){

    }
}
module.exports=new Store()