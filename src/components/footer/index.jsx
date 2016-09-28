import React from 'react'
import { SocialLinks, SocialLink } from '../socialLinks'

import './footer.scss'

const Footer = React.createClass({
    render() {
        return (
            <div id="footer">
                <h4>Klesis @ UCSC</h4>
                <p>Klesis is a campus Christian fellowship & ministry at UC Santa Cruz and UC Berkeley.</p>
                <p>Many Klesis members attend Gracepoint Fellowship Church in Berkeley. Come check us out!</p>
                <p>Contact: <a href="mailto:klesis.ucsc@gmail.com">klesis.ucsc@gmail.com</a></p>
                <SocialLinks>
                    <SocialLink name="Facebook" url="https://www.facebook.com/klesissantacruz"/>
                    <SocialLink name="Instagram" url="https://www.instagram.com/klesis_ucsantacruz/"/>
                    <SocialLink name="Flickr" url="https://www.flickr.com/photos/gracepointsantacruz/"/>
                    <SocialLink name="Gracepoint Berkeley" url="http://www.gracepointonline.org/"/>
                </SocialLinks>
            </div>
        )
    }
})

export default Footer
