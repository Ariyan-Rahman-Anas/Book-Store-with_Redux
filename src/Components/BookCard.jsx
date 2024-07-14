import { Link } from "react-router-dom"
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux"
import { deleteBook } from "../features/books/BookSlice";

export default function BookCard({ book }) {
    const { id, title, author } = book || {}
    
    const dispatch = useDispatch()

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  }

  return (
    <div>
      <div key={id} className="shadow p-4 rounded bg-white hover:bg-gray-100 duration-500 relative "> <h1>{title}</h1>
        {/* <p>{id} </p> */}
          <p className="text-sm">author: {author} </p>
          <div className="edit-delete flex items-center gap-2 absolute top-2 right-2">
            <Link to={"/edit-book"} state={{id, title, author}} > <BiSolidEdit /> </Link>
            <button onClick={()=>handleDeleteBook(id)} ><AiOutlineDelete /> </button>
          </div>
        </div>
    </div>
  )
}