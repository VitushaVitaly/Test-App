import React from 'react'
import Product from './Product'

export default function ProductList({ products }) {
    const productList = products.map(product => 
        <Product key={product.id} product={product}/>
    )

    return (
        <div>
            <div>
                {productList}
            </div>
        </div>
    )
}