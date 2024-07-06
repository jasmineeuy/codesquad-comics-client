import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:8080";

  const [errorMessage, setErrorMessage] = useState("");

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

  const deleteBook = (bookId) => {
    fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log("success", result))
      .catch((error) => console.log("error", error));
  };

  return (
    // console.log("booking",books);
    <div>
      <main>
        <div className="admin">
          <h1>ADMIN PAGE</h1>
          <input type="Button" defaultValue="ADD NEW COMIC" />
        </div>
        <div className="table">
          <table className="comic-table">
            <thead>
              <tr>
                <th>COMIC TITLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr>
                  <td>{book.title}</td>

                  <td>
                    <Link to="/update" className="edit-btn">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <input
                      className="delete-btn"
                      type="Button"
                      defaultValue="DELETE"
                      onClick={deleteBook(book.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
