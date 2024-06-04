import React , {useState,useEffect} from "react";
import booksData from "../data/books";
const Admin = () => {
  const [books,setBooks] = useState([]);

  useEffect = (()=>{
    setBooks(booksData);
  },[])

  return (
    <div>
      <main>
        <div className="admin">
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
              {books.map((book) => {
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
