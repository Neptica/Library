const myLibrary = [];

function Book(name, author, date) {
  this.name = name;
  this.author = author;
  this.date = date;
  this.read = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("Yes", "Queen", "1955");
const book2 = new Book("King Kong", "Tolkein", "1459");
const book3 = new Book("Long Name Title X OR Gates of Hell", "JJR", "4857");

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

    let reader = document.createElement("div");
    let read = document.createElement("input");
    let rad = document.createElement("label");
    rad.htmlfor = "read";
    rad.textContent = "Read";
    read.type = "checkbox";
    read.id = "read";
    read.style = "margin-left: 8px";
    reader.appendChild(rad);
    reader.appendChild(read);
    card.appendChild(reader);

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

const add = document.getElementById("add");
const form = document.getElementById("dialog");
const join = document.getElementById("join");

add.addEventListener("click", () => {
  form.show();
});

join.addEventListener("click", (e) => {
  e.preventDefault();
  // TODO: collect text inputs from HTML inputs, add them as objects to the array, and clear the inputs
  form.close();
});
