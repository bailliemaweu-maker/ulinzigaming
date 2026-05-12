import axios from 'axios'
import Carousel from './Carousel'
import React,{useContext,useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { CartContext } from './CartContext'

const Getproducts = () => {

  let navigate = useNavigate();

  // states
  const [loading,setLoading] = useState("")
  const [products,setProducts] = useState([])
  const [error,setError] = useState("")

  const [search,setSearch] = useState("")
  const [VisibleCount, setVisibleCount] = useState(8)

  // category state
  const [selectedCategory, setSelectedCategory] = useState("All")

  // get unique categories
  const categories = ["All", ...new Set(products.map(item => item.category))]

  // filter products
  const filtered_products = products.filter((item) => {

    const matchesSearch =
      item.product_name.toLowerCase().includes(search.toLowerCase()) ||
      item.product_description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // get products
  const getproducts = async () => {

    setLoading("Please wait...")

    try {

      const response = await axios.get(
        "http://b4illi3kifaru.alwaysdata.net/api/getproducts"
      )

      setProducts(response.data)
      setLoading("")

    } catch (error) {

      setError(error.message)
      setLoading("")
    }
  }

  useEffect(() => {
    getproducts()
  }, [])

  const imagepath ="http://b4illi3kifaru.alwaysdata.net/static/images/"

  const { addToCart } = useContext(CartContext)

  return (

    <div className="container-fluid">

      <div className="row">

        {/* carousel */}
        <Carousel/>

        {/* search */}
        <div className="row justify-content-center mt-3 mb-3">

          <input
            className="form-control w-50"
            type="search"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* category buttons */}
        <div className="text-center mb-4 bg-secondary">

          {categories.map((category,index) => (

            <button
              key={index}
              className={`btn m-2 ${
                selectedCategory === category
                  ? "btn-info"
                  : "btn-outline-dark"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        <h1 className='text-black bg-white text-center'>
          Available Products
        </h1>

        <h2 className='text-warning text-center'>{loading}</h2>

        <h2 className='text-danger text-center'>{error}</h2>

        {/* products */}
        {filtered_products
          .slice(0, VisibleCount)
          .map(singleproduct => (

          <div
            className="col-md-3 p-3 mb-3"
            key={singleproduct.product_id}
          >

            <div className='card shadow h-100'>

              <img
                src={imagepath + singleproduct.product_photo}
                alt=""
                style={{height:"200px", objectFit:"cover"}}
              />

              <div className="card-body">

                <h2>{singleproduct.product_name}</h2>

                <p>{singleproduct.product_description}</p>

                <h5 className='text-primary'>
                  {singleproduct.category}
                </h5>

                <b className='text-success'>
                  Ksh {singleproduct.product_cost}
                </b>

                <br /><br />

                <button
                  className='btn btn-success me-2'
                  onClick={() => addToCart(singleproduct)}
                >
                  Add to Cart
                </button>
                <button
                  className='btn btn-warning form-control mt-2'
                  onClick={() =>
                    navigate("/makepayment",{state:{singleproduct}})
                  }
                >
                  Purchase Now
                </button>

              </div>

            </div>

          </div>

        ))}

        {/* load more */}
        <div className="text-center mt-3 mb-4">

          {VisibleCount < filtered_products.length && (

            <button
              className="btn btn-info"
              onClick={() => setVisibleCount(VisibleCount + 8)}
            >
              LOAD MORE
            </button>

          )}

        </div>

      </div>

    </div>
  )
}

export default Getproducts