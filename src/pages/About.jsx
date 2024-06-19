import React from 'react';
import aboutImg from "../components/images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>

        <div className='flex justify-center font-bold text-[50px] mt-12'>
          <h1>About</h1>
        </div>

        <div className='about-content grid'>

          <div className='flex justify-center'>
            <img src = {aboutImg} alt = "" />
          </div>

          <div className='mt-9 p-5'>
            <p className='fs-17'>Welcome to Open Library! Our mission is to make books accessible to everyone, everywhere. We offer a vast collection of free e-books, spanning a wide range of genres and topics. Whether you love fiction, non-fiction, academic texts, or children's books, you'll find something to enjoy. Our user-friendly platform allows you to read online or download books to any device. Join our community of readers and explore the world of knowledge at your fingertips. Open Library is your gateway to endless learning and adventure. Happy reading!</p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default About