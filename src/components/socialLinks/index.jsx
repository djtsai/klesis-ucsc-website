import React, { PropTypes } from 'react'

export const SocialLinks = React.createClass({
    generateList() {
        const list = []
        const lastIndex = React.Children.count(this.props.children) - 1
        React.Children.forEach(this.props.children, (child, index) => {
            list.push(<span key={ child.props.name }>{ child }</span>)
            if (lastIndex !== index) {
                list.push(<span key={ child.props.name + index }> | </span>)
            }
        })

        return list
    },

    render() {
        return (
            <div id="social-links">
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
