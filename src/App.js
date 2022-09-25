import FilterDiscounts from "./components/FilterDiscounts/FilterDiscounts";


function App(props) {
const baseUrl = "http://localhost:5103/api/CorporateDiscounts";



return (<FilterDiscounts baseUrl={baseUrl}/>);

}

export default App;
