import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Formik,Form} from 'formik'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as Yup from "yup"



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

const FormikForm = ({ handleNext, values, handleChange }) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiThemeProvider>

            <div>
                
                <Container maxWidth='sm'  >
                    <Formik initialValues={{entityName:values.entityName,
                    Country:values.country,type:values.type}}
                    validationSchema={Yup.object({entityName:Yup.string().required()})}
                    >

                        {({values,touched,handleBlur,handleChange,errors})=>(
                            <Form>
                    <Paper elevation={1} style={{ padding: "20px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    Your Originization Details
                             </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.root}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="icon-button-file"
                                    type="file"
                                />
                                <label htmlFor="icon-button-file">

                                    <IconButton

                                        aria-label="upload picture"
                                        component="span"
                                    >
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            </Grid>
                            <Grid item xs={12} className={classes.root}>
                                <TextField
                                    color='secondary'
         
                                    name="entityName"
                                    id="entityName"
                                    label="entityName"
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={values.entityName}
                                    onBlur={handleBlur}
                                />
                             { errors.entityName && touched.entityName && <small>{errors.entityName}</small>}
                                <TextField
                                    color='secondary'
                                    required
                                    id="country"
                                    label="Country"
                                    variant="outlined"
                                    onChange={handleChange('country')}
                                    defaultValue={values.Country}
                                />
                            </Grid>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid item xs={12} className={classes.root}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/mm/yyyy"
                                        margin="normal"
                                        id="incorporationDate"
                                        label="Legal incorporation date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}

                                    />

                                    <TextField
                                        color='secondary'
                                        required
                                        id="type"
                                        label="type"
                                        defaultValue={values.type}
                                        variant="outlined"
                                        onChange={handleChange('type')}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <Grid container justify="center">
                                <Button type='submit' variant="contained" color="primary" style={{
                                    backgroundColor: "#707070"
                                }} 
                                >
                                    <Typography>Continue To Next</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Form>
                    )}
                    </Formik>
                </Container>

            </div>
        </MuiThemeProvider>
    )
}

export default FormikForm
