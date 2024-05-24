import React from "react";

const Update = () => {
  return (
    <div>
      <main>
        <form action="#">
          <h1>Update Comic</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value="title value stored in the database"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value="author value stored in the database"
            />
          </div>
          <div>
            <label htmlFor="publisher-select">Publisher</label>
            <select name="publishers" id="publisher-select">
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
              <option value="" selected>
                publisher value stored in the database
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              name="genre"
              id="genre"
              value="genre data stored in the database"
            />
          </div>
          <div>
            <label htmlFor="num-pages">Number of Pages</label>
            <input type="number" name="num-pages" id="num-pages" value="255" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" id="rating" value="5" />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea id="synopsis" name="synopsis" rows="2" cols="40">
              synopsis value stored in the database
            </textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default Update;
