import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
class WebContent extends Component {
    state = { 
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
    };

    render() { 

        return (
            <React.Fragment>
                <h1> Web - {this.state.searchParams.get('chapter')}</h1>
                <div>
                    content
                </div>
                <div>
                    <Link to='/web'>menu</Link>
                </div>
            </React.Fragment>
        );
    }
}
 
export default (props) => (
    <WebContent 
        {...props}
        params={useSearchParams()}
    />
);