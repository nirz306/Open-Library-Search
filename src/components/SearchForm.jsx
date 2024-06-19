import React, { useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../pages/Context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else { 
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="flex justify-center">

      <form className="relative text-[2rem]" onSubmit={handleSubmit}>
        <input
          type='text'
          className="w-full max-w-[680px] pt-[1.4rem] pb-[1.4rem] pl-[2.8rem] pr-[4rem] border-none rounded-[3.8rem]"
          placeholder='The Lost World ...'
          ref={searchText}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={handleSubmit}
        >
          <FaSearch className='text-purple' size={32} />
        </button>
      </form>
    </div>
  )
}

export default SearchForm
