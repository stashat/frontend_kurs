import React from 'react';
export default function Student(props)  {
    // console.log(props)
    // return React.createElement(
    //     'div', {}, [
    //         React.createElement('h2', {}, props.name),
    //         React.createElement('h2', {}, `Fakultet: ${props.fakultet}`),
    //         React.createElement('hr')
    //     ]
    // );
    return (<div>
        <h2>{props.name}</h2>
        <h3>{props.fakultet}</h3>
        <hr></hr>
    </div>);
};
