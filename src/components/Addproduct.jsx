import axios from 'axios'
import React,{useState} from 'react'
const Addproduct = () => {
    // Declare our states here 
    const[product_name,setProductName]= useState ("")
    const[product_description,setProductDescription] = useState("")
    const[product_cost,setProductCost] = useState("")
    const[product_photo,setProductPhoto] = useState("")

    // Three states for posting data 
    const[loading,setLoading] =useState("")
    const[success,setSuccess] = useState("")
    const[error, setError] = useState("")

    // Function to hanndle submit 

    const handlesubmit= async (e) =>{
       e.preventDefault()
       setLoading("Please wait...")

    //    Create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("product_name", product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)
        try {
            const response =await axios.post("http://b4illi3kifaru.alwaysdata.net/api/add_product", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

  return (
    <div className="row  justify-content-center mt-2 ">
        <div className='col-md-8 card shadow p-4'>
            <h1 className='text-danger'>Add Products</h1>

            {/* bind the states  */}
            <h2 className='text-warning'>{loading} </h2>
            <h2 className='text-success'>{success} </h2>
            <h2 className='text-danger'>{error} </h2>





            <form action=""  onSubmit={handlesubmit} className='bg-white'>
                <input type="text" placeholder='Enter Product Name' className='form-control bg-secondary' onChange={(e) =>setProductName(e.target.value)} />
                <br />
                <textarea name="" id="" placeholder='Enter Product Description ' className='form-control bg-secondary' onChange={(e)=>setProductDescription(e.target.value)}></textarea>
                <br />
                <input type="number" placeholder='Enter Product Cost' className='form-control bg-secondary' onChange={(e)=>setProductCost(e.target.value)}/>
                <br />
                <input type="file" accept='image/*' placeholder='Enter Product Photo' className='form-control bg-secondary' onChange={(e)=>setProductPhoto(e.target.files[0])} />
                <br />
                <button type='submit' className='btn btn-success form-control bg-success'>Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default Addproduct