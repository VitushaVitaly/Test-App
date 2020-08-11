import React, { Component } from 'react'
import InputDefault from './InputDefault'

class GroupWrapper extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                {this.props.children}
            </div>
        )
    }
}

class RequisitesForm extends Component {

    state = {
        errors: {}
    }

    onSubmit = () => {
        const validators = {
            fullName: /^[A-Z]+ +[A-Z]+$/i,
            phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i,
            streetAddress: /.*/,
            additional: /.*/,
            city: /.*/,
            zip: /^[0-9]+$/
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
        const { header, contactHeader, addressHeader, values } = this.props

        const makeHandler = (key) => { return (value) => this.props.setRequisites(key, value) }

        return (
            <div>
                {header}
                <h5 className="text-primary mt-4">{contactHeader}</h5>
                <GroupWrapper>
                    <InputDefault data={{ placeholder: 'Full Name', value: values.fullName, mask: '', isError: this.state.errors.fullName}} onChange={makeHandler('fullName')} />
                </GroupWrapper>

                <GroupWrapper>
                    <InputDefault data={{ placeholder: 'Daytime Phone', value: values.phone, mask: '+7 (999) 999-99-99', isError: this.state.errors.phone }} onChange={makeHandler('phone')}/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">For delivery questions</span>
                    </div>
                </GroupWrapper>
                <h5 className="text-primary mt-4">{addressHeader}</h5>
                <GroupWrapper>
                    <InputDefault data={{ placeholder: 'Street Adress', value: values.streetAddress, mask: '', isError: this.state.errors.streetAddress }} onChange={makeHandler('streetAddress')} />
                </GroupWrapper>
                <GroupWrapper>
                    <InputDefault data={{ placeholder: 'Apt, Suite, Bldg, Gate Code. (optional)', value: values.additional, mask: '', isError: this.state.errors.additional }} onChange={makeHandler('additional')}/>
                </GroupWrapper>
                <GroupWrapper>
                    <InputDefault data={{ placeholder: 'City', value: values.city, mask: '', isError: this.state.errors.city }} onChange={makeHandler('city')}/>
                </GroupWrapper>
                <GroupWrapper>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Country</option>
                        <option value="1">Russia</option>
                        <option value="2">Germany</option>
                        <option value="3">Spain</option>
                    </select>
                    <InputDefault data={{ placeholder: 'ZIP', value: values.zip, mask: '', isError: this.state.errors.zip }} onChange={makeHandler('zip')}/>
                </GroupWrapper>
                <button className="btn btn-info pl-5 pr-5" onClick={this.onSubmit}>Continue</button>
            </div>
        )
    }
}

export default RequisitesForm