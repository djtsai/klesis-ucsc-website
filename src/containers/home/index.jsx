import React from 'react'
import BannerImage from '../../components/bannerImage'
import ContentBlock from '../../components/contentBlock'
import { UpcomingEvents } from '../../components/upcomingEvents'

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
                        />
                    </ContentBlock>
                </div>
            </div>
        )
    }
})

export default HomeContainer