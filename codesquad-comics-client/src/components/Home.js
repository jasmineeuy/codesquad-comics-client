import React from "react";
import booksData from "../data/books";

const Home = () => {
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
          {booksData.map((book) => {
            return (
              <div>
                <article>
                  <a href="#">
                    <img
                      src={`./images/${book.image}`}
                      alt={book.title}
                      style={{ width: "200px" }}
                    />
                  </a>
                  <p>
                    <em>{book.title}</em> by {book.author}
                  </p>
                  <p>{book.rating}</p>
                  <p>
                    <a href="#">Details</a>
                  </p>
                </article>
              </div>
            );
          })}
          <button type="button">Display More</button>
        </article>
      </main>
    </div>
  );
};

export default Home;
