import React, { Component } from 'react';
import Number from './number';
import String from './string';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Number></Number>
                <br></br>
                <String></String>
            </React.Fragment>
        );
    }
}
 
export default App;