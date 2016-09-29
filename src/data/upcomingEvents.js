import React from 'react'

import sanctuaryTime from '../../assets/components/upcomingEvents/Sanctuary-Time-web.jpg'
import officeHours from '../../assets/components/upcomingEvents/Office-Hours.jpg'
import klesisFriday from '../../assets/components/upcomingEvents/klesis-fridays-web-v2.jpg'
import sundayService from '../../assets/components/upcomingEvents/SWS-web-thumb.jpg'

import bayTree from '../../assets/components/upcomingEvents/maps/bay-tree.jpg'
import socSci1 from '../../assets/components/upcomingEvents/maps/soc-sci-1.jpg'
import socSci2 from '../../assets/components/upcomingEvents/maps/soc-sci-2.jpg'

export const upcomingEventsData = [
    {
        eventName: 'Sanctuary Time',
        eventTime: 'Tuesday, Sept 27 | 8 PM',
        eventLocation: 'Social Sciences 2, Rm 75',
        eventImageUrl: sanctuaryTime,
        eventLocationImage: socSci2,
    },
    {
        eventName: 'Office hours w/ Jon and Carol',
        eventTime: 'Wednesday, Sept 28 | 1-4 PM',
        eventLocation: 'Bay Tree Patio',
        eventOther: <a href="/office-hours">Sign up here!</a>,
        eventImageUrl: officeHours,
        eventLocationImage: bayTree
    },
    {
        eventName: 'Klesis Friday Bible Study',
        eventTime: 'Friday, Sept 30 | 6:30 PM',
        eventLocation: 'Social Sciences 1, Rm 110',
        eventImageUrl: klesisFriday,
        eventLocationImage: socSci1
    },
    {
        eventName: 'Sunday Worship Service',
        eventTime: 'Sunday, Oct 2 | 12:30 PM',
        eventLocation: 'Bay Tree Cervantes and Velasquez Rm',
        eventImageUrl: sundayService,
        eventLocationImage: bayTree
    }
]
