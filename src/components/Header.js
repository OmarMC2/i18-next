import React from 'react';
//importamos el hook useTranslation del paquete react-i18next
import {useTranslation} from 'react-i18next';
//import "./Header.css"

 function Header() {
     // Definimos un estado con la variable t que será el texto a traducir y i18n, 
     //que será el objeto que definirá la lengua en la que se traduce
    // usamos como estado ¨global¨ porque es el nombre del archivo que contiene las traducciones
     const [t, i18n] = useTranslation('global')
    

    //llamamos la función t del componente que recibirá como parametro el key de la propiedad del objeto Json
    //al que necesitamos acceder

    //En el onClick del botón llamamos la función changeLanguage del objeto i18n y le pasamos como parametro 
    // el idioma al que necesitamos cambiar
    
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

