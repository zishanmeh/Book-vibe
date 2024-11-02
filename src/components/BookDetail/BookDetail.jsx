import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const param = useParams();
  const bookId = parseInt(param.bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === bookId);
  const {
    image,
    author,
    bookName,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
  } = book;
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl">
      <div className="hero-content flex-col lg:flex-row lg:gap-9">
        <div className="p-6 rounded-xl bg-gray-100">
          <img
            src={book.image}
            className="max-w-sm max-h-screen rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{book.bookName}</h1>
          <p className="py-6">By: {book.author}</p>
          <p className="my-4">Review: {review}</p>
          <p>
            Tags:{" "}
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className=" bg-green-100 text-green-900 p-3 ml-3 text-xs rounded-full"
              >
                {tag}
              </button>
            ))}
          </p>
          <hr className="my-4 border" />
          <div className="flex flex-col gap-4">
            <p>Number of pages: {totalPages}</p>
            <p>Publisher: {publisher}</p>
            <p>Year of publishing: {yearOfPublishing}</p>
            <p>Rating {rating}</p>
          </div>
          <div className="flex gap-4 my-4">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-active btn-accent text-white">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
