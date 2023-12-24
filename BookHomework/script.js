
class Book {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    }

    haveIReadTheBook() {
        if (this.readingStatus == true) {
            console.log(`Vekje ste ja prochitale : ${this.title} od avtorot : ${this.author}`);
        }
        else {
            console.log(`Ne ste ja prochitale : ${this.title}, od avtorot : ${this.author}`);
        }
    }
}

function BookReader() {
    let books = document.getElementById('Book')
    let authors = document.getElementById('Author')
    let chance = Math.random() < 0.5;
    let bol = Boolean

    let boooks = books.value;
    let authho = authors.value;

    console.log(`ova e ${boooks} so autor ${authho}, Dali ste ja prochitale : ${bol, true}`);
    console.log(`ova e ${boooks} so autor ${authho}, Dali ste ja prochitale : ${bol, false}`);
    console.log(`ova e ${boooks} so autor ${authho}, Dali ste ja prochitale : ${chance}`);
}



// const book1 = new Book("3500 Final Quotes", "Abraham Lincoln");
// const book2 = new Book("Don Quixote", "Miguel de Cervantes");
// const book3 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", true);
// const book4 = new Book("War and Peace", "Leo Tolstoy", true);
// const book5 = new Book("Crime and Punishment", "Fyodor Dostoevsky");

// book1.haveIReadTheBook()
// book2.haveIReadTheBook()
// book3.haveIReadTheBook()
// book4.haveIReadTheBook()
// book5.haveIReadTheBook()

