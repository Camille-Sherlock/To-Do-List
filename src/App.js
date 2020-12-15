import React, {Component} from 'react';
import StateProvider from "./wrapper/StateProvider";
import KeyStrokeHandler from "./wrapper/KeyStrokeHandler";
import TodoList from "./components/TodoList";

class App extends Component {
    render() {
        return (
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
            </StateProvider>
        );
    }
}

export default App;
