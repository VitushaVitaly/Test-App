import React from 'react'
import OrderingProcess from './OrderingProcess'
import ProductList from './ProductList'
import products from '../products'


function App() {
    return (
        <div>
            <div className="container bg-white border border-top-0 shadow-sm" style={{ height: '50px' }}>
                <div className="w-75 h-100 mx-auto d-flex justify-content-between align-items-center">
                    <div className="h4 text-dark">Test app</div>
                    <div className="h4 text-dark d-flex align-items-center">
                        Card
                        <svg className="bi bi-cart-plus" width="24" height="24" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z" />
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z" />
                            <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="w-75 d-flex bg-white mx-auto mt-5 border rounded-lg shadow-sm">
                    <div className="w-50 m-3">
                        <OrderingProcess/>
                    </div>
                    <div className="w-50 p-3" style={{background: "whitesmoke"}}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="h4 text-primary">Order Summary</div>
                            <div>
                                <a href="#"><ins>edit order</ins></a>
                            </div>
                        </div>
                        <ProductList products={products}/>
                        <div className="d-flex small flex-column mt-3 mb-3 pb-3 border-bottom text-secondary">
                            <div className="d-flex justify-content-between">
                                <div>Subtotal</div>
                                <div>$168.08</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Shipping</div>
                                <div>Free</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Taxes</div>
                                <div>$14.20</div>
                            </div>
                        </div>
                        <div className="d-flex h6 mt-3 mb-3 justify-content-between">
                            <div>Total</div>
                            <div>$182.28</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App