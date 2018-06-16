import React, { Component } from "react";
import '../css/style.css'

class Header extends Component {
  state = {
    keywords: ""
  };

  inputChangeHandler = event => {
    const value = event.target.value != "" ? "active" : "non-active";
    this.setState({
      active: value,
      keywords: event.target.value
    });
  };

  render() {
    
    return (
      <header className={this.state.active}>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header