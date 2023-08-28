import React, { useState } from 'react';
import "./../Css/NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formStatus, setFormStatus] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    let expenseForm;
    const statusHandler = () => {
        setFormStatus(!formStatus)
    };


    return (
        <div className="new-expense">
            {!formStatus && <button onClick={statusHandler}>Add New Expense</button>}
            {formStatus && <ExpenseForm onCancel={statusHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    );
};

export default NewExpense;
