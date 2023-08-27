
import  "./../Css/Filter/Filter.css";


const ExpensesFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeFilteredyear(event.target.value);
    }
    let today = new Date();
    today.setHours(0,0,0,0);
    let years = [];
    for (let i = 0; i < 5; i++) {
        years.push(today.getFullYear() - i);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>

                    {
                        years.map((year) => {
                            return <option key={year} value={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )

}

export default ExpensesFilter;