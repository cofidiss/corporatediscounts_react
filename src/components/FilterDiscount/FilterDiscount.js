



function FilterDiscount(props){



    const onSearchClick = (event) =>{
const searchTerm=event.target.value;
console.log("serafh" + searchTerm);

fetch('http://localhost:5103/GetDiscountsByFilter',{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({firmName:searchTerm}),
  })
    .then((response) => response.json())
    .then((data) => {

        props.setDiscountsArr(data);

      console.log('filtre içi:', data);

    })
    .catch((error) => {
      console.error('Error:', error);
    });



    };


  return (<div>
<h1> Filtreleme</h1>
<input type="text"  onClick={onSearchClick}></input>

<button> Ara</button>
 
  </div>);  

}


export default FilterDiscount;