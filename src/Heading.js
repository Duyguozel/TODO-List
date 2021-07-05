import './App.css';
import React from 'react';

class Heading extends React.Component {
    render() {
        return (
            <span>{this.props.title}</span>
        );
    }


}

export default Heading;
