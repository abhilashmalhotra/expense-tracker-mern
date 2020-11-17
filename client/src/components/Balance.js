import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transations } = useContext(GlobalContext)
    const balance = transations.map(transation => transation.amount).reduce((prev, curr) => curr += prev, 0).toFixed(2)
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </React.Fragment>
    )
}
