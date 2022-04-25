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
};
