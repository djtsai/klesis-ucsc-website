import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import './contentBlock.scss'

const ContentBlock = React.createClass({
    propTypes: {
        header: PropTypes.string,
        textContent: PropTypes.string
    },

    render() {
        return (
            <Grid className="content-block">
                <Row>
                    <Col sm={ 12 } md={ 12 } lg={ 12 }>
                        <h3>{ this.props.header }</h3>
                    </Col>
                </Row>
                { this.props.children }
            </Grid>
        )
    }
})

export default ContentBlock