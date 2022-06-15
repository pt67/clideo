import React, { useState } from 'react';
import Alert from './alert';


export default function Minimum(){
const [alert, setAlert] = useState("");

function inputHandle(e){

//setAlert(e.target.value);

if(e.target.value < 160 || e.target.value > 180){
  setAlert("value should be between 160 and 180.");
  e.target.setAttribute('data', e.target.value);
}else{
  setAlert("");
}

//console.log(alert);

}


return (

<>
<input type="number" onChange={ inputHandle }/><br/>
<small>{ (alert) ? alert: "" } </small>
</>
);


}
