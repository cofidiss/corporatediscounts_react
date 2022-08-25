
import DiscountRow from "../DiscountRow/DiscountRow";

function DiscountTable (props){

const discountArray = props.discountArray;

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
<tbody>
    {discountArray.map(discountElement => (<DiscountRow firmaAdi={discountElement.firmaAdi} indirimOrani={discountElement.indirimOrani} indirimKapsami={discountElement.indirimKapsami} kontak={discountElement.kontak} detay={discountElement.detay}></DiscountRow>))}

</tbody>


</table>
</div>


    );}
    export default DiscountTable;