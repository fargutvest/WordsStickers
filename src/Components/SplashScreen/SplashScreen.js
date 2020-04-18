import React, { Component } from 'react';
import preloader from './../../Assets/preloader.svg'
import s from './SplashScreen.module.css'

class SplashScreen extends Component {
    render() {
        return (
            <div className={s.splashScreen}>
                <img className={s.preloader} src={preloader} />
            </div>
        )
    }
}


export default SplashScreen;