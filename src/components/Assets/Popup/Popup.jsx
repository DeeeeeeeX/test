import React from 'react';
import s from './Popup.module.scss'

const Popup = ({children}) => {
    return (
        <div className={s.popup}>
            <div className={s.popupContent}>
                {children}
            </div>
        </div>
    );
};

export default Popup;