


function DiscountRow(props){


return (<tr><td>{props.firmName}</td>
<td>{props.discountInfo}</td>
<td>{props.discountScope}</td>
<td>{props.firmContact}</td>
<td>{props.validCities}</td></tr>);
}
export default DiscountRow;