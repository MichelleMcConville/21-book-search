import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("Get Many Books");
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log("Get One Book");
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("Delete Book");
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("Save Book");
    return axios.post("/api/books", bookData);
  }
};
