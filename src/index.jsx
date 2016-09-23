import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import MainContainer from './containers/main'

const App = React.createClass({
    render() {
        return (
            <Router history={ browserHistory }>
                <Route component={ MainContainer } path="/"/>
            </Router>
        )
    }
})

render(<App/>, document.getElementById('app'))
