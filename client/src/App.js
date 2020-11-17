import React from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header'
import { IncomesExpences } from './components/IncomesExpences';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomesExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
