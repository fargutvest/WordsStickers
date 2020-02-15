import React from 'react';
import s from './Video.module.css';

const Video = () => {

    return (
        <div className={s.main}>
        <a className={s.frame}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C-FKXagcLRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </a>
        <a className={s.frame}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8GqLBPwl69s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </a>
            {/* <iframe className={s.gsheet}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-ytLL4ZqRuAngT0EkfBusGoWnuVwFu_hTt_k55oCoKN8mZxBwCskoit2s8F0gC5vT_aMFpj0OLCvI/pubhtml?widget=true&amp;headers=true">
            </iframe> */}
        </div>
    )

}

export default Video