import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AddIcon from "@material-ui/icons/Add";
import SignatoryScss from "./SignatoryDetails.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      // width: "20ch",
    },
  },
  input: {
    display: "none",
  },
}));
const SignatoryDetails = ({
  handleNext,
  handleBack,
  handleDateChange,
  handleInputChange,
  inputList,
  setInputList,
  selectedDate,
}) => {
  const classes = useStyles();

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", designation: "" }]);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Paper elevation={1} style={{ padding: "10px" }}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Your Signatory Details</Typography>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              {inputList.map((x, i) => {
                return (
                  <React.Fragment>
                    <TextField
                      color="secondary"
                      name="firstName"
                      label="Full Name"
                      value={x.firstName}
                      onChange={(e) => handleInputChange(e, i)}
                      variant="outlined"
                      style={{ width: 200 }}
                    />
                    <TextField
                      color="secondary"
                      name="designation"
                      label="designation"
                      value={x.designation}
                      onChange={(e) => handleInputChange(e, i)}
                      variant="outlined"
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        id="date-Of-joining"
                        label="Date Of joining"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    {inputList.length !== 1 && (
                      <IconButton
                        className="HideButton"
                        onClick={() => handleRemoveClick(i)}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    )}
                    <Grid>
                      {inputList.length - 1 === i && (
                        <IconButton onClick={handleAddClick}>
                          <AddIcon />
                          add
                        </IconButton>
                      )}
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
            <Grid container item>
              <Grid xs={4} item>
                <IconButton aria-label="back" onClick={() => handleBack()}>
                  <ArrowBackIosIcon fontSize="small" />
                  <Typography>back</Typography>
                </IconButton>
              </Grid>
              <Grid container xs={8} item alignItems="flex-start">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#707070",
                  }}
                  onClick={() => handleNext()}
                >
                  <Typography>Continue to Next</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default SignatoryDetails;
