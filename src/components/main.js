import React, { Component } from "react";
import Table from "./table";
import Filter from "./filter";
import API from "../utils/API";

class Main extends Component {
  state = {
    users: [],
    sort: '',
    filter: ''
  }

  

  FilterG = event => {
    console.log(event.target.value)
   const value = event.target.value
   this.setState({
    filter: value, 
})
   if(value ==="Male"){
     console.log("TestMale")
     console.log(this.state.filter)
   } else {if(value ==="Female"){
    console.log("TestFemale")
  }} 
  }

  Sort = event => {
    console.log(event.target.value)
   const value = event.target.value
   this.setState({
    sort: value, 
})
   if(value ==="Ascending"){
     console.log("Ascending")
   } else {if(value ==="Decending"){
    console.log("Decending")
  }}
  }

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
        <Filter Sort={this.Sort} FilterG= {this.FilterG}/> {this.state.filter}
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default Main;
