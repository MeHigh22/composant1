import React, { Fragment } from "react";

const searchBar = () => {
  return (
    <Fragment>
      <form>
        <label>
          Search :<input type="text"></input>
        </label>
        <input type="submit" value="Go"></input>
      </form>
    </Fragment>
  );
};

export default searchBar;
