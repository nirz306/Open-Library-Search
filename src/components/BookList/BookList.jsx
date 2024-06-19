import React from "react";
import { useGlobalContext } from "../../pages/Context";
import coverImg from "../images/cover_not_found.jpg";
import Loading from "../../components/Loader";
import Book from "../BookList/Book"

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      //removing/works/to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
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
            booksWithCovers.slice(0,30).map((item,index) => {
              return(
                <div className="flex items-center justify-center min-h-screen ">
                  <Book key = {index} {...item} />
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
