import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import JSON from './db.json'

// Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

  state = {
    news: JSON,
    filtered: [],
    showNews: false
  }
  
  getKeyword = (event) => {
    event.target.value = event.target.value + 'own';
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1
    })
    // console.log(filtered);
    this.setState({
      filtered
    })
  }
  toggleNews = () => {
    const show = this.state.showNews;
    // console.log(show);
    this.setState({
      showNews: !show
    })
  }
  
  render() {
    let newsFiltered = this.state.filtered;
    let newsAll = this.state.news;
    
    return <div>
        <Header click={this.toggleNews} keywords={this.getKeyword} />
        <NewsList news={this.state.filtered.length === 0 ? newsAll : newsFiltered} />
      </div>;
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));