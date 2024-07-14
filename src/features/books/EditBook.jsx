import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "./BookSlice"

export default function EditBook() {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const [id, setId]=useState(location.state.id)
  const [title, setTitle]=useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)
  
  const handleUpdateBook = (e) => {
    e.preventDefault()
    dispatch(updateBook({ id, title, author }))
    navigate("/show-books", {replace: true})
  }

  return (
    <div className="fle items-center justify-center text-center  ">
      <div className="my-10">
        <h1 className="text-2xl text-center font-semibold underline underline-offset-2 " >Edit Book</h1>
        <div className="edit-book my-5 ">
          <form onSubmit={handleUpdateBook} className="w-full border-2 md:w-[50vw] mx-auto ">
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
              <input type="submit" value={"Update Book"} className="btn" />
            </form>
        </div>
            
    </div>
    </div>
  )
}
