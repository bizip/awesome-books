class  book {
  constructor(titlle, author) {
    this.tittle = titlle;
    this.author = author;
  }

  newBook(tittle, author) { 
    /*submitHandler();*/
    console.log('tittle', 'author');
  }
}


const library = [];

const submitHandler = (e) => {
  e.preventDefault();
  const getTitle = document.getElementById('title');
  const getAuthor = document.getElementById('author');
  const singleBook = {
    title: getTitle.value,
    author: getAuthor.value,
  };

  library.push(singleBook);
  window.localStorage.setItem('singleBook', JSON.stringify(library));
  const formData = document.getElementById('new-book');
  formData.reset();
};

window.onload = () => {
  const formData = document.getElementById('new-book');
  const bookList = document.getElementById('book-list');
  formData.addEventListener('submit', submitHandler);
  const libraryData = window.JSON.parse(localStorage.getItem('singleBook') || '[]');
  if (libraryData.length < 1) {
    bookList.innerHTML = '<h1>There is no awesome books in library!</h1><br />';
  } else {
    bookList.innerHTML = libraryData.map((el, index) => ` <div>
        <h4>${el.title}</h4>
        <p>${el.author}</p>
        <button type="button" data-id=${index} class="remove-button">Remove</button>
        </div>`);
    const removeBtn = document.querySelectorAll('.remove-button');
    removeBtn.forEach((el) => {
      el.addEventListener('click', (event) => {
        const dataToFilter = event.target.dataset.id;
        libraryData.splice(dataToFilter, 1);
        window.localStorage.setItem('singleBook', JSON.stringify(libraryData));
      });
    });
  }
};
