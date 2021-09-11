import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Table(props) {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Birthday</th>
      <th scope="col">Email</th>
      <th scope="col">Cell</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    {props.results.map((user, index) => 
                        

                        <tr key = {index}>
                            <td scope='row' data-label='ID' >{user.id}</td>
                            <td data-label='First' >{user.firstname}</td>
                            <td data-label='Last' >{user.lastname}</td>
                            <td data-label='Email' >{user.email}</td>
                            <td data-label='Birthday' >{user.birthday}</td>
                            <td data-label='Phone' >{user.cell}</td>
                            <td data-label='Gender' >{user.sex}</td>
                        </tr>

            )}
  </tbody>
</table>
  );
}

export default Table;
