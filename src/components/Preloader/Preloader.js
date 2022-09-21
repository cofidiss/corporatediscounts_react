import  "./Preloader.css";
import "../General.css";

function PreLoader(props){
    const isShown = props.isShown;
 
    return (<div className={isShown ? "preloader" : "preloader hidden"}  > </div>);


}

export default PreLoader;