import React, { Component } from "react";
import Input from "./Components/input";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";
import Header from "./Components/Header";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: 0,
      selectType: "income",
      income: [
        {
          description: "Salary",
          amount: 3000,
          date: "6/19/2018",
          time: "08:00:05AM"
        }
      ],
      expenses: [
        {
          description: "CarTax",
          amount: 300,
          date: "6/19/2018",
          time: "10:00:05AM"
        }
      ]
      // balance:0,
    };
  }

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  handleChangeAmount = e => {
    this.setState({ amount: e.target.value });
  };

  changeType = e => {
    this.setState({ selectType: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let arr1 = [...this.state.income];
    let arr2 = [...this.state.expenses];
    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString();
    if (this.state.description === "" || this.state.amount === "") {
      alert("Please enter valid inputs");
    } else {
      if (this.state.selectType === "income") {
        arr1.push({
          description: this.state.description,
          amount: this.state.amount,
          date: newDate,
          time: newTime
        });
        this.setState({ income: arr1 });
      } else if (this.state.selectType === "expenses") {
        arr2.push({
          description: this.state.description,
          amount: this.state.amount,
          date: newDate,
          time: newTime
        });
      }
      this.setState({ expenses: arr2 });
      this.setState({ description: "", amount: 0 });
    }
  };

  render() {
    const sumExpenses = this.state.expenses.reduce(function(
      accumulator,
      myObj
    ) {
      return accumulator + Number(myObj.amount);
    },
    0);
    const sumIncome = this.state.income.reduce(function(accumulator, myObj) {
      return accumulator + Number(myObj.amount);
    }, 0);

    const { description, amount, selectType, income, expenses } = this.state;
    // const bal=(sumExpenses-sumIncome);
    // this.setState({balance:bal})
    return (
      <div className="App">
        <Header title="Account balance" />
        <Input
          description={description}
          amount={amount}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeAmount={this.handleChangeAmount}
          addTransaction={this.handleTransaction}
          selectType={selectType}
          changeType={this.changeType}
          handleSubmit={this.handleSubmit}
          handleBalance={this.handleBalance}
        />
        <div className="transactions">
          <Income title="Income" income={income} />
          <Expenses
            className="expenses-container"
            title="Expenses"
            expenses={expenses}
          />
        </div>
        <div>
          <h3>Remaining Balance:{sumIncome - sumExpenses}€</h3>
        </div>
      </div>
    );
  }
}

export default App;
