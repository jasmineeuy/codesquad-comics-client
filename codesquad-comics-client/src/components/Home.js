import React, { useState, useEffect } from "react";
// import booksData from "../data/books";

const Home = () => {
  //creating state to hold data for books intialize setter function to empty array
  const [books, setBooks] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const url = "http://localhost:8080";

  //create useEffect hook to run once on render
  useEffect(() => {
    fetch(`${url}/api/books`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setBooks(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  console.log("books=", books);
  console.log("message=", errorMessage);

  return (
    <div>
      <main className="index">
        <article className="index-article">
          <h1>CODESQUAD COMICS</h1>
          <p>
            CodeSquad Comics is a collection of graphic novels read by Jasmine.
            The site is intended to display comic book covers along with
            information about each book, including the author, a rating, and
            other details about the graphic novel. Browse through the complete
            collection below. Click on the cover image or the Details link to
            see even more information about each graphic novel including the
            publisher, genre, number of pages, and a brief synopsis. The About
            page includes meta information about this collection. Login is only
            available to the site administrator at this time.
          </p>
        </article>
        <h2>COMPLETE COMIC COLLECTION</h2>
        <article className="comic-option">
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            books &&
            books.map((book) => (
              <div key={book._id}>
                <article>
                  <a href={`/book/${book._id}`}>
                    <img
                      src={`/images/${book.image}`}
                      alt={book.title}
                      style={{ width: "200px" }}
                    />
                  </a>
                  <p>
                    <em>{book.title}</em> by {book.author}
                  </p>
                  <p>{book.rating}</p>
                  <p>
                    <a href={`/book/${book._id}`}>Details</a>
                  </p>
                </article>
              </div>
            ))
          )}
          <button type="button">Display More</button>
        </article>
      </main>
    </div>
  );
};

export default Home;
