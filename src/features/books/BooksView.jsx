import { useSelector } from "react-redux"
import BookCard from "../../Components/BookCard";

export default function BooksView() {

  const books = useSelector(state => state.booksReducer.books)
  

  console.log(books)

  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-semibold underline underline-offset-2 " >Books View</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2 ">
        {books.map(book => <BookCard key={book.id}  book={book}/> )}
      </div>
    </div>
  )
}