
import DiscountRow from "../DiscountRow/DiscountRow";

function DiscountTable (props){

let discountArray = props.discountArray;
console.log(discountArray);
// discountArray = [{firmName: 'firm_name1', discountInfo: 'discount_info1', discountScope: 'discount_scope1', discountDetail: 'discount_detail1', firmContact: 'firm_contact1'}];
    return (
<div>  
<h1> İndirim Listesi</h1>
<table>  
<thead>
<tr> <th>Firma Adı</th> 
<th>İndirim Orani</th>
<th>İndirim Kapsami</th>
<th>Detay</th>
<th>Kontak</th>
</tr>
</thead>
<tbody>{discountArray.map(discountElement => (<DiscountRow firmName={discountElement.firmName} discountInfo={discountElement.discountInfo} discountScope={discountElement.discountScope} firmContact={discountElement.firmContact} detay={discountElement.detay}></DiscountRow>))}
</tbody>


</table>
</div>


    );}
    export default DiscountTable;