import React from 'react';


let sumExpenses=0;
const Expenses = (props) => {
    sumExpenses=props.expenses.reduce(function (accumulator, myObj) {
        return accumulator + Number(myObj.amount);
      }, 0);
    return (<div>
   
        <h3> {props.title} </h3>
        <table className="tableDisplay">
        <tbody>
        <tr className="table-header">
            <th>Description</th>
            <th>Amount</th>
            <th>Added on</th>
        </tr>        
            {props.expenses.map(transaction =><tr key ={Math.random()}>
                <td>{transaction.description}</td>
                <td>{transaction.amount} €</td>
                <td>{transaction.date} {transaction.time}</td>
               
                </tr>)}
        </tbody>
           
        </table>
        <h5>Total Expenses:{sumExpenses}€</h5>    
        </div>)
};

export default Expenses;