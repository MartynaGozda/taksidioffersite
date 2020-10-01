
import React from 'react';
import './Tag.scss';


class Tag extends React.Component {
    render() {
        return (
            <div id="tag">
                <i class={this.props.onetag.icon}></i>
                <p>{this.props.onetag.title}</p>
            </div>

        );
    }
}

export default Tag

{/* <p>280 km tras w ośrodku premium</p>
<p>Imprezy, Apres Ski i masa atrakcji</p> */}
