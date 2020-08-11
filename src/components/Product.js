import React from 'react'

function Product({ product }) {
    return (
        <div className="d-flex mb-3 mt-3 pb-3 border-bottom align-items-center" style={{minHeight: '80px'}}>
            <div>
                <img className="border" width="90" src={`/product_pictures/${product.src}`} alt=""></img>
            </div>
            <div className="d-flex small flex-column flex-fill justify-content-around ml-2">
                <div className="text-secondary ">{product.name}</div>
                <div>Color: {product.color}</div>
                <div>Quantity: {product.quantity}</div>
            </div>
            <div className="d-flex h6 align-self-center">
                <div className="">${(product.price * product.quantity).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Product