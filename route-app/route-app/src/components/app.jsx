import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notFound';
import WebContent from './webContent';
import { Routes, Route, Navigate} from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className = "container">
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/linux" element={<Linux></Linux>}>
                            <Route path="homework" element={<h4>homework</h4>}></Route>
                            <Route path="terminal" element={<h4>terminal</h4>}></Route>
                            <Route path="*" element={<h4>others</h4>}></Route>
                        </Route>
                        <Route path="/django" element={<Django id="hhh"></Django>} />
                        <Route path="/web" element={<Web></Web>} />
                        <Route path="/web/content" element={<WebContent></WebContent>} />
                        <Route path="/404" element={<NotFound></NotFound>} />
                        <Route path="*" element={<Navigate replace to="/404"></Navigate>} />
                    </Routes>
                </div>    
            </React.Fragment>
        );
    }
}
 
export default App;