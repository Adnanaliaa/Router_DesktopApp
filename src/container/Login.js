import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useNavigate } from "react-router-dom";
export default function Login() {
const [name,setName] = React.useState('')
const [password,setPassword] = React.useState('')
let navigate = useNavigate();

const onSubmitData = (e)=>{
e.preventDefault()
navigate("/dashboard",{ state: { name,  } });
}
  return (
    <div style={{marginTop:250}}>

    <Grid  container
  direction="column"
  justifyContent="center"
  alignItems="center" spacing={2} >
      <Typography variant="h4" component="div" >
        Sign In
      </Typography>
      <Grid item xs={8} >
      <TextField id="outlined-basic" label="Name" variant="outlined" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Grid>
      <Grid item xs={8} >
      <TextField id="outlined-basic" label="Password" variant="outlined" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Grid>
      <Grid item xs={8} >
      <Button variant="contained" onClick={onSubmitData}>Submit</Button>
      </Grid>
    </Grid>
    </div>
     
  );
}