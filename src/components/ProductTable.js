import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {

return (
    <div>
        <table className="Table">
        <tbody>
            <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Price</h1></th>

            </tr>
            <ProductRow 
        products={props.products}
                      />
        </tbody>

        </table>
        
    </div>

)


}