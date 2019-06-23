import React from 'react';
import './Todo.css'

function Todo() {
    return (
        <div>
            <div className="reminders">
                <p>reminders</p>
                <div className="reminder--btns" onclick="displayAddItem()">
                <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="reminders--list">
                <ul id="listOfItemsID" className="things">
                </ul>
            </div>
            <form id="formToAddItemsID" className="addItems" style={{display: 'none'}}>
                <input type="text" name="item" placeholder="What do you need to do today?" required />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default Todo;