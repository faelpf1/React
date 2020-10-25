import React from 'react';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Square(props){
  return(
      <Button label={props.valor} onClick={props.onClick}/>
  );
}
export default Square;