import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { getPdfRef } from '../redux/stickers-selectors';
import { updateIsGeneratingPdf, updateIsShowIframe, updatePdfOutput } from '../redux/stickers-reducer'

let mapStateToProps = (state) => {
    return {
        pdf: getPdfRef(state)
    }
}

const NavbarContainter = connect(mapStateToProps, {updateIsGeneratingPdf, updateIsShowIframe, updatePdfOutput})(Navbar);

export default NavbarContainter;