import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from 'react';
import routes from './routes'
import store from './store';
import { Provider } from 'react-redux';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  console.log(store.getState());
  return (
    <Provider store={store}>
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
          <div className="App-content">
          {routes.map(module => (
            <Route {...module} key={module.name} />
          ))}
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
