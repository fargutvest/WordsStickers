import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { getPdfRef } from '../redux/stickers-selectors';

let mapStateToProps = (state) => {
    return {
        pdf: getPdfRef(state)
    }
}

const NavbarContainter = connect(mapStateToProps)(Navbar);

export default NavbarContainter;