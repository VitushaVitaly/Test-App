import React, {Component} from 'react'
import RequisitesForm from './RequisitesForm'
import PaymentForm from './PaymentForm'

class OrderingStep extends Component {
    state = {
        shipping: {},
        billing: {},
        payment: {}
    }

    setRequisites = (step, key, value) => {
        const newStep = Object.assign({}, this.state[step])
        newStep[key] = value
        this.setState({
            [step]: newStep
        })
    }

    setSameAsShipping = () => {
        const billing = Object.assign({}, this.state.shipping)

        this.setState({
            billing
        })
    }

    render() {
        console.log(this.state)

        if (this.props.currentStep === 'shipping') {
            return (
                <RequisitesForm
                    header={<h3 className="text-primary mt-4">Shipping Information</h3>}
                    contactHeader="Recipient"
                    addressHeader="Address"
                    values={this.state.shipping}
                    setRequisites={(key, value) => {this.setRequisites('shipping', key, value)}}
                    onSubmit={this.props.changeStep}
                />
            )
                
        }
        else if (this.props.currentStep === 'billing') {
            const header = <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="h3 text-primary">Billing Information</div>
                <div>
                    <a href="#" onClick={this.setSameAsShipping}><ins>Same as shipping</ins></a>
                </div>
            </div>

            return (
                <RequisitesForm
                    header={header}
                    contactHeader="Billing Contact"
                    addressHeader="Billing Adress"
                    values={this.state.billing}
                    setRequisites={(key, value) => {this.setRequisites('billing', key, value)}}
                    onSubmit={this.props.changeStep}
                />
            )
        }
        else if (this.props.currentStep === 'payment') {
            return (
                <PaymentForm
                    values={this.state.payment}
                    setRequisites={(key, value) => { this.setRequisites('payment', key, value) }}
                    onSubmit={this.props.changeStep}
                />
            )
        }
        else {
            return (
                <div>
                    <h3 className="text-primary mt-4">Thank you for your order!</h3>
                    <h5 className="mt-3">Order number is: 963155846</h5>
                    <p className="mt-3">Your will recieve an email confirmation shortly to <a href="#"><ins>jonathan.smith@gmail.com</ins></a></p>
                    <p className="mb-0">Estimated delivery day is</p>
                    <h5>Friday 4 - April 23 2019</h5>
                    <p className="mt-4"><a href="#"><ins>Print Recipe</ins></a></p>
                </div>
            )
        }
    }
}

export default OrderingStep