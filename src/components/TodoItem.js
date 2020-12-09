import React, {Component} from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            inputValue: this.props.name
        }
    }

    toggleComplete() {
        this.props.toggleComplete(this.props.taskId)
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleEdit() {
        this.setState({isEditing: true})
    }

    handleSure() {
        this.props.rename(this.props.taskId, this.state.inputValue)
        this.setState({
            isEditing: false
        })
    }

    handleCancel() {
        this.setState({isEditing: false, inputValue: this.props.name})
    }

    handleDelete() {
        this.props.removeTask(this.props.taskId)
    }

    showItemList = () => {
        const {name, isCompleted} = this.props;
        if (isCompleted) {
            return <s>{name}</s>
        } else {
            if (this.state.isEditing) {
                return (
                    <span>
                        <input type="text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
                        &nbsp;&nbsp;
                        <button onClick={this.handleSure.bind(this)}>
                            Sure
                        </button>
                        &nbsp;&nbsp;
                        <button onClick={this.handleCancel.bind(this)}>
                            Cancel
                        </button>
                    </span>)
            } else {
                return (
                    <span>
                        <b>{name}</b>
                        &nbsp;&nbsp;
                        <button onClick={this.handleEdit.bind(this)}>Edit</button>
                    </span>)
            }
        }
    }

    render() {
        const {taskId, isCompleted} = this.props;
        const operation = this.showItemList();
        return (
            <li key={taskId}>
                <input type="checkbox" checked={isCompleted} onChange={() => this.toggleComplete()}/>
                &nbsp;&nbsp;
                {operation}
                &nbsp;&nbsp;
                <button onClick={() => this.handleDelete()}>Delete</button>
            </li>
        )
    }
}
