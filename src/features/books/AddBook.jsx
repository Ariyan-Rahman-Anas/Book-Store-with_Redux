import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBook, generateUniqueId } from "./BookSlice"
import { useNavigate } from "react-router-dom"

export default function AddBook() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const uniqueId= generateUniqueId()

  // const numberOfBooks = useSelector(state => state.booksReducer.books.length)

  const handleSubmit = (e) => {
    e.preventDefault()
    const aNewBook = { id: uniqueId, title, author }
    dispatch(addBook(aNewBook))
    navigate("/show-books",  {replace: true} )
  }


  return (
    <div className="flex items-center justify-center text-center ">
        <div className="my-10">
          <h1 className="text-2xl text-center font-semibold underline underline-offset-2 " >Add book</h1>

          <div className="add-book my-5  flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="w-full border-2 md:w-[50vw] ">
              <div className="flex flex-col space-y-5 mb-2 ">
                <div className="relative">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="input-field peer"
                    placeholder=" "
                    />
                  <label
                      htmlFor="title"
                      className="input-label"
                    >
                      Title
                  </label>
                </div>
                <div className="relative">
                  <input
                      type="text"
                      name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required
                      className="input-field peer"
                      placeholder=" "
                  />
                  <label
                    htmlFor="author"
                    className="input-label"
                  >
                    Author
                  </label>
                </div>
              </div>
              <input type="submit" value={"Submit"} className="btn" />
            </form>
          </div>
      </div>
    </div>
  )
}
