import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    name: "Mark",
    age: 15
  };
  render() {
    return (
      <div className="shopping-list">
        <h1>
          shopping list for {this.state.name} he is {this.state.age}
        </h1>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Linkedin</li>
        </ul>
      </div>
    );
  }
}

export default App;
