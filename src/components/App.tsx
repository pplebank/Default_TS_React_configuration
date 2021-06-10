import React from 'react';
import AppCSS from './App.module.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';



function App (){

    const { t } = useTranslation();
     function changeLanguage (lng :string){
        i18n.changeLanguage(lng);
    }

  
     return (
      <div className="App">
        <div className="App-header">
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div>{t('description.part1')}</div>
      </div>
     );
    }

export default App;