import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DiscountTable from "./components/DiscountTable/DiscountTable";
import FilterDiscount from "./components/FilterDiscount/FilterDiscount";
import PreLoader from "./components/PreLoader/PreLoader";
function App(props) {
const [isPreloadershown, setIsPreloadershown] = useState(true);


const [discountsArrState, setDiscountsArrState] = useState([]);
 if (isPreloadershown){
  console.log('isPreloadershown: true');
  fetch('http://localhost:5103/GetAllDiscounts', {
    method: 'GET', // or 'PUT'
   
   
  })
    .then((response) => response.json())
    .then((data) => {

      setDiscountsArrState(data);

      console.log('Success:', data);
      setIsPreloadershown(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


 }
 

//   const AlldiscountArray=[{firmaAdi:"Firma1",indirimOrani:10,detay:"detay1",indirimKapsami:"kapsam1",kontak:"kontak1"},

//   {firmaAdi:"Firma2",indirimOrani:20,detay:"detay2",indirimKapsami:"kapsam2",kontak:"kontak2"}
//   ];

//   const [filteredDiscountArr,setfilteredDiscountArr] = useState(AlldiscountArray);
//   console.log(filteredDiscountArr);
// const onFilter =(filteredArr)=>{
//   setfilteredDiscountArr(filteredArr);


// };
let renderedElement;
if (isPreloadershown){
  renderedElement =  (<div> <PreLoader isShown={isPreloadershown}/> </div>);



}
else {

  renderedElement=( <div>   <FilterDiscount setDiscountsArrState={setDiscountsArrState} />
  <DiscountTable discountArray={discountsArrState}/></div>)

}
  return (
<div>  sa
   
{renderedElement}
   
    </div>
  );
}

export default App;
