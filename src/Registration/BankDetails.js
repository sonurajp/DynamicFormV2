import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


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

const BankDetails = ({ values,handleChange,handleNext, handleBack }) => {   
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='sm' >
                <Paper elevation={1} style={{ padding: "16px" }}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Your Bank Details
                             </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Account Holder Name"
                                variant="outlined"
                                onChange={handleChange('accHolderName')}
                                defaultValue={values.accHolderName}

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Account Number"
                                onChange={handleChange('accNumber')}
                                defaultValue={values.accNumber}
                                variant="outlined"
                                

                            />
                        </Grid>

                        <Grid item xs={12} className={classes.root}>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Bank Name"
                                defaultValue=""
                                variant="outlined"
                                onChange={handleChange('bankName')}
                                defaultValue={values.bankName}

                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Ifsc Code"
                                onChange={handleChange('ifsc')}
                                defaultValue={values.ifsc}
                                variant="outlined"

                            />
                        </Grid>
                        <Grid container >
                            <Grid item xs={4}>
                                <IconButton aria-label="back" onClick={() => handleBack()}>
                                    <ArrowBackIosIcon fontSize="small" />
                                    <Typography>back</Typography>
                                </IconButton>
                            </Grid>
                            {/* <Grid item xs={6}>
                                <Button variant="contained" color="primary" style={{
                                    backgroundColor: "#707070"
                                }}>

                                    <Typography>Continue to Next</Typography>
                                </Button>
                            </Grid> */}
                            <Grid container justify="center">
                                <Button variant="contained" color="primary" style={{
                                    backgroundColor: "#707070"
                                }} onClick={() => handleNext()}
                                >
                                    <Typography>Continue To Next</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )
}
export default BankDetails
