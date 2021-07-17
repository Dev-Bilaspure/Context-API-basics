import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'The way of king', id: 11423},
    {title: 'The name of wind', id: 13335},
    {title: 'The final empire', id: 12113},
    {title: 'The hero of ages', id: 19913},
  ]);
  
  return(
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;