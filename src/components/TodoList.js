import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search} from '../services/filter';
import PropTypes from 'prop-types';

export default function TodoList(props) {
    const {list, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    return (  console.log("todoList*******"),
              console.log(props),
                <div className="todolist">
                    <Header {...{addNew, mode, query, setSearchQuery}}/>
                    <FilteredList {...{items, changeStatus}}/>
                    <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
                </div>
    );
}


TodoList.prototype = {
    list:PropTypes.array,
    filter:PropTypes.String,
    mode:PropTypes.String,
    query:PropTypes.String,
    addNew:PropTypes.func,
    changeFilter:PropTypes.func,
    changeStatus:PropTypes.func,
    changeMode:PropTypes.func,
    setSearchQuery:PropTypes.func,
}
