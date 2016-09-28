import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

import './upcomingEvents.scss'

export const UpcomingEvents = React.createClass({
    propTypes: {
        showNumEvents: PropTypes.number,
        eventsData: PropTypes.arrayOf(
            PropTypes.shape({
                eventName: PropTypes.node,
                eventTime: PropTypes.node,
                eventLocation: PropTypes.node,
                eventOther: PropTypes.node
            })
        )
    },

    getDefaultProps() {
        return {
            showNumEvents: 3,
            eventsData: []
        }
    },

    getUpcomingEvents() {
        const columnWidth = 12 / this.props.showNumEvents
        const upcomingEvents = []

        for (let i = 0; i < this.props.showNumEvents; i ++) {
            const event = this.props.eventsData[i]
            upcomingEvents.push(
                <UpcomingEvent event={ event } columnWidth={ columnWidth } key={ event.eventName }/>
            )
        }

        return upcomingEvents
    },

    render() {
        const count = React.Children.count(this.props.children)

        return (
            <Row className="upcoming-events">
                { this.getUpcomingEvents() }
            </Row>
        )
    }
})

export const UpcomingEvent = React.createClass({
    propTypes: {
        event: PropTypes.shape({
            eventName: PropTypes.node,
            eventTime: PropTypes.node,
            eventLocation: PropTypes.node,
            eventOther: PropTypes.node
        }).isRequired,
        columnWidth: PropTypes.number.isRequired
    },

    render() {
        const { event, columnWidth } = this.props

        return (
            <Col
                className="upcoming-event"
                sm={ columnWidth }
                md={ columnWidth }
                lg={ columnWidth }
            >
                <p className="upcoming-event-name">{ event.eventName }</p>
                <p className="upcoming-event-time">{ event.eventTime }</p>
                <p className="upcoming-event-location">{ event.eventLocation }</p>
                { event.eventOther ? (
                    <p className="upcoming-event-other">{ event.eventOther }</p>
                ) : (
                    null
                ) }
            </Col>
        )
    }
})
