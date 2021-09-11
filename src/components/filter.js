import React from "react";

function Filter(props) {
  return (
    <form>
      <div className="form-group">
        <label for="Genderfilter">Filter By Gender</label>
        <select className="form-control" id="Genderfilter">
          <option>Male</option>
          <option>Female</option>
          <option>Both</option>
        </select>
      </div>
    </form>
  );
}

export default Filter;
