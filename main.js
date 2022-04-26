class Book {
    constructor() {
        this.bookStore = JSON.parse(localStorage.getItem('singleBook')) || [];
    }
    getBookList() {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = ``;
        bookList.innerHTML += this.bookStore.map((el) => ` <div>
                 <h4>${el.title}</h4>
            <p>${el.author}</p>
             <button type="button" data-id=${el.id} class="remove-button">Remove</button>
             </div>`);
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
        this.getBookList()
    }



    removeBookFromList(index) {

        localStorage.setItem('singleBook', JSON.stringify(this.bookStore.splice(index, 1)));
        this.getBookList()
    }
}

const booksLibrary = new Book();
booksLibrary.getBookList()
const formData = document.getElementById('new-book');
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const getTitle = document.getElementById('title').value;
    const getAuthor = document.getElementById('author').value;
    booksLibrary.addNewBook(getTitle, getAuthor);
});
window.onload = () => {
    booksLibrary.getBookList();
    const removeBtn = document.querySelectorAll('.remove-button');
    removeBtn.forEach((el) => {

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(e.target.dataset.id);
            booksLibrary.removeBookFromList(e.target.dataset.id);

        });
    });
}



