import React, { PropTypes } from 'react'

import './contentBlock.scss'

const ContentBlock = React.createClass({
    propTypes: {
        header: PropTypes.string,
        textContent: PropTypes.string
    },

    render() {
        return (
            <div className="content-block">
                <h3>{ this.props.header }</h3>
                { this.props.children }
            </div>
        )
    }
})

export default ContentBlock