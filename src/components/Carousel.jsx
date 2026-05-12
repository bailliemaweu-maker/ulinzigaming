import React from 'react'

const Carousel = () => {
  return (
    <section class="row">
            <div class="col-md-12">
                {/* <!-- add a division with carousel content  --> */}
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- inner division --> */}
                    <div class="carousel-inner">
                        {/* <!-- division with image 1  --> */}
                        <div class="carousel-item ">
                            <img src="images/Ulinzi Gaming logo with armored warrior.png" alt="" width="100%" height="500px"/>
                        </div>

                        {/* <!-- division with image 2  --> */}
                        <div class="carousel-item active">
                            <img src="images/adb94a9b-27fc-4ac8-b96c-82dcb9d054cb.png" alt="" width="100%" height="500px"/>
                        </div>
                        
                        {/* <!-- division with image 3 --> */}
                        <div class="carousel-item">
                            <img src="images/d689bc05-b110-4033-8708-1fdc7c9c2972.png" alt="" width="100%" height="500px"/>
                        </div>




                    </div>
                    {/* <!-- previous contol  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon bg-warning"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span class="carousel-control-next-icon bg-warning"></span>
                    </a>
                </div>
            </div>
        </section>
        
  )
}

export default Carousel