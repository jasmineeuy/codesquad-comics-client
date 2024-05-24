import React from "react";

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
        <article className="comic-option">
          <h2>COMPLETE COMIC COLLECTION</h2>
          <div>
            <article>
              <a href="#">
                <img src="/images/fun-home.jpeg" style={{width: "200px"}}/>
              </a>
              <p>
                <em>Fun Home:A family Tragicomic</em> by Alison Bechedel
              </p>
              <p>5 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/watchmen.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em>Watchmen</em> by Alan Moore
              </p>
              <p>5 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img
                  src="/images/hunter-x-hunter.jpeg"
                  style={{width: "200px"}}
                />
              </a>
              <p>
                <em>Hunter X Hunter Vol. 1</em> by Yoshihiro Togashi
              </p>
              <p>5 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/lumberjanes.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em>Lumberjanes</em> by Noelle Stevenson
              </p>
              <p>4 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/one-piece.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em> One Piece, Vol. 1: Romance Dawn</em> by Eiichiro Oda
              </p>
              <p>5 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/wake.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em>Wake: The Hidden History of Women-Led Slave Revolts</em> by
                Rebecca Hall
              </p>
              <p>4 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="black-panther-card.html">
                <img
                  src="/images/black-panther.jpeg"
                  style={{width: "200px"}}
                />
              </a>
              <p>
                <em>Black Panther: A Nation Under our Feet Book 1</em> by
                Ta-Nehisi Coates
              </p>
              <p>3 Stars</p>
              <p>
                <a href="black-panther-card.html">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img
                  src="/images/the-walking-dead.jpeg"
                  style={{width: "200px"}}
                />
              </a>
              <p>
                <em>The Walking Dead, Vol 1: Days Gone Bye</em> by Robert
                Kirkman
              </p>
              <p>4 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/march.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em>March:Book One</em> by John Lewis
              </p>
              <p>5 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/batman.jpeg" style={{width: "200px"}} />
              </a>
              <p>
                <em>Batman: The Dark Knight Returns</em> by Frank Miller
              </p>
              <p>3 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img src="/images/queer.jpeg"  style={{width: "200px"}}/>
              </a>
              <p>
                <em>Queer: A Graphic History</em> by Meg-John Barker
              </p>
              <p>4 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
            <article>
              <a href="#">
                <img
                  src="/images/parable-of-the-sower.jpeg"
                  style={{width: "200px"}}
                />
              </a>
              <p>
                <em>Parable of the Sower</em> by Octavia E. Butler
              </p>
              <p>4 Stars</p>
              <p>
                <a href="#">Details</a>
              </p>
            </article>
          </div>
          <button type="button">Display More</button>
        </article>
      </main>
    </div>
  );
};

export default Home;
