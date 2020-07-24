import React from "react";
import $ from "jquery";

function Table() {

    function helloFunc() {
        $("#hello").click(() => {
            console.log("hi");
        });
        
    }

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