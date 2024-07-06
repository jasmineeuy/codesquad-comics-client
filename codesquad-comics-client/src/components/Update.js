import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { bookId } = useParams();

  //create state and use setter function to intialize as empty object
  const [book, setBookState] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.statusCode === 200) {
          setBookState(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const submitUpdateForm = (event) => {
    event.preventDefault();
    console.log("updateForm working");
    const body = {
      title: event.target.title.value,
      author: event.target.author.value,
      publisher: event.target.publisher.value,
      genre: event.target.genre.value,
      numPages: event.target.numPages.value,
      rating: event.target.rating.value,
      synopsis: event.target.synopsis.value,
    };
    fetch(`http://localhost:8080/api/books/edit/${bookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.statusCode);
        if (result.statusCode === 201) {
          console.log("result", result);
          setBookState(result.data);
          navigate("/admin");
        } else {
          throw new Error(result.error.message);
        }
      });
  };

  const onSubmitFormChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <main>
        <form onSubmit={submitUpdateForm}>
          <h1>Update Comic</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value="title value stored in the database"
              onChange={onSubmitFormChange}
              required="true"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value="author value stored in the database"
              onChange={onSubmitFormChange}
              required="true"
            />
          </div>
          <div>
            <label htmlFor="publisher-select">Publisher</label>
            <select
              name="publishers"
              id="publisher-select"
              onChange={onSubmitFormChange}
              required="true"
            >
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
              onChange={onSubmitFormChange}
              required="true"
            />
          </div>
          <div>
            <label htmlFor="numPages">Number of Pages</label>
            <input
              type="number"
              name="numPages"
              id="numPages"
              value="255"
              onChange={onSubmitFormChange}
              required="true"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              value="5"
              onChange={onSubmitFormChange}
              required="true"
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              name="synopsis"
              rows="2"
              cols="40"
              onChange={onSubmitFormChange}
              required="true"
            >
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
