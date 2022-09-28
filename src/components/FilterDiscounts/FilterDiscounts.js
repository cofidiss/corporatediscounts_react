import { useState,useEffect  } from "react";
import PreLoader  from "../Preloader/Preloader";
import MyModal from "../MyModal/MyModal";
import  "./FilterDiscounts.css";

function FilterDiscounts(props){

  const setDiscounts = props.setDiscounts;

console.log("FilterDiscounts rendered");
  const baseUrl = props.baseUrl;
  const formInitialValue = {firmId:-1,discountCategoryId:-1,discountScopeId:-1};
  const [formState,setForm] =   useState(formInitialValue);
  const [firmLovState,setFirmLov] =   useState([]);
  const [shouldClickSearchState,setShouldClickSearch] =   useState(false);
  const [readyToRenderState,setReadyToRender] =   useState(false);
  const [discountScopeLovState,setDiscountScopeLov] =   useState([]);
  const [discountCategoryLovState,setDiscountCategoryLov] =   useState([]);
const [isPreloaderShownState,setPreloaderShown] = useState(true);
const [isInitRunState,setInitRun] = useState(false);
const [modalState,setModal] = useState({isOpen:false,content:null});


const ClearForm = e => {

    setForm(formInitialValue);
    setShouldClickSearch(true);

};
const Search = e => {
  setPreloaderShown(true);
  const searchPromise =    fetch(`${baseUrl}/FilterDiscounts`, {
    method: 'POST', // or 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(formState)
      })
    .then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); });
searchPromise.then(x => setDiscounts(x)).catch(x => setModal({isOpen:true,content:"hata oldu tekrar deneyiniz"})).finally(x => setPreloaderShown(false))
  

};

const onFormChange = e=> {


if (  e.target.getAttribute("id") === "firmSelect"){

  setForm(prevState => {return {...prevState,firmId: parseInt(e.target.value)};})
}

if (  e.target.getAttribute("id") === "discountCategorySelect"){

  setForm(prevState => {return {...prevState,discountCategoryId: parseInt(e.target.value)};})
}

if (  e.target.getAttribute("id") === "discountScopeSelect"){

  setForm(prevState => {return {...prevState,discountScopeId: parseInt(e.target.value)};})
}

};

if(!isInitRunState){

  Init();

}

function Init(){

  const firmLovPromise =    fetch(`${baseUrl}/FirmLov`, {
    method: 'POST', // or 'PUT'
      })
    .then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })


const discountScopeLovPromise =    fetch(`${baseUrl}/DiscountScopeLov`, {
method: 'POST', // or 'PUT'
  })
.then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })



const discountCategoryLovPromise =    fetch(`${baseUrl}/DiscountCategoryLov`, {
method: 'POST', // or 'PUT'
  })
.then((response) => {
if (!response.ok){
throw new Error(`hata meydana geldi: Status: ${response.status}`)

}
return response.json(); })

Promise.all([firmLovPromise,discountCategoryLovPromise,discountScopeLovPromise,]).then(x=>{
setFirmLov(x[0]);
setDiscountCategoryLov(x[1]);
setDiscountScopeLov(x[2]);
setReadyToRender(true);


},x=> {
  setModal({isOpen:true,content:"Hata Meydana geldi"}); 
}).finally(() => {
setInitRun(true);
setPreloaderShown(false);

})


}

useEffect(() => {console.log("FilterDiscounts effect");
 var filterDiscountsDiv =  document.getElementById("filterDiscounts");
 var optionElements = filterDiscountsDiv.getElementsByTagName("option");
 debugger;
 for (let option of optionElements) {
    if (option.getAttribute("class") === "level-2") {

      option.innerHTML=  "&nbsp&nbsp"+ option.innerHTML;
    }
}

if (shouldClickSearchState){
  setShouldClickSearch(false);
document.querySelector("#filterDiscounts").querySelector("#search-button").click();


}
});

const renderedElement = (<div> 
  <h1>Filtreleme</h1>
    <div>  
<label>Firma Adı: </label>
<select value={formState.firmState} id="firmSelect">
  <option value="-1"> Hepsi</option>
{firmLovState.map(x => {return (<option value={x.id}>{x.name}</option>);})}
  
</select>
</div>

<div>  
<label>İndirim Kategorisi: </label>
<select  id="discountCategorySelect" value={formState.discountCategoryId}>
<option value="-1"> Hepsi</option>
{discountCategoryLovState.map(x => {return (<option className={"level-" + x.levelNo} value={x.id}>{x.name}</option>);})}

</select>
</div>

<div>  
<label>İndirim Kapsamı:  </label>
<select  id="discountScopeSelect" value={formState.discountScopeId}>
<option value="-1"> Hepsi</option>
{discountScopeLovState.map(x => {return (<option value={x.id}>{x.name}</option>);})}

</select>
</div>
<button id="search-button" onClick={Search}> Ara</button>
<button onClick={ClearForm}> Filtreyi Temizle</button>
 
  </div>);
   


    return (
<div onChange={onFormChange} id="filterDiscounts"> 
<MyModal isOpen={modalState.isOpen} closeModal={x => setModal({isOpen:false,content:null})}> {modalState.content}</MyModal>
  <PreLoader isShown={isPreloaderShownState}/>

  {readyToRenderState ? renderedElement  : null}


</div>

    );

}


export default FilterDiscounts;