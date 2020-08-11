import React, {Component} from 'react'
import InputMask from 'react-input-mask'

class InputDefault extends Component {

    onChange = (event) => {
        // this.setState({value: event.target.value})
        this.props.onChange(event.target.value)
    }

    render() {
        const {placeholder, value, mask, isError} = this.props.data
        console.log(isError)
        return (
            <InputMask
                mask={mask}
                maskchar={null}
                type="text"
                value={value || ''}
                className="form-control"
                style={isError ? {borderColor: 'red'} : {}}
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon2"
                onChange={this.onChange}
            />
        )
    }
}

export default InputDefault