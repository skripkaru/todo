import React from 'react';
import './TodoList.css'

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({posts, onDeleteTodo, onToggleChecked}) => {

    const items = posts.map(item => {
        const {id, ...itemsProps} = item;
        return (
            <TodoListItem
                {...itemsProps}
                key={item.id}
                id={id}
                onDeleteTodo={() => onDeleteTodo(id)}
                onToggleChecked={() => onToggleChecked(id)} />
        )
    })

    return (
        <ul className="TodoList">
            {items}
        </ul>
    )
};

export default TodoList;
