import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db';

// Components
import Header from './components/header'
import NewsList from './components/news_list.js'

class App extends Component {

  state = {
    news: JSON
  }
  
  render() {
    return (
      <div>
        <Header />
        <NewsList new={this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));