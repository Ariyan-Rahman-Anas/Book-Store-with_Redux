import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {

    const location = useLocation()

  return (
    <div>
        <nav className="flex flex-col md:flex-row items-center justify-between gap-y-2 py-2">
              <div className="left logo">
                  <Link to={"/"} className="text-3xl font-bold text-gray-700 " >E-Books House</Link>
              </div>
              <div className="middle">
                  <ul className="flex items-center gap-4 ">
                      <li><NavLink to={"/"}
                          className={({ isActive }) =>
                  isActive && location.pathname === "/"
                    ? "border-b-2 border-b-black rounded-sm duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
                      >Home</NavLink> </li>
                      <li><NavLink to={"/show-books"}
                          className={({ isActive }) =>
                  isActive && location.pathname === "/show-books"
                    ? "border-b-2 border-b-black rounded-sm duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
                      >Show Books</NavLink> </li>
                      <li><NavLink to={"/add-book"} className={({ isActive }) =>
                  isActive && location.pathname === "/add-book"
                    ? "border-b-2 border-b-black rounded-sm duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                } >Add Book</NavLink> </li>
                  </ul>
              </div>
              <div className="right">
                  <Link to={"/sign-in"} className="btn">Sign In</Link>
              </div>
        </nav>
    </div>
  )
}