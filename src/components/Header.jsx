import React from 'react'
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import head_img from "../components/images/about-img.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar/>
        <div class="bg-aboutus background-size: 100%  h-screen w-full">
          <h2 class="text-white font-bold text-[40px] text-center pt-[200px]">Find a book of your choice.</h2>
          <br/>
          <p class="text-white pr-[270px] pl-[270px]">Online libraries offer vast collections of books accessible from home.With e-books, readers can download and enjoy their favorite titles anywhere.This revolutionizes the reading experience, making literature more accessible and enjoyable.</p>
        <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
