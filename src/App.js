import React, {useEffect} from 'react';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Provider } from 'react-redux';
import store from './store';

import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <React.Fragment>
        <SearchBar/>
          <div className="container">
            <AddBtn/>
            <AddLogModal/>
            <EditLogModal/>
            <AddTechModal/>
            <TechListModal/>
          <Logs/>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
