let bookCollection = [];

<<<<<<< HEAD
// Get references to UI elements
=======
>>>>>>> a257a7d4987f20cb907b88eacbe53cee15e5479c
const bookList = document.getElementById('book-list');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBookBtn = document.getElementById('add-book-btn');

<<<<<<< HEAD
// Load the book collection from local storage (if it exists)
if (localStorage.getItem('bookCollection')) {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
=======
if (localStorage.getItem('bookCollection')) {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
  // eslint-disable-next-line no-use-before-define
>>>>>>> a257a7d4987f20cb907b88eacbe53cee15e5479c
  renderBookList();
}

function addBook() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  bookCollection.push({ title, author });
  // eslint-disable-next-line no-use-before-define
  renderBookList();
  bookTitle.value = '';
  bookAuthor.value = '';
  // eslint-disable-next-line no-use-before-define
  saveBookCollection();
}

function removeBook(index) {
  bookCollection = bookCollection.filter((_, i) => i !== index);
  // eslint-disable-next-line no-use-before-define
  renderBookList();
  // eslint-disable-next-line no-use-before-define
  saveBookCollection();
}

function renderBookList() {
  bookList.innerHTML = '';
  bookCollection.forEach((book, index) => {
    const bookItem = document.createElement('div');
<<<<<<< HEAD
    bookItem.innerHTML = `${book.title} by ${book.author}`;
=======
    bookItem.classList.add('book-item');

    const title = document.createElement('div');
    title.classList.add('book-title');
    title.innerHTML = book.title;

    const author = document.createElement('div');
    author.innerHTML = `by ${book.author}`;

>>>>>>> a257a7d4987f20cb907b88eacbe53cee15e5479c
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.onclick = () => removeBook(index);

    const hr = document.createElement('hr');

    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(removeBtn);
    bookItem.appendChild(hr);

    bookList.appendChild(bookItem);
  });
}

function saveBookCollection() {
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

<<<<<<< HEAD
// Add an event listener to the "Add" button to add a new book to the collection
=======
>>>>>>> a257a7d4987f20cb907b88eacbe53cee15e5479c
addBookBtn.addEventListener('click', addBook);
