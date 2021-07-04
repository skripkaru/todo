import React, {Component} from 'react';
import './App.css';

import AppHeader from '../AppHeader/AppHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import AppFooter from '../AppFooter/AppFooter';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('data') || '[]'),
            filter: 'all',
        }

        this.id = Math.floor(Math.random() * 100);

        this.onAddTodo = this.onAddTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onToggleChecked = this.onToggleChecked.bind(this);
    }

    onAddTodo(text) {
        const newItem = {
            id: this.id++,
            text: text,
            isChecked: false
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            localStorage.setItem('data', JSON.stringify(newArr))

            return {
                data: newArr,
            }
        })
    }

    onDeleteTodo(id) {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id)
            localStorage.setItem('data', JSON.stringify(newArr))
            return {
                data: newArr
            }
        })
    }

    onToggleChecked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, isChecked: !old.isChecked};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            localStorage.setItem('data', JSON.stringify(newArr))
            return {
                data: newArr
            }
        })
    }

    filterTodo(items, filter) {
        if (filter === 'completed') {
            return items.filter(item => item.isChecked);
        } else if (filter === 'active') {
            return items.filter(item => !item.isChecked);
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, id, filter} = this.state;
        const allTodo = data.length;
        const visiblePosts = this.filterTodo(data, filter);

        return (
            <div className="App">
                <AppHeader />
                <TodoForm
                    onAddTodo={this.onAddTodo} />
                <TodoList
                    posts={visiblePosts}
                    id={id}
                    onDeleteTodo={this.onDeleteTodo}
                    onToggleChecked={this.onToggleChecked} />
                <AppFooter
                    allTodo={allTodo}
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
            </div>
        )
    }
}
