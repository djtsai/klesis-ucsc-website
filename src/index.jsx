import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import MainContainer from './containers/main'
import HomeContainer from './containers/home'

const App = React.createClass({
    render() {
        return (
            <Router history={ browserHistory }>
                <Route component={ MainContainer } path="/">
                    <IndexRoute component={ HomeContainer }/>
                </Route>
            </Router>
        )
    }
})

render(<App/>, document.getElementById('app'))
