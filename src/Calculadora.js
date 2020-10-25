import React, {useState} from 'react';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import Square from './Square';


function Calculadora(){

  const [valor, setValor] = useState("");

  function add(expressao){
    setValor(valor + expressao);
  }

  function calc(){
    setValor(eval(valor));
  }

  return(
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <InputText value={valor}/>
          </div>
          <div>
            <Square valor="7" onClick={()=>add('7')}/>
            <Square valor="8" onClick={()=>add('8')}/>
            <Square valor="9" onClick={()=>add('9')}/>
            <Square valor="/" onClick={()=>add('/')}/>
          </div>
          <div>
            <Square valor="4" onClick={()=>add('4')}/>
            <Square valor="5" onClick={()=>add('5')}/>
            <Square valor="6" onClick={()=>add('6')}/>
            <Square valor="*" onClick={()=>add('*')}/>
          </div>
          <div>
            <Square valor="1" onClick={()=>add('1')}/>
            <Square valor="2" onClick={()=>add('2')}/>
            <Square valor="3" onClick={()=>add('3')}/>
            <Square valor="-" onClick={()=>add('-')}/>
          </div>
          <div>
            <Square valor="." onClick={()=>add('.')}/>
            <Square valor="0" onClick={()=>add('0')}/>
            <Square valor="=" onClick={()=>calc()}/>
            <Square valor="+" onClick={()=>add('+')}/>
          </div>
          <div>
            <Square valor="Limpar" onClick={()=>setValor('')}/>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Calculadora;