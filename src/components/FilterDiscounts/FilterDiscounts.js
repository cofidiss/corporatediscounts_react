import { useState } from "react";
import PreLoader  from "../Preloader/Preloader";


function FilterDiscounts(props){

  const [firmLovState,setFirmLov] =   useState([]);
  const [discountScopeovState,setDiscountScopeLov] =   useState([]);
  const [discountCategoryLovState,setDiscountCategoryLov] =   useState([]);
const [isPreloaderShownState,setPreloaderShown] = useState(false);
    const baseUrl = props.baseUrl;

 const firmsLovPromise =    fetch(`${baseUrl}/FirmSelectLov`, {
        method: 'POST', // or 'PUT'
          })
        .then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })


const discountScopeLovPromise =    fetch(`${baseUrl}/GetDiscountScopeLov`, {
    method: 'POST', // or 'PUT'
      })
    .then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })



const discountCategoryLovPromise =    fetch(`${baseUrl}/GetDiscountCategoryLov`, {
    method: 'POST', // or 'PUT'
      })
    .then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })

 Promise.all([firmsLovPromise,discountScopeLovPromise,discountCategoryLovPromise]).then(x=>{
setFirmLov(x[0]);
setDiscountScopeLov(x[1]);
setDiscountCategoryLov(x[2]);
    
 },x=> {
    // error modal göster
}).finally(() => {

setPreloaderShown(false);

})

    return (
<div>
  <PreLoader isShown={isPreloaderShownState}/>
    <div>  
<label>Firma Adı: </label>
<select>


</select>
</div>

<div>  
<label>İndirim Kategorisi: </label>
<select>


</select>
</div>

<div>  
<label>İndirim Kapsamı:  </label>
<select>


</select>
</div>


</div>

    );

}


export default FilterDiscounts;