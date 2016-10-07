import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import LightboxTrigger from '../lightboxTrigger'

import './upcomingEvents.scss'

export const UpcomingEvents = React.createClass({
    propTypes: {
        showNumEvents: PropTypes.number,
        eventsData: PropTypes.arrayOf(
            PropTypes.shape({
                eventName: PropTypes.node,
                eventTime: PropTypes.node,
                eventLocation: PropTypes.node,
                eventOther: PropTypes.node,
                eventImageUrl: PropTypes.string,
                eventLocationImage: PropTypes.string
            })
        ),
        renderUpcomingEvent: PropTypes.func
    },

    getDefaultProps() {
        return {
            showNumEvents: 3,
            eventsData: [],
            renderEvent: (event, columnWidth) => {
                return (
                    <UpcomingEvent event={ event } columnWidth={ columnWidth } key={ event.eventName }/>
                )
            }
        }
    },

    getUpcomingEvents() {
        const columnWidth = 12 / this.props.showNumEvents
        const upcomingEvents = []

        for (let i = 0; i < this.props.showNumEvents; i ++) {
            const event = this.props.eventsData[i]
            upcomingEvents.push(this.props.renderUpcomingEvent(event, columnWidth))
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
            eventOther: PropTypes.node,
            eventImageUrl: PropTypes.string,
            eventLocationImage: PropTypes.string
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
                <img className="upcoming-event-image" src={ event.eventImageUrl }/>
                <div className="upcoming-event-name">{ event.eventName }</div>
                <div className="upcoming-event-time">{ event.eventTime }</div>
                { event.eventLocationImage ? (
                    <LightboxTrigger
                        imageData={[
                            { src: event.eventLocationImage, caption: event.eventLocation }
                        ]}
                        customClassName="upcoming-event-location"
                    >
                        { event.eventLocation }
                    </LightboxTrigger>
                ) : (
                    <div className="upcoming-event-location">{ event.eventLocation }</div>
                ) }
                { event.eventOther ? (
                    <div className="upcoming-event-other">{ event.eventOther }</div>
                ) : (
                    null
                ) }
            </Col>
        )
    }
})
