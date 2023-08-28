import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterInfoText,setFilterInfoText] = useState('2019 , 2021 & 2022');

    const changeFilteredYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilteredyear={changeFilteredYear}/>
            <div className="expenses-list">
                <ExpensesList items={filteredExpenses}/>
            </div>
        </div>
    );
}

export default Expenses;