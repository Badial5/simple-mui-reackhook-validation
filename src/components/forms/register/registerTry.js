import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import "../../../App.css"


const RegisterTry  = () => {

    const { register, handleSubmit, watch, 
    formState: {errors}  } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            tnc: "",
            category: "",
            checkbox: "",
            radio: ""
        }
    })

    const onSubmit = (data) => console.log(data)
    console.log(errors)




   



  return (
    <div className='App__form'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <h2>Material UI TextField Practicing</h2>

        <TextField
          id="outlined-error-helper-text"
          label="FirstName"
         
        {...register("firstName", {required: "First Name is required"})}

          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />

        <br /> <br />

        <TextField
          id="outlined-error-helper-text"
          label="Last Name"
         
        {...register("lastName", {required: "Last Name is required"})}

          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />


        <br /> <br />

        <TextField  
        id="outlined-error-helper-text"
        label="Email"
       {...register("email", {required: {
        value: true,
        message: "Email is required"
       },

       pattern: {
        value: /^\S+@\S+$/i,
        message: "Email not follow"
       }
    }) }

        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        />

        <br /> <br />


<FormControl error={Boolean(errors.gender)}>


  <FormLabel id="demo-radio-buttons-group-label">Choose Your Gender</FormLabel>
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    name="gender"
  >
    <FormControlLabel value="female" 
    control={<Radio {... register("gender", {required: {
        value: true,
        message: "Select Your Gender"
    }})} />} label="Female" />

    <FormControlLabel value="male" 
    control={<Radio {... register("gender", {required: {
        value: true,
        message: "Select Your Gender"
    }})} />} label="Male" />

    <FormControlLabel value="other" 
    control={<Radio {... register("gender", {required: {
        value: true,
        message: "Select Your Gender"
    }})} />} label="Other" /> 

  

  </RadioGroup>
</FormControl>


    <br />
{/* Terms and conditions */}

<FormGroup error={Boolean(errors.tnc)}>
      <FormControlLabel 
      control={<Checkbox {...register('tnc', {required: {
        value: true,
        message: "You must agree to our Terms and Condition"
    }})} />} 



      label="Agree to our Terms and Condition" />
      
    </FormGroup>
    <FormHelperText sx={{color: "red"}}
    >{errors.tnc?.message}</FormHelperText>


        <div className="clearfix"></div>
        

        <Button type='submit' variant='contained' 
        className='btns'>
            Submit
        </Button>


      </form>
    </div>
  )
}

export default RegisterTry
