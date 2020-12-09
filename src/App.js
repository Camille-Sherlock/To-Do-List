import React,{Component} from 'react'
import './App.css';
import {Input } from 'antd';
import TodoList from "./components/TodoList";
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList:[{
                id: 1,
                name: '任务1',
                isCompleted: false
            },{
                id: 2,
                name: '任务2',
                isCompleted: true
            }],

            inputValue:''
        };
    }


    handleAdd(e) {
        let taskName = e.target.value;
        if (!taskName) {
            return ''
        }
        let taskId = Math.floor(Math.random() * 9000) + 1000;
        let todos = this.state.todoList
        todos.push({ id: taskId, name: taskName, isCompleted: false })
        this.setState({
            todos
        })
    }

    handleDeleteTask(taskId) {
        let todoList = this.state.todoList
        todoList = todoList.filter(item => {
            return item.id !== taskId
        })
        this.setState({ todoList })
    }

    handleToggleComplete(taskId) {
        let todoList = this.state.todoList
        for (let i in todoList) {
            if (todoList[i].id === taskId) {
                todoList[i].isCompleted = !todoList[i].isCompleted
                break;
            }
        }
        this.setState({ todoList })
    }

    handleRename(taskId, name) {
        let todoList = this.state.todoList
        for (let i in todoList) {
            if (todoList[i].id === taskId) {
                todoList[i].name = name
                break;
            }
        }
        this.setState({ todoList })
    }


  render(){
      let statistics = {
          todoCount: this.state.todoList.length || 0,
          todoCompleteCount: this.state.todoList.filter(todo => {
              return todo.isCompleted
          }).length
      }
    return (
        <div className="page">
            <h2>Todo List</h2>
            <header>
                <Input placeholder="请输入事件" onPressEnter={(e)=>this.handleAdd(e)} /> &nbsp;&nbsp;
            </header>
            <TodoList todos={this.state.todoList} removeTask={(taskId)=>this.handleDeleteTask(taskId)} toggleComplete={(taskId)=>this.handleToggleComplete(taskId)} rename={this.handleRename.bind(this)} />
            <footer>{statistics.todoCompleteCount}已完成 / {statistics.todoCount}总数</footer>
        </div>
    );}
}

export default App;
