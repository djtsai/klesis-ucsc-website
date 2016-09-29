import React, { PropTypes } from 'react'
import Lightbox from 'react-images'

const LightboxTrigger = React.createClass({
    propTypes: {
        imageData: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                caption: PropTypes.string
            }).isRequired
        ).isRequired,
        customClassName: PropTypes.string
    },

    getInitialState() {
        return { open: false }
    },

    openLightbox() {
        this.setState({ open: true })
    },

    closeLightbox() {
        this.setState({ open: false })
    },

    render() {
        return (
            <div className={ this.props.customClassName }>
                <div className="lightbox-trigger" onClick={ this.openLightbox }>{ this.props.children }</div>
                <Lightbox
                    images={ this.props.imageData }
                    isOpen={ this.state.open }
                    onClose={ this.closeLightbox }
                    backdropClosesModal={ true }
                    showImageCount={ false }
                />
            </div>
        )
    }
})

export default LightboxTrigger
