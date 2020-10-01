
import React from 'react';
import SliderOffer from './SliderOffer.js'
import MenuOffer from './MenuOffer.js'
import TagWrapper from './TagWrapper.js'
// import Video from './Video.js'
// import HighlightsWrapper from "./HighlightsWrapper.js"
import Contact from "./Contact.js"
import PartnersWrapper from "./PartnersWrapper.js"
import Footer from "./Footer.js"

function OfferSite() {
    return (
        <div>
            <SliderOffer />
            <MenuOffer />
            <TagWrapper />
            {/* <Video /> */}
            {/* <HighlightsWrapper /> */}
            <Contact />
            <PartnersWrapper />
            <Footer /> 
        </div>

    );
}

export default OfferSite
