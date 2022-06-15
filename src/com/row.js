import React, { useState } from 'react';
import data from './data_source';
import uuid from 'react-uuid';
import Process from './process';
import Minimum from './minimum';
import Maximum from './maximum';
import Duration from './duration';
import Interval from './interval';

export default function Row(){

const [position, setPosition] = useState();


window.onscroll = ()=>{
(window.scrollY > 0) ? setPosition("absolute") : setPosition("fixed");

}


function formHandle(e){
e.preventDefault();



alert("Submitted Successfully.");



}



return(
<>
<div className="table_is_scrollable">
<form>
<table className="table table-striped">
<thead>
<tr>
<th>INGREDIENT NAME</th>
<th>CATEGORY</th>
<th>SUB CATEGORY</th>
<th>BIOLOGICAL HAZARD</th>
<th>HAZARD ADDRESSED BY SUPPLIER</th>
<th></th>
<th>PROCESS</th>
<th>MIN UNITS</th>
<th>MAX UNITS</th>
<th>DURATION</th>
<th>INTERVAL</th>
</tr>
</thead>
<tbody>

{ data.map(e=> 
<tr key={ uuid() }>

<td> { e.IngredientName }</td>
<td >{ e.CategoryTitle }</td>
<td>{ e.RecipeSubCategoryTitle }</td>
<td>{ e.BiologicalHazardTitle }</td>
<td><input type="checkbox" checked={ (e.Status === true) ? 'checked': '' }/></td>
<td><i className="bi bi-plus text-success"></i><i className="bi bi-trash text-danger"></i></td>
<td><Process/></td>
<td><Minimum/></td>
<td><Maximum/></td>
<td><Duration/></td>
<td><Interval/></td>
<div className="right-bar col-sm-2" style={{ position: position }}>
<button className="btn btn-primary" onClick={ formHandle }>Analyze</button>
</div>

</tr>
)
}


</tbody>
</table>
</form>
</div>
</>

);



}
