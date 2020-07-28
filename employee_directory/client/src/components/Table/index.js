import React from "react";
import $ from "jquery";

function Table() {

    // function helloFunc() {
    //     $("#hello").click(() => {
    //         console.log("hi");
    //     });
        
    // }

      // Setting our component's initial state
  const [employees, setEmployees] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadEmployees()
  }, [])

  // Loads all books and sets them to books
  function loadEmployees() {
    API.loadEmployees()
      .then(res => 
        setEmployees(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteEmployee(id) {
    API.deleteEmployee(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveEmployee({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

return (
    <table className="table">
  <thead>
    <tr>
      <th id="hello" onClick={helloFunc} scope="col">#</th>
      {/* <th scope="col">First</th> */}
      <input scope="col" placeholder="First"></input>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
);
};

export default Table;