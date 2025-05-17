import React from 'react';

function Book(props) {
    return (
        <article data-bookid={props.id}>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <img src={`livros/${props.imageUrl}`} alt={props.title}/>
            <p>Already read: {props.alreadyRead ? '✅' : '❌'}</p>
            <button id="bookDeleteButton" data-bookid={props.id}>Delete</button>
        </article>
    );
}

export default Book;