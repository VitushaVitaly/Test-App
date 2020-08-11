import React, { Component } from 'react'
import InputDefault from './InputDefault'

class PaymentForm extends Component {
    state = {
        errors: {}
    }

    onSubmit = () => {
        const validators = {
            fullName: /^[A-Z]+ +[A-Z]+$/i,
            cardNumber: /^([0-9]{4} ){4}[0-9]{4}$/,
            expireDate: /^[0-9]{2} \/ [0-9]{2}$/,
            securityCode: /^[0-9]{3}$/
        }

        const errors = {}

        let result = true
        const values = this.props.values

        for (const key in validators) {
            const isValid = key in values && values[key] !== '' && validators[key].test(values[key])

            if (!isValid) {
                result = false
                errors[key] = true
            }
        }

        this.setState({
            errors
        })

        console.log(this.state)

        if (result)
            this.props.onSubmit()
    }

    render() {
        const { values } = this.props

        const makeHandler = (key) => { return (value) => this.props.setRequisites(key, value) }

        return (
            <div>
                <h3 className="text-primary mt-4">Payment</h3>
                <div className="d-flex align-items-top">
                    <svg className="bi bi-lock" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                    </svg>
                    <p className="text-muted">This is a secure 128-bit SSL encrypted payment</p>
                </div>
                <h5 className="text-primary mt-3">Cardholder Name</h5>
                <InputDefault data={{ placeholder: 'Name as it appears on your card', value: values.fullName, mask: '', isError: this.state.errors.fullName }} onChange={makeHandler('fullName')}/>
                <h5 className="text-primary mt-3">Card Number</h5>
                <InputDefault data={{ placeholder: 'XXXX XXXX XXXX XXXX XXXX', value: values.cardNumber, mask: '9999 9999 9999 9999 9999', isError: this.state.errors.cardNumber } } onChange={makeHandler('cardNumber')}/>
                <div className="d-flex mt-3 mb-3">
                    <div className="mr-2">
                        <h5 className="text-primary">Expire Date</h5>
                        <InputDefault data={{ placeholder: 'MM / YY', value: values.expireDate, mask: '99 / 99', isError: this.state.errors.expireDate}} onChange={makeHandler('expireDate')}/>
                    </div>
                    <div className="ml-2">
                        <h5 className="text-primary">Security Code</h5>
                        <InputDefault data={{ placeholder: '', value: values.securityCode, mask: '', isError: this.state.errors.securityCode}} onChange={makeHandler('securityCode')} />
                    </div>
                </div>
                <button className="btn btn-info pl-5 pr-5" onClick={this.onSubmit}>Pay Securely</button>
            </div>
        )
    }
}

export default PaymentForm