import React from "react";

const Create = () => {
  return (
    <div>
      <main>
        <form action="#">
          <h1>CREATE NEW COMIC</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" className="title" id="title" placeholder="Title" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input type="text" className="author" id="author" placeholder="Author" />
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label>
            <select className="publisher" id="publisher">
              <option value="" disabled selected>
                Select
              </option>
              <option value="boom-box">BOOM!Box</option>
              <option value="dc-comics">DC Comics</option>
              <option value="harry-abrams">Harry N. Abrams</option>
              <option value="icon-books">Icon Books</option>
              <option value="image-comics">Image Comics</option>
              <option value="marvel">Marvel</option>
              <option value="simon-schuster">Simon & Schuster</option>
              <option value="top-shelf-productions">
                Top Shelf Productions
              </option>
              <option value="viz-media-llc">VIZ Media LLC</option>
            </select>
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <input type="text" className="genre" id="genre" placeholder="Genre" />
          </div>
          <div>
            <label htmlFor="num-pages">Number of Pages</label>
            <input
              type="number"
              className="num-pages"
              id="num-pages"
              placeholder="Number of Pages"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input type="number" className="rating" id="rating" />
          </div>
          <div>
            <label htmlFor="synopsis">Synospsis</label>
            <textarea id="synopsis" className="synopsis" rows="2" cols="40">
              Synopsis
            </textarea>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
