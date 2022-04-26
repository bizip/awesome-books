class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}
class BookStore {
    constructor() {
        this.bookList = [];
    }

    newBook(title, author) {
        const bookId = this.bookList.length + 1;
        const addnew = new Book(title, author, bookId);
        this.bookList.push(addnew);
        localStorage.setItem('booksInStorage', JSON.stringify(this.bookList));
    }

    displaBook() {
        const result = JSON.parse(localStorage.getItem('booksInStorage'));
        return result;
    }

    deleteSingleBook(thisBookId) {
        // return this.bookList = this.bookList.filter((item) => item.id !== thisBookId);
        window.localStorage.setItem('booksInStorage', JSON.stringify(this.displaBook().filter(el => el.id !== thisBookId)));
        this.displaBook();

    }
}
const bookLibrary = new BookStore();

const formData = document.getElementById('new-book');
const bookList = document.getElementById('book-list');
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const getTitle = document.getElementById('title').value;
    const getAuthor = document.getElementById('author').value;
    bookLibrary.newBook(getTitle, getAuthor);
    // console.log(bookLibrary.displaBooks());
});


// const removeBtn = document.querySelectorAll('.remove-button');
//     removeBtn.forEach((el) => {
//         el.addEventListener('click', (event) => {
//             const dataToFilter = event.target.dataset.id;
//             libraryData.splice(dataToFilter, 1);
//             window.localStorage.setItem('singleBook', JSON.stringify(libraryData));
//         });
//     });

window.onload = () => {
    const bookToload = bookLibrary.displaBook();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = bookToload.map((el) => ` <div>
         <h4>${el.title}</h4>
    <p>${el.author}</p>
     <button type="button" data-id=${el.id} class="remove-button">Remove</button>
     </div>`);
};

const removeBtn = document.querySelectorAll('.remove-button');
// removeBtn.forEach(el => console.log(el))


//     getBook() {
//         const formData = document.getElementById('new-book');
//         const bookList = document.getElementById('book-list');
//         formData.addEventListener('submit', submitHandler);
//         const libraryData = window.JSON.parse(localStorage.getItem('singleBook') || '[]');
//         if (libraryData.length < 1) {
//             return bookList.innerHTML = '<h1>There is no awesome books in library!</h1><br />';
//         } else {
//             return
//             const removeBtn = document.querySelectorAll('.remove-button');
//             removeBtn.forEach((el) => {
//                 el.addEventListener('click', (event) => {
//                     const dataToFilter = event.target.dataset.id;
//                     libraryData.splice(dataToFilter, 1);
//                     window.localStorage.setItem('singleBook', JSON.stringify(libraryData));
//                 });
//             });
//         }
//     }
// }

// // Add book function
// const library = [];
// const submitHandler = () => {
//     const getTitle = document.getElementById('title').value;
//     const getAuthor = document.getElementById('author').value;
//     const bookData = new Book(getTitle, getAuthor);

//     const singleBook = {
//         title: bookData.title,
//         author: bookData.author,
//     };

//     // library.push(singleBook);
//     window.localStorage.setItem('singleBook', JSON.stringify([singleBook]));
//     console.log(library)
//     const formData = document.getElementById('new-book');
//     formData.reset();
// };
// const formData = document.getElementById('new-book');
// formData.addEventListener('submit', submitHandler);

// window.onload = () => {
//     let getbook = new Book();
//     getbook.getBook();
// }

// // window.onload = () => {
// //   const formData = document.getElementById('new-book');
// //   const bookList = document.getElementById('book-list');
// //   formData.addEventListener('submit', submitHandler);
// //   const libraryData = window.JSON.parse(localStorage.getItem('singleBook') || '[]');
// //   if (libraryData.length < 1) {
// //     bookList.innerHTML = '<h1>There is no awesome books in library!</h1><br />';
// //   } else {
// //     bookList.innerHTML = libraryData.map((el, index) => ` <div>
// //         <h4>${el.title}</h4>
// //         <p>${el.author}</p>
// //         <button type="button" data-id=${index} class="remove-button">Remove</button>
// //         </div>`);
// //     const removeBtn = document.querySelectorAll('.remove-button');
// //     removeBtn.forEach((el) => {
// //       el.addEventListener('click', (event) => {
// //         const dataToFilter = event.target.dataset.id;
// //         libraryData.splice(dataToFilter, 1);
// //         window.localStorage.setItem('singleBook', JSON.stringify(libraryData));
// //       });
// //     });
// //   }
// // };
