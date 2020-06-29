import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store"
import Options from "./components/options/Options"
import CssBaseline from "@material-ui/core/CssBaseline"
import Home from "./components/home/Home"
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline/>
                <Switch>
                    <Route exact path='/' component={Options}/>
                    <Route exact path='/home/:option' component={Home}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
