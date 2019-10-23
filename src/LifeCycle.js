import React from 'react';
// import PropTypes from "prop-types";

class Main extends React.Component {
    state = {
        count : 0
    };
    // Life Cycle
    constructor(props) {
        super(props);
        console.log("1. Life Cycle Start! - constructor");
    }

    componentDidMount() {
        console.log("3. Life Cycle - componentDidMount");
    };

    componentDidUpdate() {
        console.log("4. Life Cycle - componentDidUpdate");
    };

    componentWillUnmount() {
        console.log("5. Life Cycle - componentWillUnmount : Good Bye~");
    }
    add = (e) => {
        console.log('add');
        this.setState(current => ({ count : current.count + 1 }) )
    };

    minus = (e) => {
        console.log('minus');
        this.setState(current => ({ count : current.count - 1 }) )
    };

    render(){
        console.log("2. Life Cycle - render");
        return (<div>
            <h1>This number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>);
    };
}

export default Main;
