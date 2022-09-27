import { useState,useEffect  } from "react";
import PreLoader  from "../Preloader/Preloader";
import MyModal from "../MyModal/MyModal";

function DiscountsTable(props){

const discountArr = props.discountsArr;

if (discountArr.length === 0){

    return (null);
}

    return (
<div>


<table>

    <thead>
<tr> 
<th> Firma Adı</th>
<th>indirim açıklaması </th>
<th> indirim kapsamı</th>

<th> inidirim kategorisi</th>

<th>firma kontak</th>


</tr>

    </thead>

    <tbody>

{discountArr.map(row => <tr>
<td> {row.firmName}</td>
<td>  {row.discountDescription}</td>
<td>{row.discountScopeName} </td>
<td> {row.discountCategoryName}</td>
<td>{row.firmContact} </td>


</tr>)

}


    </tbody>
</table>

</div>

    );


}



export default DiscountsTable;