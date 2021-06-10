import React from "react";
import FormStepper from "./FormStepper";
import OrginizationDetails from "./OrginizationDetails";
import SignatoryDetails from "./SignatoryDetails";
import BankDetails from "./BankDetails";

const getSteps = () => {
  return ["Originization details", "Signatory details", "Bank Details"];
};

const initialData = {
  entityName: "",
  country: "",
  type: "",
  joinDate: "",
  accHolderName: "",
  accNumber: "",
  bankName: "",
  ifsc: "",
};
const dataReducer = (state, { type, payload }) => {
  return { ...state, [type]: payload };
};

const Registeration = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-08-18T21:11:54")
  );
  const [selectedJoinDate, setSelectedJoinDate] = React.useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleJoinDateChange = (date) => {
    setSelectedJoinDate(date);
  };
  const [inputList, setInputList] = React.useState([
    { firstName: "", designation: "" },
  ]);
  const [data, dataDispatch] = React.useReducer(dataReducer, initialData);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleChange = (input) => (e) => {
    dataDispatch({ type: input, payload: e.target.value });
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <OrginizationDetails
            handleNext={handleNext}
            handleChange={handleChange}
            values={data}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            handleDateChange={handleDateChange}
          />
        );
      case 1:
        return (
          <SignatoryDetails
            handleNext={handleNext}
            handleInputChange={handleInputChange}
            inputList={inputList}
            setInputList={setInputList}
            handleBack={handleBack}
            selectedDate={selectedJoinDate}
            setSelectedDate={selectedJoinDate}
            handleDateChange={handleJoinDateChange}
          />
        );
      case 2:
        return (
          <BankDetails
            handleBack={handleBack}
            handleChange={handleChange}
            values={data}
          />
        );
      default:
        return <p>Unknown stepIndex</p>;
    }
  };

  return (
    <>
      <FormStepper
        activeStep={activeStep}
        steps={steps}
        getStepContent={() => getStepContent(activeStep)}
      />
    </>
  );
};

export default Registeration;
