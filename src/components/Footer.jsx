import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="row bg-secondary p-2 ">
        {/* <!-- child 1  --> */}
        
        {/* <!-- child 3  --> */}
        <div class="col-md-11">
          <h2 class="text-center text-white">Stay Connected to us by checking our socials</h2>
          
          <a href="https://www.facebook.com">
            <img src="images/download (2).png" alt="fb" width="5%" />
          </a>
          ,
          <a href="https://www.instagram.com">
            <img src="images/download (16).jpeg" alt="in" width="5%" />
          </a>
          ,
          <a href="https://www.x.com">
          
            <img src="images/download.png" alt="x" width="5%" />
          </a>


          <p>Your can stay connected to us and could be able to tell us what to do to enhance our services to
            you, our customers.</p>
        </div>
      </section>
      <footer className='col-md-12 text-dark bg-secondary p-3'>
        <p className='text-center'>Copyright © 2026 Ulinzi Gaming. All rights reserved.</p>
        <marquee behavior="scroll" direction="left">Developed by Baillie Maweu</marquee>
      </footer>
    </div>
  )
}

export default Footer