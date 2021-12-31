import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importamos los componentes y funciones que necesitamos de los paquetes/librerías?
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
// importamos, desde la carpeta translations, los archivos json que contienen nuestras traducciones,
//las traducciones pueden organizarse de diferentes formas: por componente, por lengua, etc. 
//en este caso es por lengua
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'


//configuramos la herramienta i18next con un objeto en la función init 
//lng, es para establecer la lengua por defecto, resources son los recursos Json que usamos 
//por lengua y por archivo
i18next.init({
  lng: 'es',
  resources: {
    es: {
      global: global_es,  
    },
    en:{
      global: global_en,
    },
  },
})

//usamos el componente i18nextProvider para "envolver" la aplicación, le pasamos como propiedad el i18next ya configurado 

ReactDOM.render(
  <React.StrictMode>
    
    <I18nextProvider i18n={i18next}>

      <App />

    </I18nextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
