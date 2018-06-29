import React from 'react';


const Input = (props)=>{
   
  return (
    <form className="form">
        <input type="text" placeholder="Description" name="description" value={props.description} onChange={props.handleChangeDescription} />
        <input type="number" placeholder="Amount" name="amount" value={props.amount} onChange={props.handleChangeAmount}/>
        <select className="select-option"value={props.selectType} onChange={props.changeType}>
            <option  value = "income" >Income</option>
            <option value = "expenses">Expenses</option>
        </select>           
        <button className="submit_button"type="submit" value="Add" onClick={props.handleSubmit} >Add</button>
    </form>    
  );
}
  
export default Input;