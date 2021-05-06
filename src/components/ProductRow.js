import React from 'react';


export default function ProductRow(props) {

    const products = props.products;

 return (
     <>
     {console.log(products)}
     {products.map(product => {
         return (
             <tr key={product.id} >
           <td> {product.name} </td>
           <td> {product.stocked && product.price } 
           {!product.stocked && <p style={{color: "red"}} > {product.price} </p>}  </td> 
            </tr>
           
         )
     })}
     </>
 )
}

