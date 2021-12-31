import React from 'react';
import {useTranslation} from 'react-i18next';
//import "./Header.css"

 function Header() {
    const [t, i18n] = useTranslation('global')
    


    return (
        <div className='content'>
            <h2 className='header'>{t("header.greetings")}</h2>
            <br/>
            <br/>
            <button className='btn' onClick={()=>i18n.changeLanguage("es")}>
                ES
            </button>
            <button className='btn' onClick={()=>i18n.changeLanguage("en")}>
                EN
            </button>

        </div>
    )
}

export default Header

