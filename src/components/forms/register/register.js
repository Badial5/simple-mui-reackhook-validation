import React from 'react'
import { TextField, Button, Radio, RadioGroup, FormControl, FormLabel, 
FormHelperText, FormGroup, Checkbox, FormControlLabel } from '@mui/material'

//react hook form
import { useForm } from 'react-hook-form'

//css
import "../../../App.css"


const RegisterApi = () => {

    const { register, handleSubmit, formState: {errors}, 
watch  } = useForm();

    const onSubmit = (data) => console.log(data)
    console.log(errors)

  return (
    <div className='App__form'>
        <h1>Material UI with React Hook Form - Validation and show errors</h1>
      <form onSubmit={handleSubmit(onSubmit)}>


        <TextField id="outlined-basic" 
        label="First Name" name='firstName'
        variant="outlined" fullWidth
        {
            ...register("firstName", { required: "First Name is required" })
        }
        error={Boolean(errors.firstName)}
        helperText={errors.firstName?.message}

        />

        <TextField variant='outlined' 
        label='Last Name' name='lastName' fullWidth
        {
            ...register("lastName", {required: "Last Name is required"})
        }
        error={Boolean(errors.lastName)}
        helperText={errors.lastName?.message}
        
        />

        <TextField variant='outlined' type={"email"}
        label="Email" name='email' fullWidth
        {
            ...register("email", {required: {
              value: true,
              message: "Email is required"}, 
              
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email must have @ sign"
              }

              })
        }

        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        
        />


        {/* Select Option */}


        <FormControl error={Boolean(errors.gender)} 
       >
          <FormLabel component="animateMotion">Choose Your Gender </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel value="female"
            control={
                <Radio {...register("gender", {required: "Choose Your Gender"})} />
            }
            label="Female" />

            <FormControlLabel value="male" 
            control={ 
                <Radio {...register("gender", {required: "Choose Your Gender"})} />
             } 
             label="Male"
            />

            <FormControlLabel value="other" 
            control={
                <Radio {...register("gender", {required: "Choose Your Gender"} )} />
            }
            label="Other"
            />
            </RadioGroup>
        </FormControl>


            {/* Check Box */}

            <FormGroup 
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel 
            control={
              <Checkbox  name="tnc" {...register("tnc", { required: "please aggre our terms and condtions" })} />
            } 
            label="I aggree all terms and conditions" 
          />
        </FormGroup>
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>



        <div className="clearfix"></div>''



        <Button variant='contained' color='primary' 
        type='submit' className='btns'>
            Create New Account
        </Button>

        </form>

    </div>
  )
}

export default RegisterApi
