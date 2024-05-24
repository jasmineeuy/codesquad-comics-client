import React from "react";
import booksData from "../data/books";
const Admin = () => {
  return (
    <div>
      <main>
        <div class="admin">
          <h1>ADMIN PAGE</h1>
          <input type="Button" value="ADD NEW COMIC" />
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
              {booksData.map((book) => {
                return (
                  <tr>
                    <td>{book.title}</td>
                    <td>
                      <input className="edit-btn" type="Button" value="EDIT" />
                    </td>
                    <td>
                      <input
                        className="delete-btn"
                        type="Button"
                        value="DELETE"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
