import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomesExpences = () => {
    const { transations } = useContext(GlobalContext);
    const income = transations.map(transation => transation.amount).filter(amount => amount >= 0).reduce((prev, curr) => curr + prev, 0).toFixed(2);
    const expence = transations.map(transation => transation.amount).filter(amount => amount < 0).reduce((prev, curr) => curr + prev, 0).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expence)}</p>
            </div>
        </div>
    )
}
