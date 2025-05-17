import React, {useState} from 'react';
import Book from "./Book.jsx";
import fetchData from "./FetchData.jsx";

function BookList() {

    const [bookData, setBookData] = useState(null);

    (async function setBooks() {
        const localData = await fetchData();
        setBookData(localData);
    })();

    if (bookData !== null && bookData !== undefined)
        return (
            <>
                <section className={'grid'} id={'grid'}>
                    {
                        bookData.map(book => (
                        /*const {id, title, author, alreadyRead, imageUrl, imageUrlGR} = book;*/
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                alreadyRead={book.alreadyRead}
                                imageUrl={book.imageUrl}
                                imageUrlGR={book.imageUrlGR}
                            />
                        ))
                    }
                </section>
            </>
        );
    }

export default BookList;