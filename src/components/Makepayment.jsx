import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
    const { cartItems, singleproduct } = useLocation().state || {}
    const imagepath ="http://b4illi3kifaru.alwaysdata.net/static/images/"

    const paymentItems = cartItems?.length > 0 ? cartItems : singleproduct ? [singleproduct] : []
    const totalAmount = paymentItems.reduce(
      (sum, item) => sum + (Number(item.product_cost) || 0) * (item.quantity || 1),
      0
    )

    // declare the states 
    const [phone,setPhone] = useState("")

    // define the 3 states 
    const[loading,setLoading] = useState("")
    const[success,setSuccess] = useState("")
    const[error, setError] = useState("")

    
    const handlesubmit = async (e)=>{
      e.preventDefault()
     setLoading("Please wait...")

    //  Create an  empty envelope  
    const formdata = new FormData()
    formdata.append("amount", totalAmount)
    formdata.append("phone", phone)
    

    try {
        const response = await axios.post("http://b4illi3kifaru.alwaysdata.net/api/mpesa_payment",formdata)
        
        setSuccess(response.data.message)
        setLoading("")
    } catch (error) {
        setError(error.message)
        setLoading("")
        
    }
}

  if (paymentItems.length === 0) {
    return (
      <div className="container mt-4">
        <h1 className="text-center text-warning">Nothing to pay for</h1>
        <p className="text-center">Return to the cart and select items before checking out.</p>
      </div>
    )
  }

  return (
    <div className="row justify-content-center">
        <h1 className='bg-success w-100 text-white'>Make payment - Lipa na Mpesa</h1>
        <div className='col-md-8 card shadow p-4 bg-secondary'>
            {cartItems?.length > 0 ? (
              <>
                <h4 className='text-white'>Cart checkout</h4>
                <div className='mb-3'>
                  {paymentItems.map((item) => (
                    <div key={item.product_id} className='mb-2 p-2 bg-white rounded'>
                      <strong>{item.product_name}</strong> x {item.quantity || 1}
                      <div>Ksh {(Number(item.product_cost) || 0) * (item.quantity || 1)}</div>
                    </div>
                  ))}
                </div>
                <h5 className='text-start text-danger'>Total: Ksh {totalAmount}</h5>
              </>
            ) : (
              <>
                <img src={imagepath + singleproduct.product_photo} alt="" style={{height : "300px", objectFit: "contain"}}/>
                <h5 className='text-primary text-start'>{singleproduct.product_name}</h5>
                <p className='text-start '>{singleproduct.product_description}</p>
                <b className='text-start text-danger'>Ksh {singleproduct.product_cost}</b>
              </>
            )}

            <h2 className='text-secondary'>{loading} </h2>
            <h2 className='text-success'>{success} </h2>
            <h2 className='text-danger'>{error} </h2>

            <form action="" onSubmit={handlesubmit}>
                <input type="number" className='form-control' placeholder='Enter phone 254XXXXXXXXX' onChange={(e)=>setPhone(e.target.value)}/>
                <br />
                <button type='submit' className='btn btn-success w-100'>Make payment</button>
            </form>
        </div>
    </div>
  )
}

export default Makepayment 