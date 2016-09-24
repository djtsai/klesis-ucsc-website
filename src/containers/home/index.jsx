import React from 'react'
import BannerImage from '../../components/bannerImage'

import bannerImage from '../../../assets/components/bannerImage/web_banner_20160915.jpg'

const HomeContainer = React.createClass({
    render() {
        return (
            <div id="page-content">
                <BannerImage src={ bannerImage }/>
            </div>
        )
    }
})

export default HomeContainer