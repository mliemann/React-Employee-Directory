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

  // userSetup = query => {
  //   API.search(query)
  //     .then(res => this.setState({ users: res.data }))
  //     .catch(err => console.log(err));
  //     console()
  // };



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
