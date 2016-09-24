import React, { PropTypes } from 'react'

const BannerImage = React.createClass({
    propTypes: {
        src: PropTypes.string.isRequired
    },

    getInitialState() {
        return { imageWidth: window.innerWidth }
    },

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },

    handleResize() {
        this.setState({ imageWidth: window.innerWidth })
    },

    render() {
        return (
            <img src={ this.props.src } width={ this.state.imageWidth }/>
        )
    }
})

export default BannerImage