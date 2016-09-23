import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const MainContainer = React.createClass({
    render() {
        return (
            <div id="main-content">
                <Header/>
                { this.props.children }
                <Footer/>
            </div>
        )
    }
})

export default MainContainer
