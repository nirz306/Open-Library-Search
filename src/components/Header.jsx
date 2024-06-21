import React from 'react';
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import head_img from "../components/images/about-img.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div className="bg-aboutus h-screen md:w-[1/2] md:h-screen sm:w-[1/2] lg:h-screen lg:w-full">
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center pt-[150px] md:pt-48 lg:pt-[150px]">Find a book of your choice.</h2>
          <br />
          <p className="text-white px-4 md:px-16 lg:px-64">Online libraries offer vast collections of books accessible from home. With e-books, readers can download and enjoy their favorite titles anywhere. This revolutionizes the reading experience, making literature more accessible and enjoyable.</p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}

export default Header;
