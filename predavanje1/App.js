import React from 'react';
import ReactDOM from 'react-dom';
import  Student  from './Student';
console.log(React, ReactDOM)
const App = ()=>{
    // return React.createElement(
    //     'div',{}, [
    //         React.createElement('h1', {id:'naslov'}, 'Student'),
    //         React.createElement(Student, {name:'Marko', fakultet:'FPN'}),
    //         React.createElement(Student, {name:'Maja', fakultet:'PMF'}),
    //         React.createElement(Student, {name:'Mirko', fakultet:'ETF'})
    //     ]
    return (
    <div>
        <h1 id="naslov">Student</h1>
        <Student name='Marko' fakultet='FPN'></Student>
        <Student name='Maja' fakultet='PMF'></Student>
        <Student name='Mirko' fakultet='ETF'></Student>
    </div>
    );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'))
