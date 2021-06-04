import React from "react";

export default function Search() {
  return (
    <div className="container">
      <form>
        <input
          className="locationButton"
          type="text"
          placeholder="Enter location"
          autoFocus="on"
        />{" "}
        <input className="searchButton" type="submit" value="Search" />{" "}
        <input
          className="currentButton"
          type="submit"
          value="Current location"
        />
      </form>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
