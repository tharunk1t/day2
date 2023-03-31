import React from 'react'
import img1 from "../Images/images.jpg";
import img2 from "../Images/images 2.jpg";
import img3 from "../Images/fogg.jpg"
import img4 from "../Images/queen.jpg";
import img5 from "../Images/ones.jpg"
import img6 from "../Images/denver.jpg"
import img7 from "../Images/pa.jpg"
import img8  from "../Images/ck.jpg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>VILLAIN</h2>
        <h2>Price : $100</h2>
        <h2>Type : dark</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>ROADSTER</h2>
        <h2>Price : $200</h2>
        <h2>type : fresh mint </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>FOGG</h2>
        <h2>Price : $50</h2>
        <h2>type :woody </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>QUEEN</h2>
        <h2>Price : $75</h2>
        <h2>type : sea breeze</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>ONES</h2>
        <h2>Price : $500</h2>
        <h2>Type : lemon</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>DENVER</h2>
        <h2>Price : $200</h2>
        <h2>type : dark </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>PARK AVENUE</h2>
        <h2>Price : $20</h2>
        <h2>Type : mild fragrance</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>CK</h2>
        <h2>Price : $350</h2>
        <h2>type : deodrant</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
