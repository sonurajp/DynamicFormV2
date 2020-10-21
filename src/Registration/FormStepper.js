import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';



const FormStepper = ({ activeStep, steps, getStepContent }) => {
    return (
        <>

            <>
                <Typography variant="h5">Virtual Captive</Typography>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {getStepContent(activeStep)}
                </div>
            </>

        </>
    )
}

export default FormStepper
