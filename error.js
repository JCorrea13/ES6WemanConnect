class Book {
    constructor({ intro, chapters }){
        this.intro = intro;
        this.chapters = chapters;
    }

    getIntroduction(){
        if(!this.intro){
            throw new Error('This book does not have an intro');
        }
    
        return this.intro;
    }

    getChapters(){
        return this.chapters;
    }
}

function readBook(book){
    try {
        console.log(book.getIntroduction());
    } catch (error) {
        console.log('Hello, We are sorry :) we have the following '+ error);
    }    
    for(let chap of book.getChapters()){
        console.log(chap);
    }

}

const myBook = new Book({ chapters: ['chap1', 'chap2'] });
readBook(myBook);

