



function FilterDiscount(props){

const discountArray = props.discountArray;

    const onSearchClick = (event) =>{
const searchTerm=event.target.value;
console.log("serafh" + searchTerm);
let filteredArr = discountArray.filter(discount => discount.firmaAdi === searchTerm);
props.onFilter(filteredArr);
    };


  return (<div>
<h1> Filtreleme</h1>
<input type="text"  onClick={onSearchClick}></input>

<button> Ara</button>
 
  </div>);  

}


export default FilterDiscount;