import React from "react";
import '../css/style.css'

const Header = (props) => {

  return (
    <header>
      <div className="logo">Logo</div>
      <input type="text" onChange={props.keywords} />
      <button onClick={props.click}>Toggle</button>
    </header>
  );
}

export default Header