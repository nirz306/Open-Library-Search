import React from "react";
import { useGlobalContext } from "../../pages/Context";
import coverImg from "../images/cover_not_found.jpg";
import Loading from "../../components/Loader";
import Book from "../BookList/Book"

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext(); //extracting the books,loading and resultTitle

  const booksWithCovers = books.map((singleBook) => {//Iterates over each book in the books array.
    return {
      ...singleBook, //Copies all properties of the current book.
      // Modifies the book ID by removing "/works/" from it.
      id: singleBook.id.replace("/works/", ""),//removing/works/to get only id
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg, //Sets the cover image URL if cover_id is available; otherwise, it uses the default coverImg.
    };
  });


  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div>
        <div>
          <h2>{resultTitle}</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {
            booksWithCovers.slice(0,30).map((item,index) => { //Takes the first 30 books from the booksWithCovers array and maps over them.

              return(
                <div className="flex items-center justify-center min-h-screen ">
                  <Book key = {index} {...item} /> 
                  {/* Renders the Book component for each item, passing all book properties as props. */}

                  {/* ...item is the spread operator. It takes all the properties of the item object and passes them as props to the Book component. */}
                  {/* The key={index} prop is required by React when rendering lists to help keep track of each element. */}
                  </div>
              )
            })
          }
          </div>
      </div>
    </section>
  );
};

export default BookList;
