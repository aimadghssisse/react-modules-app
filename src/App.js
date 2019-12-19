import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from 'react';
import routes from './routes'
import { profile, auth } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import store from './store'
function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const dispatch =  useDispatch()
  // console.log(store.getState());
   //dispatch(auth())
  // console.log(store.getState());

  const profile1 = useSelector(state => {
    console.log(state);
    return state.global.profile1
  })
    let handleClick = () => {
      console.log(profile());
      dispatch(profile())

    }
  return (
    <Router>
      <div className="App">
        <header>
          <ul className="App-nav">
            {routes.map(route => (
              <li key={route.name} className={currentTab === route.name ? 'active' : ''}>
                <Link to={route.path} onClick={() => setCurrentTab(route.name)}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </header>
        <div>
        { profile1 }
        <br/>
        <button onClick={handleClick}>
        change state
        </button>
        </div>
          <div className="App-content">
          {routes.map(module => (
            <Route {...module} key={module.name} />
          ))}
        </div>
      </div>
    </Router>
  );
}
export default App;
