import React from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header'
import { IncomesExpences } from './components/IncomesExpences';
import { TransactionList } from './components/TransactionList';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Balance />
        <IncomesExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </React.Fragment>
  )
}

export default App
