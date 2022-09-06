import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DiscountTable from "./components/DiscountTable/DiscountTable";
import FilterDiscount from "./components/FilterDiscount/FilterDiscount";
import PreLoader from "./components/PreLoader/PreLoader";
function App(props) {
const baseUrl="http://localhost:5103";
  console.log("app rendered");
  const [discountScopeLovState,setDiscountScopeLovState] = useState(null);

  const [isPreloadershown, setIsPreloadershown] = useState(true);


  const [discountsArrState, setDiscountsArrState] = useState(null);

function InitPage(){

const getDiscountScopeLovPromise =  fetch(baseUrl + '/GetDiscountScopeLov',{
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(),
})
  .then((response) =>{
    if (response.status !== 200){
      throw new Error(`HTTP error! Status: ${response.status}`);

    }

   return response.json(); 
  } );
  const getAllDiscountsPromise = 
  fetch(baseUrl + '/GetAllDiscounts', {
    method: 'POST', // or 'PUT'
   
   
  })
    .then((response) => {
      if (response.status !== 200){
        throw new Error(`HTTP error! Status: ${response.status}`);
  
      }
  
     return response.json(); 
    });


  Promise.all([getAllDiscountsPromise,getDiscountScopeLovPromise]).then(results=> {
    console.log(results);
    setDiscountScopeLovState(results[1]);
    setDiscountsArrState(results[0]);
setIsPreloadershown(false);
  });


}
if (isPreloadershown){
  InitPage();


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
