import React, { Component } from "react";

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import AddingPanel from '../adding-panel';
import Nav from '../nav';

export default class App extends Component {

maxId = 1;

  state = {
    appData: [
      this.createNewItem('first task'),
      this.createNewItem('second task'),
      this.createNewItem('third task')
    ],
    term: '',
    filter:'all'
  };

  deleteItem = (id) => {
    this.setState(({appData}) => {

      const idx = appData.findIndex((el) => el.id === id);
      const updatedData = [...appData.slice(0, idx), ...appData.slice(idx + 1)];

      return{
        appData: updatedData
      };

    });
  };

  createNewItem (label) {  
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }
  
  addItem = (text) => {
    const newItem = this.createNewItem(text);
    

    this.setState(({appData}) => {

      const updatedData = [...appData, newItem];

      return{
        appData: updatedData,
      }
    });
  };

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,
       [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleDone = (id) => {
    this.setState(({appData}) => {
      return {
        appData: this.toggleProp(appData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({appData}) => {
      return {
        appData: this.toggleProp(appData, id, 'important')
      };
    });
  };

  search(items, term) {
    if(term.length === 0) return items;

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  onSearchChange = (term) => {
    this.setState({term});
  };

  filter(items, filter) {
    switch(filter){
      case 'all': default: 
        return items;
      
      case 'done':
        return items.filter((item) => item.done);

      case 'active':
        return items.filter((item) => !item.done);
    };
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  }


  render() {
    const {appData, term, filter } = this.state
    const doneTasks = appData.filter((el) => el.done).length; 
    const activeTasks = appData.length - doneTasks;

    const visibleItems = this.filter(this.search(appData, term), filter);
    
    return (
    <div className = 'app'>
      <AppHeader  active = {activeTasks} done = {doneTasks} />
      <Nav onSearchChange = {this.onSearchChange}
           filter = { filter }
           onFilterChange = {this.onFilterChange}/>
      <TodoList 
      todos = {visibleItems}
      onDeleted = {this.deleteItem}
      onToggleDone = {this.onToggleDone}
      onToggleImportant = {this.onToggleImportant}
      />
      
      <AddingPanel 
      onAdd = {this.addItem}/>
     </div>
   );
  }
};

