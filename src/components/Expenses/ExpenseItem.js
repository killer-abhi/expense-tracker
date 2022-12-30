import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css"


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.item.title);

    function clickHandler() {
        setTitle("Updated");
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.item.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.item.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;