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
            data: [
                {id: "0", text: "Выспаться", completed: true},
                {id: "1", text: "Сходить на море", completed: false},
                {id: "2", text: "Поиграть в баскетбол", completed: false},
            ]
        }

        this.id = Math.floor(Math.random() * 100);

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(text) {
        const newItem = {
            id: this.id++,
            text: text,
            completed: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    deleteTodo(id) {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id)
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <TodoForm addTodo={this.addTodo} />
                <TodoList data={this.state.data} id={this.state.data.id} deleteTodo={this.deleteTodo} />
                <AppFooter />
            </div>
        )
    }
}
