import { Box, Button, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Stack, Switch, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

const RegisterLast = () => {
  const {handleSubmit, register, formState: {errors},
  reset, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      gender: '',
      tnc: ''

    }
   })

   //in order to validate password with password 
   // do not match, You need to watch the value 
   //if they match or not

   const password = watch("password", "")

   const onSubmit = (data) => {
    console.log(data)
    reset()
   }
   console.log(errors)


  return (
    <Box sx={{display: "flex", justifyContent: "center", 
    maxWidth: 600, height: 600,  marginTop: 7}}>

          
        <Box sx={{ display: "flex", flexDirection: "column", width: 500, height: "700"}}>
          
          <Typography marginY={10} textAlign="center"  
          sx={{backgroundColor: "#cecece", borderRadius: 10, }} >
            Material UI with React Hook Form Validation
          </Typography>

          
          <form onSubmit={handleSubmit(onSubmit)}>

       
       <Stack direction={"row"} spacing={2}>
          <TextField sx={{marginBottom: 3}}
          error={Boolean(errors.firstName)}
          id="outlined-firstName-helper-text"
          label="FirstName"
          {...register("firstName", {required: "Firstname is required"})}
          helperText={errors.firstName?.message}
        />

          <br /> 
          <TextField sx={{marginBottom: 3}}
          error={Boolean(errors.firstName)}
          id="outlined-firstName-helper-text"
          label="LastName"
          {...register("lastName", {required: "Lastname is required"})}
          helperText={errors.lastName?.message}
        />

</Stack>


          <br /> 

    {/* <Box display={"flex"} justifyContent={"center"}> */}

    <Stack direction="row" spacing={2} >
    
          <TextField type="email" 
          sx={{marginBottom: 3}}
          error={Boolean(errors.email)}
          id="outlined-email-helper-text"
          label="Email"
          {...register("email", {required: "Email is required" ,
          pattern: {
            // value: /^\S+@\S+$/i,
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email not follow"
           }})}
          helperText={errors.email?.message}
        />


        <TextField type="tel" 
          sx={{marginBottom: 3}}
          error={Boolean(errors.phone)}
          id="outlined-phone-helper-text"
          label="Phone"
          {...register("phone", {required: "Phone is required" ,
          maxLength: {
            value: 10,
            message: "Must be 10 digits"
           },
          
           minLength: {
            value: 10,
            message: "The minimum digits must be 10"
           }
          
          })}
          helperText={errors.phone?.message}
        />

        
  
  </Stack>


    {/* </Box> */}

        <br />

    <Stack direction={"row"} spacing={2}>
          
    <TextField type="password"
          sx={{marginBottom: 3}}
          error={Boolean(errors.password)}
          id="outlined-firstName-helper-text"
          label="Password"
          {...register("password", {required: {
            value: true,
            message: "Password is required"
          },
          minLength: {
            value: 8, 
            message: "The Minimum length must be 8 or more"
          }
        
        })}
          helperText={errors.password?.message}
        />


        
          <TextField type="password"
          sx={{marginBottom: 3}}
          error={Boolean(errors.password2)}
          id="outlined-firstName-helper-text"
          label="Confirm Password"
          {...register("password2", {validate: value => password === value || "Password  do not match"})}
          helperText={errors.password2?.message}
        />
    </Stack>

          {/* Radio check: Form Control or Form Group */}
            <br />

      <FormControl error={Boolean(errors.gender)}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" 
        control={<Radio {...register("gender", {required: "Gender is required"})} />} 
        label="Female" />

        <FormControlLabel value="male" 
        control={<Radio {...register("gender", {required: "Gender is required"})} />} 
        label="Male" />

        <FormControlLabel value="other" 
        control={<Radio {...register("gender", {required: "Gender is required"})} />} 
        label="Other" />
        
      </RadioGroup>

      <FormHelperText>
        {errors.gender?.message}
      </FormHelperText>

    </FormControl>

    <br />


    <FormGroup error={Boolean(errors.tnc)}>
  <FormControlLabel 
  control={<Switch {...register("tnc", {required: "You need to accept our Terms and Condition"})} />} 
  label="Agree to our Terms and Condition" />
</FormGroup>
<FormHelperText sx={{color: "red"}}>
  {errors.tnc?.message}
</FormHelperText>








            < br/> <br />
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button sx={{marginBottom: 3, }}
            type='submit' variant='contained'>
              Create An Account
            </Button>

          </Box>

          </form>

         

        </Box>



    </Box>
  )
}

export default RegisterLast
