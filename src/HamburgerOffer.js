
import React from 'react';
import './HamburgerOffer.scss';
import $ from 'jquery';


class HamburgerOffer extends React.Component {
    componentDidMount() {
        $(".menuCollapsedoffer").click(function () {
            $(this).toggleClass("menuExpandedoffer");
        });
    }

    render() {
        return (
            <div id="hamburgerOffer">
                <div class="menuCollapsedoffer menuExpandedoffer">
                
                    <nav>
                        <ul>
                            <li><a href="#contactContainer">Opis ogólny</a><div class="bar"></div></li>
                            <li><a href="#contactContainer">Trasy</a></li>
                            <li><a href="#contactContainer">Zakwaterowanie</a></li>
                            <li><a href="#contactContainer">Atrakcje</a></li>
                            <li><a href="#contactContainer">Dojazd</a></li>
                            <li><a href="#contactContainer">Cena</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default HamburgerOffer
