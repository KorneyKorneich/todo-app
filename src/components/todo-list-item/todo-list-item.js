import React, { Component } from "react";
import "./todo-list-item.css"

export default class TodoListItem extends Component{

    render() {
        const { label, onDeleted,
                onToggleDone, onToggleImportant,
                important, done 
            } = this.props;

        
        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        };
        if(important) {
            classNames += ' important';
        }

        return (
        <div className={classNames}>
            <span
            className = 'todo-item-label' 
            onClick = {onToggleDone}>
                {label}
            </span>
            <div className="buttons">
                <button className="important-mark btn"
                onClick={onToggleImportant}>!</button>
                <button className="to-trash btn"
                onClick={onDeleted}>-</button>
            </div>
        </div>);
    };
};