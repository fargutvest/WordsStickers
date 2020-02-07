import React from 'react';
import s from './GSheet.module.css';

const GSheet = props => {

    return (
        <div className={s.main}>
            <iframe className={s.gsheet}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT-ytLL4ZqRuAngT0EkfBusGoWnuVwFu_hTt_k55oCoKN8mZxBwCskoit2s8F0gC5vT_aMFpj0OLCvI/pubhtml?widget=true&amp;headers=true">
            </iframe>
        </div>
    )

}

export default GSheet