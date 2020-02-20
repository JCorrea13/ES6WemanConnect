class File {
    constructor(name, ext, owner){
        this.name = name;
        this.ext = ext;
        this.owner = owner;
    }
}

function sendFile(file) {
    if(!file) return null;
    const  {
        name= 'unnamed',
        ext : fileExt = 'txt',
        fileOwner = 'system'
    } = file;

    const result = new File(name, fileExt, fileOwner);
    console.log('sending...', result);
}

sendFile({name:'tarea', ext: 'doc'});