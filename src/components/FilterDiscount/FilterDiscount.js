import { useState } from "react";




function FilterDiscount(props){

    const [firmNameState,setFirmNameState] = useState(null);
    const [discountScopeState,setDiscountScopeState] = useState(null);
    const onFirmNameChange= (event)=> {

        setFirmNameState(event.target.value);
    }
    const ondiscountScopeChange= (event)=> {

        setDiscountScopeState(event.target.value === ""? null:event.target.value  );
    }

    
    const onSearchClick = (event) =>{
const searchObj={firmName:firmNameState,discountScopeId:discountScopeState};
console.log("searchObj" );
console.log(searchObj);

for (const prop in searchObj) {
if (searchObj[prop] === null){
delete searchObj[prop];

}}
if (Object.entries(searchObj).length==0){

    
    fetch('http://localhost:5103/GetAllDiscounts',{
        method: 'GET', // or 'PUT'
})
        .then((response) => response.json())
        .then((data) => {
    
            props.setDiscountsArrState(data);
    
   
    
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
    
}
else {

fetch('http://localhost:5103/GetDiscountsByFilter',{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchObj),
  })
    .then((response) => response.json())
    .then((data) => {

        props.setDiscountsArrState(data);

      console.log('filtre içi:', data);

    })
    .catch((error) => {
      console.error('Error:', error);
    });


}
    };


  return (<div>
<h1> Filtreleme</h1>
<label for="firmName"> Firma Adı: </label>
<input type="text" id="firmName" value={firmNameState} onChange={onFirmNameChange}></input>
<label for="discountScope"> İndirim Kapsamı: </label>
<select id="discountScope" value={discountScopeState} onChange={ondiscountScopeChange} >
<option value=""></option>
<option value="1">çalışanlar</option>
<option value="2">çalışanlar/aileleri</option>
</select>
<button onClick={onSearchClick}> Ara</button>
 
  </div>);  

}


export default FilterDiscount;