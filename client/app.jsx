import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/navbar.jsx'
import Assetcontainer from './components/assetcontainer.jsx'
import Liabilitycontainer from './components/liabilitycontainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h2>Welcome to OneNumber</h2>
                </div>

                <div>
                    <Assetcontainer />
                    <Liabilitycontainer />
                </div>
            </div>

        )
    }
}

export default App;