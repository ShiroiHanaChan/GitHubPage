// Book library
let grid = document.getElementById('grid');
// Select book filter
let searchSelection = document.querySelector('#searchSelection');
// Text input search
let searchByInput = document.querySelector('#searchByTitle');
// Book form
let editForm = document.querySelector('#editForm');
let bookForm = document.querySelector('#bookForm');
let myH1 = document.querySelector('#myH1');

/* GRID */
grid.addEventListener('click', (eventObj) => {
    if (eventObj.target.id === 'bookDeleteButton') {
        honSakujo(eventObj.target.dataset.bookid);
    }
    if (eventObj.target.id === 'bookEditButton') {
        editBook(eventObj.target.dataset.bookid);
    }
    if (eventObj.target.nodeName === 'IMG')
        showPopUp(eventObj.target, livros)
}, false)

/* SEARCH SELECTION */
searchSelection.addEventListener('click', (eventObj) => {
    // Selects which filter to pass to the function and displays the books
    if (eventObj.target.id === 'readBooks' || 'allBooks' || 'notReadBooks') {
        selectFilter(eventObj.target.id);
    }
}, false)

/* SEARCH BY INPUT */
searchByInput.addEventListener('input', (eventObj) => {
    if (eventObj.target.nodeName === 'INPUT')
        showBooks(searchByAuthorOrTitle(eventObj.target.value));
}, false)

/* BOOK FORM */
editForm.addEventListener('click', (eventObj) => {
    if (eventObj.target.id === 'showHideForm') {
        showForm();
    }
}, false);

bookForm.addEventListener('click', (eventObj) => {
    if (eventObj.target.nodeName === 'BUTTON')
        createNewBook(eventObj, bookId);
}, false);

// DISPLAY BOOKS FUNCTION
function showBooks(arrayBooks){
    grid.innerHTML = ``;
    arrayBooks.map( book => {
        grid.innerHTML += `
            <article data-bookid="${book.id}">
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <img src="livros/${book.imageUrl}" alt="${book.title}">
                <p>Already read: ${book.alreadyRead ? '✅' : '❌' }</p>
                <button id="bookDeleteButton" data-bookid="${book.id}">Delete</button>
                <button id="bookEditButton" data-bookid="${book.id}">Edit</button>
            </article>
        `;
    });
}