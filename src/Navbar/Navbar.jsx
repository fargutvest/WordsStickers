import React, { Component } from 'react';
import SigninWithGoogleContainer from '../SignInWithGoogle/SigninWitGoogleContainer';
import ErrorBarContainer from '../ErrorBar/ErrorBarContainer';
import SocialUrl from './../Social/SocialUrl'
import github from './../Assets/github.svg'
import youtube from './../Assets/youtube.svg'
import book_pdf from './../Assets/pdf-book.svg'
import s from './Navbar.module.css';
import { htmlToPdf } from './../utils/htmlToPdf'

const pageHeightPixels = 750;
const pdfFileName = "Stickers to print.pdf";
const pageOrientation = "landscape";

const Navbar = ({ pdf }) => {

    let onClickPdf = () => {
        htmlToPdf(pageHeightPixels, pageOrientation, pdf, pdfFileName);
    }


    return (
        <div className={s.navbar}>

            <div className={s.social}>
                <p align="center">
                    <p>
                        <input type="image" onClick={onClickPdf} src={book_pdf} />
                    </p>
                    <p>
                        <SocialUrl url="https://www.youtube.com/watch?v=C-FKXagcLRQ&list=PLQPXxMwGR_nkJyvzRnj8NGgHwgvpdipy4" icon={youtube} />
                    </p>
                    <p>
                        <SocialUrl url="https://github.com/fargutvest/EnglishWordsStickers" icon={github} />
                    </p>
                </p>
            </div>
            <div className={s.account}>
                <p>
                    <ErrorBarContainer />
                </p>
                <SigninWithGoogleContainer />
            </div>

        </div >
    );

}

export default Navbar;