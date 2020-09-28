import React from 'react';
import './SliderOffer.scss';
import MenuOffer from './MenuOffer.js';

function SliderOffer() {
    return (
        <div id="sliderOffer">
            <MenuOffer />
            <div className="titleTrip">
                <div className="container">
                    <h2>Sound Project 2020</h2>
                    <div className="term"><h3><img src={require('./img/icons/croatia-flag.png')} alt="flaga" />Serre Chevalier, Francja<i className="far fa-calendar-alt"></i>20.03- 29.03.2020</h3>
                    </div>
                </div>
            </div>
            <div className="bottomStrip">
                <div className="container">
                    <div className="oneBox"><p>250 km tras narciarskich</p><i className="fas fa-skiing"></i></div>
                    <div className="oneBox"><p>Zakwaterowanie</p>★★★★</div>
                    <div className="oneBox"><p>Festival muzyczny</p><i className="fas fa-music"></i></div>
                </div>
                <div className="priceBox">
                    <div className="price"><p><span>3000 PLN</span><br></br>Cena od osoby</p></div>
                    <div className="amount"><p>Liczba miejsc: <span>1200</span><br></br><span className="availability">Dostępne wolne miejsca</span></p></div>
                    <button className="btn reservation">Rezerwuj</button>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default SliderOffer

