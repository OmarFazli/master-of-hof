import React, { Component } from 'react';

class HigherOrderComponents extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name : {item.name}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderUserType = () => {
        const data  =this.state.userData;
        const maprows = data.filter(item => item.user_type == 'Designer').map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name : {item.name}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return maprows
    }
    renderStartWith = () => {
        const data  =this.state.userData;
        const maprows = data.filter(item => item.name.startsWith('J')).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name : {item.name}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return maprows
    }
    renderAge = () => {
        const data  =this.state.userData;
        const maprows = data.filter(item => item.age > 28 && item.age <= 50).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name : {item.name}</span>
                    <span className='tab'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return maprows
    }
    renderTotalYears = () => {
        const data  =this.state.userData;
        let total_years = 0;
        let i = 0;
        for(i=0;i<data.length;i++){
            if(data[i].user_type == 'Designer'){
                total_years = total_years+data[i].years;
            }
        }
        return total_years
    }
    render() {
        return (
            <React.Fragment id='display-page'>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul className='display-list'>{this.renderItems()}</ul>
                </div>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul className='display-list'>{this.renderUserType()}</ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <ul className='display-list'>{this.renderStartWith()}</ul>
                </div>
                <h1>Filter all databased on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                    <ul className='display-list'>{this.renderAge()}</ul>
                </div>
                <h1>Find the total years of the designers</h1>
                <div className="display-box">
                    <ul className='display-list'>{this.renderTotalYears()}</ul>
                </div>
            </React.Fragment>
        );
    }
}

export default HigherOrderComponents;