
import React from 'react';
import './MenuOffer.scss';
import Hamburger from "./Hamburger.js";


class MenuOffer extends React.Component {


    render() {
        return (
            <>
                <div id="menuOffer">
                    <div class="menu">
                        <div class="logoBox">
                            <img src={require('./img/logo-taksidi.png')} alt='logo' />
                        </div>
                        <Hamburger />
                        <ul class="navItems">
                            <li class="navItem"><a href="#contactContainer">Nasze wyjazdy</a></li>
                            <li class="navItem"><a href="#contactContainer">Okres specjalny</a></li>
                            <li class="navItem"><a href="#contactContainer">Promocje</a></li>
                            <li class="navItem"><a href="#contactContainer">Dlaczego My?</a></li>
                            <li class="navItem"><a href="#contactContainer">O nas</a></li>
                            <li class="navItem"><a href="#contactContainer">FAQ</a></li>
                            <li class="navItem"><a href="#contactContainer">Kontakt</a></li>
                            <li class="navItem"><a href="#contactContainer">Zaloguj</a></li>
                            <li class="navItem"><a href="#contactContainer">PL<i class="arrow down"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </>
        );
    }
}

export default MenuOffer
