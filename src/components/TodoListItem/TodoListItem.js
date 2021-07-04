import React from 'react';
import './TodoListItem.css';
import {IconContext} from "react-icons";
import {BsTrash} from "react-icons/bs";

const TodoListItem = ({id, text, onDeleteTodo, onToggleChecked, isChecked}) => {
    return (
        <li className="TodoListItem">
            <div className="Input" >
                <input
                    id={`todo-${id}`}
                    type="checkbox"
                    defaultChecked={isChecked}
                    onChange={onToggleChecked}/>
                <label
                    htmlFor={`todo-${id}`}
                >{text}</label>
            </div>
            <div>
                <button onClick={onDeleteTodo}>
                    <IconContext.Provider value={{color: "#416ad6", size: "1.3em"}}>
                        <BsTrash />
                    </IconContext.Provider>
                </button>
            </div>
        </li>
    )
};

export default TodoListItem;
