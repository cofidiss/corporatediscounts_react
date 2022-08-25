import  "./PreLoader.css";

function PreLoader(props){
let displayValue;
if ( props.isShown === true){

    displayValue="block";
}
else {

    displayValue="none";
}
   
    return (<div className="preloader" style={{display:displayValue}}> </div>);


}

export default PreLoader;