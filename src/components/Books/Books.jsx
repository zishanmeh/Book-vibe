import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("BooksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-bold text-center my-5 text-4xl">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between gap-9">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
