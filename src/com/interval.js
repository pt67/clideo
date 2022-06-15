import React, { useState } from 'react';

export default function Interval(e){


const [interval, setInterval] = useState("");

function inputHandle(e){

setInterval(e.target.value);
e.target.setAttribute('data', e.target.value);
//console.log(alert);

}


return (

<>
<select onChange={ inputHandle }>
  <option value="">Select</option>
  <option>Second</option>
  <option>Minute</option>
  <option>Hour</option>
</select>
</>
);


}
