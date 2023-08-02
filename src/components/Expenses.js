import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Filter/ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterInfoText,setFilterInfoText] = useState('2019 , 2021 & 2022');

    const changeFilteredYear = (selectedYear) => {
       setFilteredYear(selectedYear);
    }
  return (
    <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilteredyear={changeFilteredYear}/>
      <div className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;