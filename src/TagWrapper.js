
import React from 'react';
import './TagWrapper.scss';
import Tag from "./Tag.js"

const tagArr = [
    {
        index: 1,
        name: "party",
        icon: "fas fa-glass-martini-alt",
        title: "Festival muzyczny w samym sercu Alp"
    },

    {
        index: 2,
        name: "ski",
        icon: "fas fa-skiing-nordic",
        title: "250 km tras w ośrodku Premium"
    },

    {
        index: 3,
        name: "ski",
        icon: "fas fa-music",
        title: "Imprezy, Apres-Ski i masa atrakcji!"
    },
]


class TagWrapper extends React.Component {
    render() {
        return (
            <div id="tagWrapper">
                <Tag onetag={tagArr[0]}/>
                <Tag onetag={tagArr[1]}/>
                <Tag onetag={tagArr[2]}/>
            </div>

        );
    }
}

export default TagWrapper
