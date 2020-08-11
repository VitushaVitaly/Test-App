import React, {Component} from 'react'
import CheckoutSteps from './CheckoutSteps'
import OrderingStep from './OrderingStep'

class OrderingProcess extends Component {
    state = {
        currentStep: 'shipping'
    }

    render() {
        return (
            <div>
                {this.state.currentStep !== 'finish' && 
                    <CheckoutSteps currentStep={this.state.currentStep} />
                }
                <OrderingStep
                    currentStep={this.state.currentStep}
                    changeStep={this.changeStep}
                />
            </div>
        )
    }

    changeStep = () => {
        console.log(this.state.currentStep)
        let nextStep
        
        if (this.state.currentStep === 'shipping') {
            nextStep = 'billing'
        }
        else if (this.state.currentStep === 'billing') {
            nextStep = 'payment'
        }
        else {
            nextStep = 'finish'
        }
                
        this.setState({
            currentStep: nextStep
        })
    }
}

export default OrderingProcess