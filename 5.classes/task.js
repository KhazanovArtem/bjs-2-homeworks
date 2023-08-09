class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }    

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
        this.state = 100;
    }
}

class Book extends PrintEditionItem {
    constructor(author ,name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author ,name, releaseDate, pagesCount) {
        super(author ,name, releaseDate, pagesCount);
        this.type = "novel";
    }
}


class FantasticBook extends Book {
    constructor(author ,name, releaseDate, pagesCount) {
        super(author ,name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(author ,name, releaseDate, pagesCount) {
        super(author ,name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i in this.books) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i in this.books) {
            if (this.books[i].name == bookName) {
                let ret = this.books[i];
                this.books.splice(i, 1);
                return ret; 
            }
        }
        return null;
    }
}

class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }

        for (let i in this.marks) {
            if (i == subject) {
                this.marks[i].push(mark);
                return;
            }
        }

        this.marks[subject] = [];
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }

        return (this.marks[subject].reduce((acc, val) => acc + val, 0)) / this.marks[subject].length;
    }

    getAverage() {
        if (Object.keys(this.marks).length == 0) {
            return 0;
        }

        let keys = Object.keys(this.marks);
        let sum = 0;
        for (let key of keys) {
            sum += (this.marks[key].reduce((acc, val) => acc + val, 0)) / this.marks[key].length;
        }
        return sum / Object.keys(this.marks).length;
    }
}