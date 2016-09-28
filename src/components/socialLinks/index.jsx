import React, { PropTypes } from 'react'

export const SocialLinks = React.createClass({
    propTypes: {
        delimiter: PropTypes.node
    },

    getDefaultProps() {
        return {
            delimiter: " | "
        }
    },

    generateList() {
        const list = []
        React.Children.forEach(this.props.children, (child, index) => {
            list.push(React.cloneElement(child, { key: child.props.name }))
            list.push(<span key={ child.props.name + index }>{ this.props.delimiter }</span>)
        })

        list.pop()

        return list
    },

    render() {
        return (
            <div className="social-links">
                { this.generateList() }
            </div>
        )
    }
})

export const SocialLink = React.createClass({
    propTypes: {
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    },

    render() {
        return (
            <a href={ this.props.url } target="_blank">{ this.props.name }</a>
        )
    }
})
