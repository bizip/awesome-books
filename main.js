class Book {
  constructor() {
    this.bookStore = JSON.parse(localStorage.getItem('singleBook')) || [];
  }

  getBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    bookList.innerHTML += this.bookStore.map(
      (el, index) => ` <div class="${index % 2 === 0 ? 'dark' : 'mediumdark'}">
        <h4>${el.title}</h4>
        <p>${el.author}</p>
        <button type="button" id=${el.id} class='remove-button'>Remove</button>
        </div>`,
    );
    const Allbtn = document.querySelectorAll('.remove-button');
    Allbtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.deleteBook(btn.id);
      });
    });
  }

  addNewBook(title, author) {
    const id = this.bookStore.length + 1;
    const addbook = {
      title,
      author,
      id,
    };
    this.bookStore.push(addbook); localStorage.setItem('singleBook', JSON.stringify(this.bookStore));
    this.getBookList();
  }

  deleteBook(id) {
    this.bookStore = this.bookStore.filter((item) => {
      if (item.id === Number(id)) {
        return false;
      }
      return true;
    });
    localStorage.setItem('singleBook', JSON.stringify(this.bookStore));
    this.getBookList();
  }
}

const booksLibrary = new Book();
booksLibrary.getBookList();
const formData = document.getElementById('new-book');
formData.addEventListener('submit', (e) => {
  e.preventDefault();
  const getTitle = document.getElementById('title').value;
  const getAuthor = document.getElementById('author').value;
  booksLibrary.addNewBook(getTitle, getAuthor);
});

let CurrentDate = document.getElementById('currentDate');
CurrentDate.innerHTML = new Date();

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');
const addDisplay = document.querySelector('.ADD');
const listDisplay = document.querySelector('.LIST');
const contactDisplay = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  listDisplay.style.display = 'flex';
});

addLink.addEventListener('click', () => {
  listDisplay.style.display = 'none';
  contactDisplay.style.display = 'none';
  addDisplay.style.display = 'flex';
});

contactLink.addEventListener('click', () => {
  listDisplay.style.display = 'none';
  addDisplay.style.display = 'none';
  contactDisplay.style.display = 'flex';
});
