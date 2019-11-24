import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewer from './components/Viewer'
class App extends Component {
    
    render() {
        return (<div className="App, container"><Viewer file_name="zipfile.zip"/></div>);
    }
}

export default App
