import React from 'react'
import BannerImage from '../../components/bannerImage'
import ContentBlock from '../../components/contentBlock'
import { UpcomingEvents, UpcomingEvent } from '../../components/upcomingEvents'

import bannerImage from '../../../assets/components/bannerImage/web_banner_20160915.jpg'

import { upcomingEventsData } from '../../data/upcomingEvents'

const HomeContainer = React.createClass({
    render() {
        return (
            <div id="page-content">
                <BannerImage src={ bannerImage }/>
                <div id="content">
                    <ContentBlock header="Upcoming Events">
                        <UpcomingEvents
                            showNumEvents={ 4 }
                            eventsData={ upcomingEventsData }
                            renderUpcomingEvent={ (event, columnWidth) =>
                                <UpcomingEvent event={ event } columnWidth={ columnWidth } key={ event.eventName }/>
                            }
                        />
                    </ContentBlock>
                </div>
            </div>
        )
    }
})

export default HomeContainer