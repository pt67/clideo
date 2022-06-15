import data from './data_source';
import Process from './process';
import uuid from 'react-uuid';
import Minimum from './minimum';
import Maximum from './maximum';
import Duration from './duration';
import Interval from './interval';

export default function ForlList(){

function formHandle(e){
e.preventDefault();

var chk = document.querySelectorAll('input[data]');
//console.log(chk.length);
if(chk.length === 3){
    alert("Submitted Successfully.");
}


}


function deleteEl(e){
e.target.parentElement.parentElement.remove();
}



return(
<>
<div className="table_is_scrollable">
<form>
<div>
<div className="d-flex">
<div>INGREDIENT NAME</div>
<div>CATEGORY</div>
<div>SUB CATEGORY</div>
<div>BIOLOGICAL HAZARD</div>
<div>HAZARD ADDRESSED BY SUPPLIER</div>
<div></div>
<div>PROCESS</div>
<div>MIN UNITS</div>
<div>MAX UNITS</div>
<div>DURATION</div>
<div>INTERVAL</div>
</div>
<div className="body">

{ data.map(e=> 
<div key={ uuid() } className="d-flex">

<div> { e.IngredientName }</div>
  <div>{ e.CategoryTitle }</div>
    <div>{ e.RecipeSubCategoryTitle }</div>
      <div>{ e.BiologicalHazardTitle }</div>
       <div><input type="checkbox" checked={ (e.Status===true) ? 'checked': '' } onClick={ (e)=>{ console.log(e.target.checked); } } /></div>
         <div><i className="bi bi-plus text-success"></i>
         <i className="bi bi-trash text-danger" onClick={ deleteEl }></i></div>
           <div><Process/></div>
             <div><Minimum/></div>
              <div><Maximum/></div>
            <div><Duration/></div>
         <div><Interval/></div>
       <div className="right-bar col-sm-2">
    <button className="btn btn-primary" onClick={ formHandle }>Analyze</button>
  </div>
</div>
    )
}

</div>
</div>
</form>
</div>
</>

);



}
