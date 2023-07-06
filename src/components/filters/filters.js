import React, { Component } from "react";
import './filters.css'

export default class Filters extends Component{

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {
    const { filter, onFilterChange } = this.props
    console.log(filter);
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : 'btn-outline-secondary';
      return(
        <button className={clazz} key={name}
        onClick={() => onFilterChange(name)}>{label}</button>
      );
    });
    return (
      <div className='filterButtons'>
        {buttons}
      </div>
    );
  };
};