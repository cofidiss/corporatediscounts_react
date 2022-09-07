import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import DiscountTable from "./components/DiscountTable/DiscountTable";
import FilterDiscount from "./components/FilterDiscount/FilterDiscount";
import PreLoader from "./components/PreLoader/PreLoader";
import MyModal from './components/MyModal/MyModal';


function App(props) {
const baseUrl="http://localhost:5103";
  console.log("app rendered");
  const [discountScopeLovState,setDiscountScopeLovState] = useState(null);


  const [isInitRun, setIsInitRun] = useState(false);
  const [isInitRunHasError, setIsInitRunHasError] = useState(false);
  const [discountsArrState, setDiscountsArrState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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


setIsInitRunHasError(false);
setIsModalOpen(false);
  }).catch(error=>{
    console.log("hata" + error);
 
    
    setIsInitRunHasError(true);
    setIsModalOpen(true);

  


  }).finally(()=> {setIsInitRun(true);});


}


if (isInitRun=== false){
  InitPage();
  return (<PreLoader/>);

  
}

else {

if (isInitRunHasError){

return (<MyModal isOpen={isModalOpen} closeModal={x=>setIsModalOpen(false)}> <p>Hata oldu tekrar deneyin</p></MyModal>);
}
else {

  return ( <div> sinan  <FilterDiscount setDiscountsArrState={setDiscountsArrState} discountScopeLov={discountScopeLovState} />
  <DiscountTable discountArray={discountsArrState}/></div>);


}




 
}
}

export default App;
