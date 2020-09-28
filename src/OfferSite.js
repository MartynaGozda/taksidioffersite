
import React from 'react';
import SliderOffer from './SliderOffer.js'
import MenuOffer from './MenuOffer.js'
// import HighlightsWrapper from "./HighlightsWrapper.js"
import Contact from "./Contact.js"
import PartnersWrapper from "./PartnersWrapper.js"
import Footer from "./Footer.js"

function OfferSite() {
    return (
        <div>
            <SliderOffer />
            <MenuOffer />
            {/* <HighlightsWrapper /> */}
            <Contact />
            <PartnersWrapper />
            <Footer /> 
        </div>

    );
}

export default OfferSite
