import React from 'react';
// import PropTypes from "prop-types";

class Movie extends React.Component {
    state = {
        isLoading : true,
        book : ""
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading : false, book: "Hello World"});
        }, 6000);
    };

    render(){
        const {isLoading} = this.state.isLoading;
        const {book} = this.state.book;
        return (<div>
            {isLoading ? "Loading..." : "We are reay!"}
        </div>);
    };
}

export default Movie;
