import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${book.bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 cursor-pointer">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img src={image} className=" h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-green-100 text-green-800"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 my border-dashed border-gray-200"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="rating rating-md flex justify-end items-center">
              <p className="text-sm text-gray-800">{rating}</p>
              <input type="radio" name="rating-9" className="rating-hidden" />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 bg-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
