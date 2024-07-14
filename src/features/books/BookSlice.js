import { createSlice } from "@reduxjs/toolkit"

export function generateUniqueId() {
  const randomPart = Math.ceil(Math.random() * 1000000);
  const datePart = new Date().getTime();
  return `id_${datePart}_${randomPart}`;
}

const uniqueId = generateUniqueId();
const uniqueId2 = generateUniqueId();

const initialBooks = {
    books: [
        {id: uniqueId, title:"All about Bangladesh", author:"Ariyan Rahman Anas"},
        {id: uniqueId2, title:"Bangladeshi Foods", author:"Ariyan Rahman Anas"},
    ]
}

//create slice
export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, title, author} =action.payload
            const isBookExist = state.books.filter(book => book.id === id)
            if (isBookExist) {
                isBookExist[0].title = title;
                (isBookExist[0].author = author);
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter((book) => book.id !== id);
        }
    }
})

export const { showBooks, addBook, updateBook,  deleteBook } = bookSlice.actions;
export default bookSlice.reducer;