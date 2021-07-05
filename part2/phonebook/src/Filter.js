import React from "react";

const Filter = ({setFilter}) => {
  return (
    <form>
      <div>
        filter shown with
        <input onChange={({target}) => {
          setFilter(target.value)
          console.log(target.value)
        }}></input>
      </div>
    </form>
  );
};

export default Filter;
