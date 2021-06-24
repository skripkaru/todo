import React, {Component} from 'react';
import './TodoForm.css';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })

        // console.log(this.state.value);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.text)
    }

    render() {
        return (
            <form
                className="TodoForm"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Введите что-нибудь..."
                    onChange={this.onChange}
                    value={this.state.value} />
            </form>
        )
    }
};
