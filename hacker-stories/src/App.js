import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const App = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = () => {
  const robin = new Developer("Robin", "Singh");

  const dennis = new Developer("Dennis", "Ritchie");

  return (
    <div>
      {robin.getName()};{dennis.getName()};
    </div>
  );
};

export default App;
