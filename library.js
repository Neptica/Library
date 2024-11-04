const myLibrary = [];

function Book(name, author, date) {
  this.name = name;
  this.author = author;
  this.date = date;
  this.read = false;
  this.id = 0;
}

function addBookToLibrary(book) {
  book.id = findAvailableId();
  myLibrary.push(book);
}

const book1 = new Book("Yes", "Queen", "1955");
const book2 = new Book("King Kong", "Tolkein", "1459");
const book3 = new Book("Long Name Title X OR Gates of Hell", "JJR", "4857");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const list = document.getElementById("list");

let created_doms = [];

function displayBooks() {
  for (const book of myLibrary) {
    addToDisplay(book);
  }
}

function addToDisplay(bookOBJ) {
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let date = document.createElement("p");
  title.textContent = bookOBJ.name;
  author.textContent = bookOBJ.author;
  date.textContent = bookOBJ.date;
  let card = document.createElement("div");

  card.classList.add("card");
  card.id = bookOBJ.id;
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
  // arrow function breaks the below function somehow
  read.addEventListener("change", function () {
    bookOBJ.read = this.checked;
  });
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

function removeParent() {
  const bookId = this.parentElement.id;
  for (const book of myLibrary) {
    if (bookId == book.id) {
      const index = myLibrary.indexOf(book);
      myLibrary.splice(index, 1);
    }
  }
  this.parentElement.remove();
}

function findAvailableId() {
  if (myLibrary.length == 0) return 0;
  for (let i = 0; i < myLibrary.length + 1; i++) {
    let found = true;
    for (const book of myLibrary) {
      if (i == book.id) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
}

displayBooks();

const add = document.getElementById("add");
const form = document.getElementById("dialog");
const join = document.getElementById("join");

add.addEventListener("click", () => {
  form.show();
});

const nameOfBook = document.getElementById("book_title");
const authorOfBook = document.getElementById("author");
const dateOfRelease = document.getElementById("release");

join.addEventListener("click", (e) => {
  e.preventDefault();
  const book = new Book(
    nameOfBook.value,
    authorOfBook.value,
    dateOfRelease.value,
  );
  nameOfBook.value = "";
  authorOfBook.value = "";
  dateOfRelease.value = "";
  addBookToLibrary(book);
  addToDisplay(book);
  form.close();
});

// TODO: violating node error
