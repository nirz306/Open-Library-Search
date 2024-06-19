import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext(); //React.createContext() creates a Context object.
// Context is used to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language, without having to pass props down manually at every level.

const AppProvider = ({ children }) => {
  // In React, children is a special prop that allows you to pass components or elements as child elements of a component. It represents the content between the opening and closing tags of a component.
  //   When you define a component like <AppProvider>{children}</AppProvider>, whatever is inside the <AppProvider> tags is passed to the AppProvider component as children => refer app.js
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    // useCallback is used to memoize the fetchBooks function.
    // The dependencies array [searchTerm] means fetchBooks will only be recreated if searchTerm changes.(check the last line)
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`); //he await keyword pauses the execution of the function until the promise returned by fetch is resolved.
      //   fetch sends an HTTP request to the URL constructed with searchTerm.
      const data = await response.json(); //Once the fetch promise resolves, response.json() is called to parse the JSON body of the response.Parse mnjhe ki Parsing in this context refers to the process of converting a string of data (in this case, JSON format) into a structured data format that a programming language can understand and manipulate, typically an object or an array.
      console.log(data);
      const { docs } = data; //Destructuring is used to extract the docs property from the data.
   

      if (docs) {
        //slicing mnjhe first 20books la shortlist karto apan
        const newBooks = docs.slice(0, 20).map((bookSingle) => { //map is used to transform each book in this array into a new format
          const { //we destructure each array into object (bookSingle) with properties like key,cuthor_name,cover_i etc 
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {  //returns a new object with the properties we need, renaming some of them for clarity.
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);//updates the state with the new array 

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } 

      else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
        
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    //The useEffect hook in React is a way to run side effects in your function components. Side effects can include data fetching, setting up subscriptions, or manually changing the DOM. The useEffect hook allows you to perform these operations in a declarative way, ensuring they run at the right times during the component's lifecycle.
    fetchBooks(); //fetchBooks is the effect function that will be executed when certain dependencies change.
  //this function is resposible for fetching the books from the openlibrary api based on the search term
  }, [searchTerm, fetchBooks]);//this is the second argument of useEffect and it contains  the dependecies
  //When any of the dependencies in this array change between renders, React will re-run the effect function (the first argument).
  //jeva pan search term change hoil or uodate hoil teva fetchbooks parat re-run hoil 

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
