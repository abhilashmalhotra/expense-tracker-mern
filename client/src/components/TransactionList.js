import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transations } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {transations.map(transation => <Transaction key={transation.id} {...transation} />)}
            </ul>
        </React.Fragment>
    )
}
