import React, {Component} from 'react';
import './AppFooter.css'

export default class AppFooter extends Component {
    constructor(props) {
        super(props)

        this.buttons = [
            {name: 'all', text: 'Все'},
            {name: 'active', text: 'Активные'},
            {name: 'completed', text: 'Завершенные'}
        ]
    }

    render() {
        const {allTodo, filter, onFilterSelect} = this.props;

        const buttons = this.buttons.map(({name, text}) => {
            const active = filter === name;
            const clazz = active ? 'active' : null;
            return (
                <button
                    type='button'
                    key={name}
                    className={clazz}
                    onClick={() => onFilterSelect(name)}>
                    {text}</button>
            )
        })

        return (
            <footer className="AppFooter">
                <div>Заметки {allTodo}</div>
                <div className="TodoSortPanel" >
                    {buttons}
                </div>
            </footer>
        )
    }
};
