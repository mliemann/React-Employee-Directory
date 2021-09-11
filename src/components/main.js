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
this.filterData(event.target.value)
  } 

  Sort = event => {
    console.log(event.target.value)
   const value = event.target.value
   this.setState({
    sort: value, 
})
  this.sortData(event.target.value);
//   if (this.state.filter===''){
//     return;
// } else {
//     this.filterData(this.state.filter, this.state.results);
// }
  }

  sortData= event => {
    console.log("function start SoRT")
    this.state.users.sort(function(a,b) {
        if(event==='Last') {
            if (a.name.last > b.name.last) {
                return 1;
            } else if (a.name.last < b.name.last) {
                return -1;
            } return 0;
        } else {if (event==='Age') {
          if (a.dob.age > b.dob.age) {
              return 1;
          } else if (a.dob.age < b.dob.age) {
              return -1;
          }  return 0;
      } } 
    })
    console.log(this.state.users);
};



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
