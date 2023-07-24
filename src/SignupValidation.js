function Validation(values)
{
   let error= {}
   const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   if(values.name === "")
    error.name = "Name must be provided"
   else{
    error.name =""
   }

   if(values.email === "")
    error.email = "Please enter a valid email"
   else if(!email_pattern.test(values.email)){
    error.email = "email didn't match"
   }
   else{
    error.email =""
   }

   if(values.password === "")
    error.password = "Please enter a valid password"
   else{
    error.password =""
   }
   return error;
}

export default Validation;