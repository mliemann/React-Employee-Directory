import React, { Component } from "react";
import Table from "./table";
import Filter from "./filter";
import API from "../utils/API";

class Main extends Component {
  state = {
    users: [],
  };
users
  componentDidMount() {
    API.fetchUsers().then((res) =>
      this.setState({
        users: res.data.results
      })
    );
  }

  render() {
    return (
      <div>
        <Filter/>
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default Main;
