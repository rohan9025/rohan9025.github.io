
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import Blogs from './pages/blogs.js'
import Admin from './auth/admin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  Link,
  Redirect,
  browserHistory
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    
    <Router basename={process.env.PUBLIC_URL}>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/blogs'><Blogs/></Route>
            <Route exact path='/travel'><Blogs section="travel"/></Route>
            <Route exact path='/projects'><Blogs section="travel"/></Route>
            <Route exact path='/movies'><Blogs section="travel"/></Route>


            <Route exact path='/home'><Home/></Route>
            <Route exact path='/admin'><Admin/></Route>
            

    </Router>

    </div> 
  );
}

export default App;

