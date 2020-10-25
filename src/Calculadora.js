import React from 'react';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import Square from './Square';


function Calculadora(){
  return(
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <InputText />
          </div>
          <div>
            <Square valor="7"/>
            <Square valor="8"/>
            <Square valor="9"/>
            <Square valor="/"/>
          </div>
          <div>
            <Square valor="4"/>
            <Square valor="5"/>
            <Square valor="6"/>
            <Square valor="*"/>
          </div>
          <div>
            <Square valor="1"/>
            <Square valor="2"/>
            <Square valor="3"/>
            <Square valor="-"/>
          </div>
          <div>
            <Square valor="."/>
            <Square valor="0"/>
            <Square valor="="/>
            <Square valor="+"/>
          </div>
          <div>
            <Square valor='Limpar'/>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Calculadora;