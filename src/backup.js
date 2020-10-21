import React from 'react'
import FormStepper from './FormStepper'
import OrginizationDetails from './OrginizationDetails'
import SignatoryDetails from './SignatoryDetails'
import BankDetails from './BankDetails'
import FormikForm from './FormikForm'
const getSteps = () => {
    return ['Originization details', 'Signatory details', 'Bank Details'];
}

const Registeration = () => {
    const [name, setName] = React.useState({ entityName:'', country:'', type:'',fullName:'',designation:'',joinDate:'',accHolderName:'',accNumber:'',bankName:'',ifsc:''});
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleChange = input => e => {
        
        setName({...name, [input]: e.target.value});
    };
   
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <OrginizationDetails handleNext={handleNext} handleChange={handleChange} values={name} />
            case 1:
                return <SignatoryDetails handleNext={handleNext} handleBack={handleBack}  handleChange={handleChange} values={name}/>
            case 2:
                return <BankDetails handleBack={handleBack}  handleChange={handleChange} values={name} />;
            default:
                return <p>Unknown stepIndex</p>;
        }
    }

    return (
        <>
            <FormStepper activeStep={activeStep} steps={steps} getStepContent={() => getStepContent(activeStep)} />
        </>
    );

}

export default Registeration
