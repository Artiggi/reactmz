import React, { Component } from 'react';

import './Sidemenu.css';

class Sidemenu extends Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render(){

        console.log ( 'isOpened', this.state.isOpened );
        let dropdownTextOpen;
        let dropdownTextClose
        if (this.state.isOpened){
            dropdownTextOpen = <div>Open</div>
        }

        if (!this.state.isOpened){
            dropdownTextClose = <div>Close</div>
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                its Dropdown
                { dropdownTextOpen }
                { dropdownTextClose }
            </div>
        );
    }
}

export default Sidemenu;