import React from 'react';

let sumIncome = 0;

const Income = (props) => {
    sumIncome=props.income.reduce((accumulator, myObj)=> {
        return accumulator + Number(myObj.amount);
      }, 0);
    return (<div className="income-container">        
        <h3> {props.title} </h3>
        <table className="tableDisplay">
        <tbody>                  
               <tr className="table-header">
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Added on</th>
                </tr>
                {props.income.map(transaction=><tr className="table_row"key ={Math.random()}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}€</td>
                <td>{transaction.date}  {transaction.time}</td>
                </tr>
               )}   
          
        </tbody> 
        </table>
        <h5>Total Income:{sumIncome}€</h5> 
        
        </div>)
};
export default Income;