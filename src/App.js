import FilterDiscounts from "./components/FilterDiscounts/FilterDiscounts";
import DiscountsTable from "./components/DiscountsTable/DiscountsTable";
import { useState,useEffect  } from "react";



function App(props) {
const baseUrl = "http://localhost:5103/api/CorporateDiscounts";

const [discountsArrState,setDiscounts]  = useState([]);



return (
<div>  
<FilterDiscounts baseUrl={baseUrl} setDiscounts={setDiscounts}/>

<DiscountsTable discountsArr= {discountsArrState}></DiscountsTable></div>);

}

export default App;
