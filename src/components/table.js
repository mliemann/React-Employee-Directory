import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th scope="col">ID</th> */}
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return(
          <tr key={user.login.uuid}>
            <td data-label="First">{user.name.first}</td>
            <td data-label="Last">{user.name.last}</td>
            <td data-label="Email">{user.email}</td>
            <td data-label="Age">{user.dob.age}</td>
            <td data-label="Phone">{user.cell}</td>
            <td data-label="Gender">{user.gender}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
