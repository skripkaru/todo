import React from 'react';
import './TodoList.css'

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({data, deleteTodo}) => {

    const items = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
            <TodoListItem
            {...itemsProps}
            key={item.id}
            id={id}
            deleteTodo={() => deleteTodo(id)}/>
        )
    })

    return (
        <ul className="TodoList">
            {items}
        </ul>
    )
};

export default TodoList;
