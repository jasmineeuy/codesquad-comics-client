import React from "react";
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
              <tr>
                <td>Batman: The Dark Knight Returns</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Black Panther: A Nation Under Our Feet Book 1</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Fun Home:A Family Tragicomic</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Hunter X Hunter Vol. 1</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Lumberjanes Vol. 1</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>March: Book One</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>One Piece, Vol. 1 : Romance Dawn</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Parable of the Sower</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Queer: A Graphic History</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>The Walking Dead, Vol. 1 Days Gone Bye</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
              <tr>
                <td>Watchmen</td>
                <td>
                  <input className="edit-btn" type="Button" value="EDIT" />
                </td>
                <td>
                  <input className="delete-btn" type="Button" value="DELETE" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
