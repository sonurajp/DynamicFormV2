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

const DynamicTextField = ({values,  handleChange, handleNext, handleBack }) => {
    const [inputList, setInputList] = React.useState(values);
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    // list[index][name] = value;
    list[index] = value;

    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            
                    <Grid container direction="column" spacing={3}>   
                        <Grid item xs={12} className={classes.root}>
                            {inputList.map((x, i) =>{
                            return (
                            <>
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Full Name"
                                variant="outlined"
                              
                                onChange={e => handleInputChange(e, i,'fullName')}
                                defaultValue={x.fullName}
                            />
                            <TextField
                                color='secondary'
                                required
                                id="outlined-required"
                                label="Designation"
                                variant="outlined"
                                name='designation'
                                onChange={e => handleInputChange(e, i,'designation')}
                                defaultValue={x.designation}

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
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <div className="btn-box">
                { <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div> 
                            </>
                            );
                        })}
                          
                        </Grid>

                        
                    </Grid>
                

        </div>
    )

}
export default DynamicTextField