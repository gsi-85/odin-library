
const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
      return title + " by " + author + ", " + pages + " pages, " + read;
  }
}


function addBookToLibrary() {
  // do stuff here
  const title = prompt("Book:");
  const author = prompt("Author");
  const pages = prompt("Pages:");
  const read = prompt("Read:");
  const addBook = new Book(title, author, pages, read);
  return myLibrary.push(addBook);
}

function displayTableFromArray(array) {
  array.forEach(element => {
    const row = document.createElement("tr");
    const titletable = document.createElement("th");
    const authortable = document.createElement("th");
    const pagestable = document.createElement("th");
    const readtable = document.createElement("th");
    titletable.textContent = element.title;
    authortable.textContent = element.author;
    pagestable.textContent = element.pages;
    readtable.textContent = element.read;
    row.appendChild(titletable);
    row.appendChild(authortable);
    row.appendChild(pagestable);
    row.appendChild(readtable);
    table.appendChild(row);
  });
}
const sampleone = new Book("title1", "author1", "pages1", "yes");
const sampletwo = new Book("title2", "author2", "pages2", "no");
myLibrary.push(sampleone);
myLibrary.push(sampletwo);
const table = document.querySelector("tbody");
addBookToLibrary();
displayTableFromArray(myLibrary);

console.log(table);


