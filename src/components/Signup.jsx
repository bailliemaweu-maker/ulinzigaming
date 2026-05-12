import axios from 'axios'
import React, {useState} from 'react' 

import { Link } from 'react-router-dom'

const Signup = () => {
    // declare our state here 

    const[username , setUsername]= useState ("")
    const[email , setEmail]= useState("")
    const[password , setPassword]= useState("")
    const[phone , setPhone] = useState("")

    // Three states of posting data 
    const[loading,setLoading]= useState("")
    const[success, setSuccess] = useState("")
    const[error, setError]= useState("")

    // STEP 1 GOES HERE 
    const[strength, setStrength] = useState("")

    // Function to handle submit 
    const handlesubmit = async(e) =>{
      e.preventDefault()
      setLoading("Please wait...")
    


    // Create an empty digital envelope 
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)
    
    try {
      const response = await axios.post("http://higgs.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }


  const checkPasswordStrength = (password) => {
    if(password.length <4){
      setStrength("weak");
    } else if (password.length <8){
      setStrength("medium");
    } else{
      setStrength("strong");
    }
  };


  return (
    <div className="row mt-2n justify-content-center">
        <div className='col-md-6 card shadow'>
            <h1>Signup</h1>

            {/* bind the states  */}
            <h2 className='text-warning'> {loading} </h2>
            <h2 className='text-success'> {success} </h2>
            <h2 className='text-danger'> {error} </h2>
            

            <form action="" onSubmit={handlesubmit} className='bg-white'>
                <input type="text" placeholder='Enter username' className='form-control  bg-secondary' onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <input type="email" placeholder='📧Enter E-mail' className='form-control bg-secondary' onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <input 
                type="password" 
                placeholder='🔑Enter password' 
                className='form-control bg-secondary' 
                onChange={(e)=>{
                  setPassword(e.target.value);
                  checkPasswordStrength(e.target.value);}} /> <br />
                  {/* STEP 4 GOES HERE  */}

                  { password && (
                    <p
                      style ={{
                        color:
                        strength === "weak"
                        ? "red"
                        :strength === "medium"
                        ? "orange"
                        : "green"
                      }}
                      >
                        password strength: {strength}
                    </p>
                  )}


                <br />
                <input type="tel" placeholder='📱Enter phone'className='form-control bg-secondary' onChange={(e)=>setPhone(e.target.value )} />
                <br />
                <button type='submit' className='btn btn-secondary w-100 form-control bg-success'>Signup</button>
                <br />
                <p>Already have an account?    <Link to="/login">Login</Link>     </p>
            </form>
        </div>

    </div>
  )
}

export default Signup