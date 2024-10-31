
const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function () {
      return title + " by " + author + ", " + pages + " pages, " + read;
  }
  this.toggle = function () {
      console.log("before" + this.read)
      this.read = !this.read;
      console.log("after" + this.read)
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
  array.forEach((element, index ) => {
    const row = document.createElement("tr");
    row.setAttribute("class", "test");
    const titletable = document.createElement("th");
    const authortable = document.createElement("th");
    const pagestable = document.createElement("th");
    const readtable = document.createElement("th");
    const actionButton = document.createElement("td");
    const removeButton = document.createElement("button");
    const toggleButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() { removeEntry(index); };
    toggleButton.textContent = 'Toggle';
    toggleButton.onclick = function() { toggleFunc(index)}; ;
    titletable.textContent = element.title;
    authortable.textContent = element.author;
    pagestable.textContent = element.pages;
    readtable.textContent = element.read;
    row.appendChild(titletable);
    row.appendChild(authortable);
    row.appendChild(pagestable);
    row.appendChild(readtable);
    actionButton.appendChild(removeButton);
    actionButton.appendChild(toggleButton);
    row.appendChild(actionButton);
    table.appendChild(row);
  });
}
function emptyTable() {
  let tbody = document.querySelectorAll('.test');
  tbody.forEach(element => {
    element.remove();
  })
}
function addToTable() {
    let tbody = document.querySelectorAll('.test');
    tbody.forEach(element => {
      element.remove();
    })
    return addBookToLibrary(), displayTableFromArray(myLibrary);
}
function removeEntry(index) {
  emptyTable();
  myLibrary.splice(index, 1);
  displayTableFromArray(myLibrary);
}
function toggleFunc(index) {
  myLibrary[index].toggle();
  return emptyTable(), displayTableFromArray(myLibrary);
}
const sampleone = new Book("title1", "author1", "pages1", "yes");
const sampletwo = new Book("title2", "author2", "pages2", "no");
myLibrary.push(sampleone);
myLibrary.push(sampletwo);
const table = document.querySelector("tbody");
//addBookToLibrary();
displayTableFromArray(myLibrary);
const btn = document.querySelector(".btn");
btn.addEventListener("click", addToTable);

console.log(table);


