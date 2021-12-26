import React from 'react';
import './App.css';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SendMail from './components/SendMail/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMsgIsOpen } from './features/mailSlice';


function App() {
  const sendMsgisOpen = useSelector(selectSendMsgIsOpen);


  return (
      <Router>
    <div className="app">
        <Header />
        <div className='app__body'>
        <Sidebar />

        <Switch>
          <Route path='/mail' exact>
            <Mail />
          </Route>

          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
        </div>
        {sendMsgisOpen && <SendMail />}
    </div>
      </Router>
  );
}

export default App;
