import './Example.css';
// import React from 'react'
import React from 'react';




// CLASS COMPONENT
// create class that extends React.Component
class Examples extends React.Component {

// create render method
    render(){

    // Return the content of the component
    return <h1>Hello, this is my first component</h1>;
    }
};



// FUNCTIONAL Component
const Example = (props)=>{

    // return the component's content
    return (
    <div>
     <h1>This is my first functional component, {props.name}</h1>
     <h1 class={props.color}>This is my first functional component, {props.name}</h1>
    </div>
    )
}





// export the component
export default Example;
