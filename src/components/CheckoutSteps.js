import React, {Component} from 'react'

class CheckoutSteps extends Component {
    render() {
        return (
            <div className="d-flex align-items-center">
                <p className={`m-2 ${this.props.currentStep === 'shipping' ? 'text-primary font-weight-bold' : ''}`}>Shipping</p>
                <svg className="bi bi-chevron-right" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                </svg>
                <p className={`m-2 ${this.props.currentStep === 'billing' ? 'text-primary font-weight-bold' : ''}`}>Billing</p>
                <svg className="bi bi-chevron-right" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                </svg>
                <p className={`m-2 ${this.props.currentStep === 'payment' ? 'text-primary font-weight-bold' : ''}`}>Payment</p>
            </div>
        )
    }
}

export default CheckoutSteps