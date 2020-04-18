import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { getPdfRef } from '../redux/stickers-selectors';
import { updateIsGeneratingPdf } from '../redux/stickers-reducer'

let mapStateToProps = (state) => {
    return {
        pdf: getPdfRef(state)
    }
}

const NavbarContainter = connect(mapStateToProps, {updateIsGeneratingPdf})(Navbar);

export default NavbarContainter;