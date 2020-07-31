import React, {useState, useEffect} from 'react';
// import Table from "../components/Table/index";
import API from "../utils/API";
// import Button from "../components/Button";
import {Table, TableRow, TableData} from "../components/Table";

function TablePage() {

  const [employees, setEmployees] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.getEmployees()
      .then(res => 
          setEmployees(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteEmployee(id) {
    API.deleteEmployee(id)
      .then(res => loadEmployees())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveEmployee({
        name: formObject.name,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadEmployees())
        .catch(err => console.log(err));
    }
  };

    return (
        <>
        <br/>
        <h1 style={{textAlign:"center"}}>Employee Directory</h1>
        <br/>
        <br/>
        {/* <Table>
          {employees.length ? (
            <TableRow>
              <TableData>
                    {employees.firstName}
              </TableData>
              <TableData>
                    {employees.lastName}
              </TableData>
              <TableData>
                    {employees.id}
              </TableData>
              <TableData>
                    {employees.department}
              </TableData>
            </TableRow>
          ) : (
            <TableRow>
              <TableData>
              Nothin
              </TableData>
            </TableRow>
          )}
        </Table> */}
        <Table>
                {employees.map(employee => (
                  <TableRow>
                    <TableData>
                      {employee.firstName}
                    </TableData>
                    <TableData>
                      {employee.lastName}
                    </TableData>
                    <TableData>
                      {employee.id}
                    </TableData>
                    <TableData>
                      {employee.department}
                    </TableData>
                  </TableRow>
                ))}
        </Table>
        </>
    )
};

export default TablePage;