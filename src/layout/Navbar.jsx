import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="flex flex-col md:flex-row items-center justify-between gap-y-2 py-2">
              <div className="left logo">
                  <Link to={"/"} className="text-3xl font-bold text-gray-700 " >E-Books House</Link>
              </div>
              <div className="middle">
                  <ul className="flex items-center gap-4 ">
                      <li><NavLink to={"/"} >Home</NavLink> </li>
                      <li><NavLink to={"/show-books"} >Show Books</NavLink> </li>
                      <li><NavLink to={"/add-book"} >Add Book</NavLink> </li>
                  </ul>
              </div>
              <div className="right">
                  <Link to={"/"} className="btn">{`Let's talk`}</Link>
              </div>
        </nav>
    </div>
  )
}