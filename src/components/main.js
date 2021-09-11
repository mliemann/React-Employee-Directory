import React, { Component } from "react";
import Table from "./table";
import Filter from "./filter";
import API from "../utils/API";

class Main extends Component {
  state = {
    users: [],
    users2: [],
    sort: '',
    filter1: ''
  }

  

  FilterG = event => {
    console.log(event.target.value)
   const value = event.target.value
   this.setState({
    filter1: value, 
})
this.filterData(event.target.value)

  } 

  filterData(event, users) {
    console.log('filterData function called')
    if (event === "Male") {
        const filteredArray = this.state.users.filter(x => x.gender === "male");
        this.setState({users: filteredArray});
        console.log(users);
    } else if (event === "Female") {
        const filteredArray = this.state.users.filter(x => x.gender === "female");
        this.setState({users: filteredArray});
        (console.log(users));
    } else {
        this.setState({users: this.state.users2});
    }
}

  Sort = event => {
    console.log(event.target.value)
   const value = event.target.value
   this.setState({
    sort: value, 
})
  this.sortData(event.target.value);
  if (this.state.filter1===''){
    return;
} else {
    this.filterData(this.state.filter1, this.state.users);
}
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
        users: res.data.results, users2: res.data.results
      })
    );
  }
  render() {
    return (
      <div>
        <Filter Sort={this.Sort} FilterG= {this.FilterG}/> {this.state.filter1}
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default Main;
