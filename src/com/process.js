import pdata from './data_process';


export default function Process(props){


return(


<>

<select>
{
 pdata.map(p=>
<option>{ p.ProcessTitle }</option>

)}
</select>
</>

);


}
