import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

// Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/post_item';
import Conditional from './components/conditional';
import User from './components/user';

const App = () => {
  return <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link> <br />
          <Link to="/post">Posts</Link> <br />
          <Link to="/conditional">Conditional</Link> <br />
          <Link to={{
            pathname: '/profile'
          }}>Profile</Link> <br />
          <Link to="/user">User</Link> <br />
        </header>
        <hr/>
        <Switch>
          <Route path="/post/:id/:username" component={PostsItem} />
          <Route path="/post" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/user" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>;
}

ReactDOM.render(
  <App />,document.querySelector('#root')
)