//                                  Задание №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set actualState(num) {
        if (num < 0) {
            this.state = 0;
        } if (num > 100) {
            this.state = 100;
        } else {
            this.state = num;
        }
        return num;
    }
    get fullState() {
        return this.state;
    }
}
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

//                                   Задание №2

class Library {
  constructor(name) { 
    this.name = name
    this.books = []
  } 
  addBook(object) { 
    if(object.state > 30)
    this.books.push(object)       
  }
  findBookBy(type, value) {
    let book = this.books.find(el => el[type] == value)  
    if(book == undefined) return null                  
    else return book      
  }
  giveBookByName(bookName) {
    let book = this.books.splice(this.books.findIndex(el => el.name == bookName),1) 
    if(book[0] == undefined) return null               
    else return book[0]
  }
}
    
let library = new Library("Библиотека имени Ленина")

library.addBook(fantasticBook)  
library.addBook(novelBook)
library.findBookBy("name","Пикник на обочине")
library.giveBookByName("Машина времен")
console.log(library)
