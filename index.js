// Define the book collection as an array of objects
let bookCollection = [];

// Get references to UI elements
const bookList = document.getElementById("book-list");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const addBookBtn = document.getElementById("add-book-btn");

// Load the book collection from local storage (if it exists)
if (localStorage.getItem("bookCollection")) {
  bookCollection = JSON.parse(localStorage.getItem("bookCollection"));
  renderBookList();
}

// Function to add a new book to the collection
function addBook() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  bookCollection.push({ title, author });
  renderBookList();
  bookTitle.value = "";
  bookAuthor.value = "";
  saveBookCollection();
}

// Function to remove a book from the collection
function removeBook(index) {
  bookCollection = bookCollection.filter((_, i) => i !== index);
  renderBookList();
  saveBookCollection();
}

// Function to render the book list in the UI
function renderBookList() {
  bookList.innerHTML = "";
  bookCollection.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.innerHTML = `${book.title} by ${book.author}`;
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.onclick = () => removeBook(index);
    bookItem.appendChild(removeBtn);
    bookList.appendChild(bookItem);
  });
}

// Function to save the book collection to local storage
function saveBookCollection() {
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
}

// Add an event listener to the "Add" button to add a new book to the collection
addBookBtn.addEventListener("click", addBook);
