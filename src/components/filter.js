import React from "react";

function Filter(props) {
  return (
    <form>
      <div className="form-group">
        <label for="Genderfilter">Filter By Gender</label>
        <select default ="Select One" className="form-control" id="Genderfilter" onChange={event=>props.FilterG(event)}>   
        <option value= {props.value3}>Reset</option>
        <option value= {props.value1}>Male</option>
        <option value= {props.value2}>Female</option>
          
        </select>
      </div>
      <div className="form-group">
        <label for="Sort">Sort?</label>
        <select className="form-control" id="Sort" onChange={event=>props.Sort(event)}>
          <option value= {props.value3}>Reset</option>
          <option value= {props.value1}>Age</option>
          <option value= {props.value2}>Last</option>
        </select>
      </div>
    </form>
  );
}

export default Filter;
