import React, { useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../pages/Context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []); //searchText is a useRef object,  current is a property of useRef that holds the current value of the reference. Initially, searchText.current is '' (an empty string).
  //focus(): This method is a DOM method that focuses on an HTML element. When called on an input element, it brings keyboard focus to that input, allowing the user to immediately start typing without clicking on it.
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //reasons for using the preventDefault here 
    //Prevent the Browser from Reloading: You want to prevent the form's default submit action, which would refresh the page and disrupt the user experience.
    // Handle Submission with JavaScript: Instead, you handle the form submission with custom logic:
    // Trim and validate the search term.
    // Update the search term state and the result title.
    // Navigate to a different route using navigate("/book");

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
          className="w-full max-w-[680px] pt-[1.4rem] pb-[1.4rem] pl-[2.8rem] pr-[4rem] border-none rounded-[3.8rem] outline-none focus:outline-none lg:mt-[90px]  sm:mt-[100px] min-[320px]:mt-[50px] "
          placeholder='The Lost World ...'
          ref={searchText}
        />

        <button
          type="submit"
          className="absolute right-4 md:top-[140px] lg:top-[130px] sm:top-[140px] min-[320px]:top-[100px] transform -translate-y-1/2"
          onClick={handleSubmit}
        >
          <FaSearch className='text-purple' size={32} />
          
        </button>
      </form>
    </div>
  )
}

export default SearchForm
