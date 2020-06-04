// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import Blogs from './pages/blogs.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  Link,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <Router>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/blogs'><Blogs/></Route>
            <Route exact path='/home'><Home/></Route>
    </Router>

    </div> 
  );
}

export default App;

