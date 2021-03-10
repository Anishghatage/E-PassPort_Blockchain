import React from 'react';
import ReactDOM from 'react-dom';
import { Router ,Switch,Route} from 'react-router-dom';
import {createBrowserHistory}  from 'history'; 
import './index.css';
import App from './components/App';
import ConductTransaction from './components/ConductTransaction';
import Blockchain from './components/Blockchain';
import TransactionPool from './components/TransactionPool';
import Transaction from './components/Transaction';
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/blockchain' component={Blockchain}/>
            <Route path='/conduct-transaction' component={ConductTransaction}/>
            <Route path='/transaction-pool' component={TransactionPool}/>
        </Switch>

    </Router>,
    document.getElementById('root'));


