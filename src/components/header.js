import React,{Component} from 'react'
import '../css/style.css'

class Header extends Component {

  state = {
    keywords: 'Hello'
  }
  
  inputChangeHandler = (e) => {
    // console.log(e.target.value);
    this.setState({ keywords: e.target.value });
  }

  render() {
    return <div>
        <header>
          <div className="logo">logo</div>
          <input type="text" onChange={this.inputChangeHandler} />
        </header>
      </div>;
  }
}

export default Header;