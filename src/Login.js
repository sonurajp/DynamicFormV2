import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
const Login = () => {
    return (
        <div>
            <Container maxWidth='sm' >
                <Paper elevation={1} style={{ padding: "16px" }}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Login
                             </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color='secondary'
                                fullWidth
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                color='secondary'
                                fullWidth
                                required
                                id="outlined-required"
                                label="Password"
                                defaultValue=""
                                variant="outlined"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="secondary" >
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </div>
    )
}

export default Login;
