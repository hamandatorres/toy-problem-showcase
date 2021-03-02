import React, { Component } from 'react';

export default class FilterObject extends Component {
      component () {
        super();
        this.state = {
        employees: [
          {
            name: 'Carlos',
            title: 'Guy',
            age: 31,
          }
        ]
        userInput: '',
        filteredEmployees: [];
      }
      }
      render() {
        return(
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className='inputLine' onChange='' />
        <button className='confirmationButton' Onclick=''></button>
        <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
  
  )
}
