/*  Biblioteca-2
 1 - acrescentar uma secção, de filtros, para poder filtrar por ja lidos, nao lidos, todos, e por título ou autor do livro
 2 - dentro de cada card, acrescentar um botão de delete, para apagar o respetivo livro
 3 - ao clicar no thumbnail mostrar popup
*/

// Display books
function selectFilter(button) { // Safe
    switch (button) {
        case 'allBooks':
            return showBooks(allBooksMethod());
        case 'readBooks':
            return showBooks(readBooksMethod());
        case 'notReadBooks':
            return showBooks(notReadBooksMethod());
        default:
            console.log('Something went wrong..... :C')
    }
}

function showForm() {
    if (bookForm.classList.contains('visibilityNone')) {
        bookForm.classList.replace('visibilityNone', 'displayVisible');
    } else {
        bookForm.classList.replace('displayVisible', 'visibilityNone');
    }
}

function createNewBook(event, bookID = Math.random()*1000) {
    event.preventDefault()
    /* construct (id, title, author, alreadyRead, imageUrl, imageUrlGr) */
    // Codebase
    if (livros.every(livro => livro.id !== Number(bookID))) {
        livros.push(new Livro(bookID, `${bookTitle.value}`, `${bookAuthor.value}`, bookCheckbox.checked, `${bookThumbnail.value}`, `${bookPopup.value}`));
    } else {
        livros[bookID].title       = `${bookTitle.value}`;
        livros[bookID].author      = `${bookAuthor.value}`;
        livros[bookID].imageUrl    = `${bookThumbnail.value}`;
        livros[bookID].imageUrlGr  = `${bookPopup.value}`;
        livros[bookID].alreadyRead =    bookCheckbox.checked;
    }
    /*---------------*/
    showBooks(allBooksMethod());
    // Resets
    bookTitle.value = ``;
    bookAuthor.value = ``;
    bookThumbnail.value = ``;
    bookPopup.value = ``;
    bookCheckbox.checked = false;
    myH1.innerHTML = `Add a book!!`;
    return bookId = Math.random()*1000;
}

function editBook(hijackedID) {
    if (bookForm.classList.contains('visibilityNone'))
        bookForm.classList.replace('visibilityNone', 'displayVisible');
    myH1.innerHTML = `Editing ${livros[hijackedID].title}`;
    bookTitle.value = `${livros[hijackedID].title}`;
    bookAuthor.value = `${livros[hijackedID].author}`;
    bookThumbnail.value = `${livros[hijackedID].imageUrl}`;
    bookPopup.value = `${livros[hijackedID].imageUrlGr}`;
    bookCheckbox.checked = livros[hijackedID].alreadyRead;
    return bookId = hijackedID;
}

// Book delete function
function honSakujo(id) {
    return showBooks(deleteBookMethod(id));
}

function showPopUp(click, livros) {
        // Enter pop-up
        let popUp = document.createElement('div');
        grid.parentElement.append(popUp)
        popUp.classList.add('pop-up')
        popUp.innerHTML = `
            <img src="livros/${livros[click.parentElement.dataset.bookid].imageUrlGr}" alt="${click.title}">
            `
        // Leave pop-up
        const popUpDelete = document.querySelector('.pop-up');
        popUpDelete.addEventListener('click', (eventObj) => {
            popUpDelete.remove()
        }, false)
}

/* Método ler todos os livros */
const allBooksMethod = () => livros;

// Método para mostrar livros ja lidos
const readBooksMethod = () => livros.filter( livro => livro.alreadyRead === true );

// Método para mostrar livros nao lidos
const notReadBooksMethod = () => livros.filter( livro => livro.alreadyRead === false );

// Método para eliminar livro
const deleteBookMethod = (id) => livros = livros.filter( livro => livro.id !== Number(id) );

const searchByAuthorOrTitle = (input) => /*livros =*/ livros.filter(livro => {
    let title = livro.title.toLowerCase();
    let author = livro.author.toLowerCase();

    return (author.search(input) > -1 || title.search(input) > -1);
})