import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DiscountTable from "./components/DiscountTable/DiscountTable";
import FilterDiscount from "./components/FilterDiscount/FilterDiscount";
import PreLoader from "./components/PreLoader/PreLoader";
function App(props) {

  console.log("app rendered");
  const [discountScopeLovState,setDiscountScopeLovState] = useState(null);

  const [isPreloadershown, setIsPreloadershown] = useState(true);


  const [discountsArrState, setDiscountsArrState] = useState(null);

  function GetDiscountScopeLov(){

    fetch('http://localhost:5103/GetDiscountScopeLov',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
  
          setDiscountScopeLovState(data);
  
        console.log('GetDiscountScopeLov:', data);
  
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
  
  }
  if (discountScopeLovState === null){
    GetDiscountScopeLov();
    
  }
 

function GetAllDiscounts(){


  fetch('http://localhost:5103/GetAllDiscounts', {
    method: 'GET', // or 'PUT'
   
   
  })
    .then((response) => response.json())
    .then((data) => {

      setDiscountsArrState(data);

      console.log('GetAllDiscounts:', data);
  
    })
    .catch((error) => {
      console.error('Error:', error);
    });


}
if (discountsArrState === null){
  GetAllDiscounts();
  
}
if (discountScopeLovState !== null && discountsArrState !== null && isPreloadershown !== false){

   setIsPreloadershown(false);


}

 

let renderedElement;
if (isPreloadershown){
  renderedElement =  (<div> <PreLoader isShown={isPreloadershown}/> </div>);



}
else {

  renderedElement=( <div> sinan  <FilterDiscount setDiscountsArrState={setDiscountsArrState} discountScopeLov={discountScopeLovState} />
  <DiscountTable discountArray={discountsArrState}/></div>)

}
  return (
<div>  
   
{renderedElement}
   
    </div>
  );
}

export default App;
