import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>E-Vasha</h1>
            <p>Experience the joy of shopping with us, where luxurious comfort, exquisite selection, and empowering self-expression intertwine, creating unforgettable moments of pure delight and making your shopping dreams come true.</p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>BOX 1875, NAIVASHA 20117, Kenya</li>
              <li>Email: E-Vasha@gmail.com </li>
              <li>Phone: +254700000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
