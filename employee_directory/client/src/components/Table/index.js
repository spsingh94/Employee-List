import React, { Children } from "react";
import API from "../../utils/API";
import Button from "../Button/index";
// import $ from "jquery";

export function Table({children}) {

          // function helloFunc() {
    //     $("#hello").click(() => {
    //         console.log("hi");
    //     });
        
    // }

  return (
    <table className="table">
      <thead>
        <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Employee ID</th>
      <th scope="col">Employee Department</th>
      <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}



// export function TableHeader ({children}) {
// return <th scope="col">{children}</th>
// }

export function TableRow ({children}) {
return <tr>{children}</tr>
}

export function TableData ({children}) {
return <td>{children}</td> 
}
