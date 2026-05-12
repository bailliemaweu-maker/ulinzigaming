import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  const imagepath = 'http://b4illi3kifaru.alwaysdata.net/static/images/'

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h1 className="text-center text-warning bg-secondary py-3">Your cart is empty</h1>
        <p className="text-center bg-light">Add products from the store to see them here.</p>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center text-white bg-secondary py-3">Shopping Cart</h1>
      <div className="row mb-3">
        <div className="col-12 d-flex flex-wrap gap-2">
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/makepayment', { state: { cartItems: cart } })}
          >
            Checkout all items
          </button>
        </div>
      </div>
      <div className="row">
        {cart.map((item) => (
          <div className="col-md-4 mb-4" key={item.product_id}>
            <div className="card shadow h-100">
              <img
                src={imagepath + item.product_photo}
                alt={item.product_name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5>{item.product_name}</h5>
                <p>{item.product_description}</p>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>Ksh {item.product_cost}</strong>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-warning w-100 mb-2"
                  onClick={() => navigate('/makepayment', { state: { singleproduct: item } })}
                >
                  Checkout item
                </button>
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={() => removeFromCart(item.product_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-end">
          <h3>Total: Ksh {cartTotal}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart
