import React from 'react';
import './TodoListItem.css';
import {IconContext} from "react-icons";
import {BsPencil, BsTrash} from "react-icons/bs";

const TodoListItem = ({id, text, deleteTodo}) => {
    return (
        <li className="TodoListItem">
            <div className="RadioInput">
                <input id={`todo-${id}`} type="checkbox" />
                <label htmlFor={`todo-${id}`}>{text}</label>
            </div>
            <div>
                <button>
                    <IconContext.Provider value={{color: "#416ad6", size: "1.3em"}}>
                        <BsPencil />
                    </IconContext.Provider>
                </button>
                <button onClick={deleteTodo}>
                    <IconContext.Provider value={{color: "#416ad6", size: "1.3em"}}>
                        <BsTrash />
                    </IconContext.Provider>
                </button>
            </div>
        </li>
    )
};

export default TodoListItem;
