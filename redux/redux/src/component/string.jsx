import React, { Component } from 'react';
import { connect } from 'react-redux';

class String extends Component {
    state = {  } 

    handleClickAdd = () => {
        this.props.add(10);
    }

    handleClickSub = () => {
        this.props.sub(10);
    }

    render() { 
        return (
            <div>
            <h3>
                String: 
            </h3>
            <div>{this.props.string}</div>
            <button onClick={this.handleClickAdd}>+++</button>
            <button onClick={this.handleClickSub}>---</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return{
        string: state.string,
    }
}

const mapDispatchToProps = {
    add: (t) => {
        return {
            type: "add",
            value: t,
        }
    },
    sub: (t) => {
        return {
            type: "sub",
            value: t,
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(String);