import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DiscountTable from "./components/DiscountTable/DiscountTable";
import FilterDiscount from "./components/FilterDiscount/FilterDiscount";
import PreLoader from "./components/PreLoader/PreLoader";
function App(props) {
const [isPreloadershown, setIsPreloadershown] = useState(true);
  fetch('http://localhost:5103/GetAllDiscounts', {
    method: 'GET', // or 'PUT'
   
   
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      setIsPreloadershown(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


//   const AlldiscountArray=[{firmaAdi:"Firma1",indirimOrani:10,detay:"detay1",indirimKapsami:"kapsam1",kontak:"kontak1"},

//   {firmaAdi:"Firma2",indirimOrani:20,detay:"detay2",indirimKapsami:"kapsam2",kontak:"kontak2"}
//   ];

//   const [filteredDiscountArr,setfilteredDiscountArr] = useState(AlldiscountArray);
//   console.log(filteredDiscountArr);
// const onFilter =(filteredArr)=>{
//   setfilteredDiscountArr(filteredArr);


// };

  return (
<div>  <PreLoader isShown={isPreloadershown}/>sa</div>
   
    // <div className="App">
    //   <FilterDiscount onFilter={onFilter} discountArray={AlldiscountArray}/>
    // <DiscountTable discountArray={filteredDiscountArr}/>
    // </div>
  );
}

export default App;
