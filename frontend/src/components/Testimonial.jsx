import React from "react";

const Testimonial = () => {
  return (
    <div class="testimonial">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              "I’ve never found a pair of shoes that combine style and comfort
              like these do. Every step feels amazing! Highly recommend!"
            </p>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <img src="images/user-2.jpg" />
            <h3>Ayesha Noor</h3>
          </div>
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              "The quality of these shoes is exceptional, and the designs are so
              on-trend. I’m hooked and will definitely be coming back for more!"
            </p>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <img src="images/user-1.jpg" />
            <h3>Mustafa Shahzad</h3>
          </div>
          <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>
              "Shopping here was a breeze, and the shoes exceeded my
              expectations. They’re stylish, durable, and fit perfectly. Love
              them!"
            </p>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <img src="images/user-3.jpg" />
            <h3>Sophia</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
