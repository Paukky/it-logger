import React, {useEffect} from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <React.Fragment>
      <SearchBar/>
      <div className="container">
        <Logs/>
      </div>
    </React.Fragment>
  );
}

export default App;
