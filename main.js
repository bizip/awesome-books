class Book {
  constructor() {
    this.bookStore = JSON.parse(localStorage.getItem('singleBook')) || [];
  }
  getBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ``;
    bookList.innerHTML += this.bookStore.map(
      (el) => ` <div>
            <h4>${el.title}</h4>
            <p>${el.author}</p>
            <button type="button" id=${el.id} class='remove-button'>Remove</button>
            </div>`
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
      title: title,
      author: author,
      id,
    };
    this.bookStore.push(addbook);
    localStorage.setItem('singleBook', JSON.stringify(this.bookStore));
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
  console.log(getTitle, getAuthor);
  booksLibrary.addNewBook(getTitle, getAuthor);
});
