import React from "react";

export default function Search() {
  return (
    <div class="container">
      <form>
        <input type="text" placeholder="Enter location" autoFocus="on" />
        <input type="submit" value="Search" />
        <input type="submit" value="Current location" />
      </form>
    </div>
  );
}
