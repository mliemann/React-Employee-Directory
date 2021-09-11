import React, { Component } from "react";
import Table from "./table";
import API from "../utils/API";

class main extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
  }

  userSetup = query => {
    API.search(query)
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Filter/>
        <Table/>
      </div>
    );
  }
}

export default main;
