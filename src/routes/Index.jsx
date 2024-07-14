import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import BooksView from "../features/books/BooksView";
import EditBook from './../features/books/EditBook';
import AddBook from "../features/books/AddBook";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Index() {
  return <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
}