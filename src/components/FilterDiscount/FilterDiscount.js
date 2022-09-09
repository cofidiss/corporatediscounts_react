import { useState } from "react";
import MyModal from '../MyModal/MyModal';
import PreLoader from "../PreLoader/PreLoader";


function FilterDiscount(props){

const discountScopeLov = props.discountScopeLov;
    const [firmNameState,setFirmNameState] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [isPreloaderShown, setisPreloaderShown] = useState(false);
    const [discountScopeState,setDiscountScopeState] = useState(null);

    const onFirmNameChange= (event)=> {

        setFirmNameState(event.target.value.trim() === ""? null:event.target.value);
    }
    const ondiscountScopeChange= (event)=> {

        setDiscountScopeState(event.target.value === ""? null:event.target.value  );
    }

    
    const onSearchClick = (event) =>{
      setisPreloaderShown(true);

const searchObj={firmName:firmNameState,discountScopeId:discountScopeState};
console.log("searchObj" );
console.log(searchObj);

for (const prop in searchObj) {
if (searchObj[prop] === null){
delete searchObj[prop];

}}



fetch('http://localhost:5103/GetDiscountsByFilter',{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchObj),
  })
    .then((response) => {
      if (response.status !== 200){
      throw new Error(`HTTP error! Status: ${response.status}`);

    }
return response.json();})
    .then((data) => {

        props.setDiscountsArrState(data);

      console.log('filtre içi:', data);

    }) 
    .catch((error) => {

      setIsModalOpen(true);

      console.error('Error:', error);
    }).finally(()=>   setisPreloaderShown(false));
    };



  return (<div> {isPreloaderShown  ?  <PreLoader/> :""}
  {isModalOpen ? <MyModal isOpen={isModalOpen} closeModal={x=>setIsModalOpen(false)}>"hata meydana geldi tekrar deneyin"</MyModal>:""}
<h1> Filtreleme</h1>
<label for="firmName"> Firma Adı: </label>
<input type="text" id="firmName" value={firmNameState} onChange={onFirmNameChange}></input>
<label for="discountScope"> İndirim Kapsamı: </label>
<select id="discountScope" value={discountScopeState} onChange={ondiscountScopeChange} >
<option value=""></option>
  {discountScopeLov.map((element)=>(<option value={element.discountScopeId}>{element.discountScopeName}</option>))}



</select>
<button onClick={onSearchClick}> Ara</button>
 
  </div>);  

}


export default FilterDiscount;