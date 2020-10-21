import React from 'react'
import FormStepper from './FormStepper'
import OrginizationDetails from './OrginizationDetails'
import SignatoryDetails from './SignatoryDetails'
import BankDetails from './BankDetails'
import FormikForm from './FormikForm'
import Dy from './DynamicTextField'
const getSteps = () => {
    return ['Originization details', 'Signatory details', 'Bank Details'];
}
const initialData={ 
entityName:'', country:'', type:'',
fullName:'',designation:'',joinDate:'',
accHolderName:'',accNumber:'',bankName:'',ifsc:'',
fullNameSub:" ",designationUb:" "

}
const dataReducer=(state,{type,payload})=>{
    return({...state, [type]: payload});
}
const Registeration = () => {
    const [data, dataDispatch] = React.useReducer(dataReducer,initialData);
    const [activeStep, setActiveStep] = React.useState(0);
    const [fieldPopNum,setfieldPopNum]=React.useState([]);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleChange = input => e => {
        dataDispatch({type:input,payload:e.target.value});
    };
   
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <OrginizationDetails handleNext={handleNext} handleChange={handleChange} values={data} />
            case 1:
                return <SignatoryDetails handleNext={handleNext} handleBack={handleBack}  handleChange={handleChange} values={data}
                 stateValue={fieldPopNum} setStateValue={setfieldPopNum}/>
            case 2:
                return <BankDetails handleBack={handleBack}  handleChange={handleChange} values={data} />;
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
