import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DynamicTextField from './DynamicTextField'
import AddIcon from '@material-ui/icons/Add';
import SigCss from './SignatoryDetails.scss'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '26ch',
        },
    },
    input: {
        display: "none"
    }
}));


const SignatoryTextField = ({values,handleChange}) => {
const classes = useStyles();

    return (
        
        <React.Fragment>
                                 <TextField
                                     color='secondary'
                                     required
                                    id="outlined-required"
                                     label="Full Name"
                                    defaultValue=""
                                    variant="outlined"
                                    onChange={handleChange("fullName")}
                                    defaultValue={values.fullNameSub}
                                />
                                <TextField
                                    color='secondary'
                                    required
                                    id="outlined-required"
                                    label="Designation"
                                    defaultValue=""
                                    variant="outlined"
                                    onChange={handleChange("designation")}
                                    defaultValue={values.designation}

                                />
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="dd/mm/yyyy"
                                                margin="normal"
                                                id="date-Of-joining"
                                                label="Date Of joining"
                                                // value={selectedDate}
                                                // onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
        </React.Fragment>
    )
}

export default SignatoryTextField
