export default function Alert(props){
return(
<small name={ props.name }>{ 
(props.name < 160 || props.name > 180) ? "Value shoule be in between 160 and 180.": null
}</small>


);


}

