import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../components/Loader";
import coverImg from "../components/images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className='flex flex-col mb-5'>
      <div>
        <button type='button' className='flex items-center' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='font-semibold text-purple-700'>Go Back</span>
        </button>

        <div className='flex flex-col lg:flex-row mt-10 '>   {/* Align book image and info in a row on large screens, column on small screens */}

          <div className="flex justify-center mb-4 lg:mb-0">
            <img src={book?.cover_img} alt="cover img" className="bookcover lg:w-full lg:h-full md:size-[50%]" />
          </div>

          <div className="books-info flex flex-col text-left justify-center px-4 lg:ml-[100px]">   {/* book details info */}
            <div className='book-details-item title'>
              <span className='font-bold text-2xl'>{book?.title}</span>
            </div>
            <div className='book-details-item description mt-4'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item mt-4'>
              <span className='font-bold'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item mt-4'>
              <span className='font-bold'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item mt-4'>
              <span className='font-bold'>Subjects: </span>
              <span className='line-clamp-6'>{book?.subjects}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BookDetails;
