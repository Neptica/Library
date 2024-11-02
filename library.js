const myLibrary = [];

function Book(name, author, date) {
  this.name = name;
  this.author = author;
  this.date = date;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("Yes", "Queen", "1955");
const book2 = new Book("King Kong", "Tolkein", "1459");
const book3 = new Book("Future", "JJR", "4857");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const list = document.getElementById("list");

console.log(book1.name);

let created_doms = [];

function displayBooks() {
  for (const book of myLibrary) {
    let title = document.createElement("h3");
    let author = document.createElement("p");
    let date = document.createElement("p");
    title.textContent = book.name;
    author.textContent = book.author;
    date.textContent = book.date;
    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(date);

    let remove_btn = document.createElement("button");
    remove_btn.textContent = "remove";
    remove_btn.classList.add("rmv");

    remove_btn.addEventListener("click", removeParent);

    card.appendChild(remove_btn);
    list.appendChild(card);
    created_doms.push(card);
  }
}

function removeParent() {
  this.parentElement.remove();
}

displayBooks();
