
import React from 'react';
import './MenuOffer.scss';
import HamburgerOffer from "./HamburgerOffer.js";

class MenuOffer extends React.Component {
    render() {
        return (
            <>
                <div id="menuOffer">
                <HamburgerOffer />
                    <div class="menu">
                        
                        <ul class="navItems">
                            <li class="navItem"><a href="#contactContainer">Opis ogólny</a></li>
                            <li class="navItem"><a href="#contactContainer">Trasy</a></li>
                            <li class="navItem"><a href="#contactContainer">Zakwaterowanie</a></li>
                            <li class="navItem"><a href="#contactContainer">Atrakcje</a></li>
                            <li class="navItem"><a href="#contactContainer">Dojazd</a></li>
                            <li class="navItem"><a href="#contactContainer">Cena</a></li>
                        </ul>
                    </div>
                </div>
                
            </>
        );
    }
}

export default MenuOffer
