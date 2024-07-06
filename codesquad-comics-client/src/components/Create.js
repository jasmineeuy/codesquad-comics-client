import React from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  //create handler function to keep track of change of each input when typing via console
  const handleFormChange = (event) => {
    console.log(event.target.value);
  };
  //hanler function to prevent autosubmit of form and print working if it works
  const createFormSubmission = (event) => {
    event.preventDefault();
    const body = {
      title: event.target.title.value,
      author: event.target.author.value,
      publisher: event.target.publisher.value,
      genre: event.target.genre.value,
      pages: event.target.pages.value,
      rating: event.target.rating.value,
      synopsis: event.target.synopsis.value,
    };
    console.log(
      "checking",
      body.title,
      body.author,
      body.publisher,
      body.genre,
      body.pages,
      body.rating,
      body.synopsis
    );

    fetch("http://localhost:8080/api/books/create/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json(), console.log("the body is", body))
      .then((result) => console.log(result), navigate("/admin"))
      .catch((error) => console.log(error));
  };

  console.log("createFormSubmission working");

  const content = "Synopsis";
  return (
    <div>
      <main>
        <form onSubmit={createFormSubmission}>
          <h1>CREATE NEW COMIC</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="title"
              id="title"
              placeholder="Title"
              required={true}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="author"
              id="author"
              placeholder="Author"
              required={true}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="publisher">Publisher</label>
            <select
              className="publisher"
              id="publisher"
              required={true}
              onChange={handleFormChange}
            >
              <option defaultValue="" disabled onChange={handleFormChange}>
                Select
              </option>
              <option defaultValue="boom-box">BOOM!Box</option>
              <option defaultValue="dc-comics">DC Comics</option>
              <option defaultValue="harry-abrams">Harry N. Abrams</option>
              <option defaultValue="icon-books">Icon Books</option>
              <option defaultValue="image-comics">Image Comics</option>
              <option defaultValue="marvel">Marvel</option>
              <option defaultValue="simon-schuster">Simon & Schuster</option>
              <option defaultValue="top-shelf-productions">
                Top Shelf Productions
              </option>
              <option defaultValue="viz-media-llc">VIZ Media LLC</option>
            </select>
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              className="genre"
              id="genre"
              placeholder="Genre"
              required={true}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="pages">Number of Pages</label>
            <input
              type="number"
              className="pages"
              id="pages"
              placeholder="Number of Pages"
              required={true}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              className="rating"
              id="rating"
              required={true}
              onChange={handleFormChange}
              placeholder="rating"
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synospsis</label>

            <textarea
              id="synopsis"
              className="synopsis"
              rows="2"
              cols="40"
              required={true}
              onChange={handleFormChange}
              defaultValue={content}
            />
          </div>
          <div>
            <input type="Submit" defaultValue="Submit" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Create;
