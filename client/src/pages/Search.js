import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormBtn, SearchBox } from "../components/Form";
import API from "../utils/API";
import BookCard from "../components/BookCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("Shanara");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function loadBooks() {
    API.searchBooks(searchTerm)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      loadBooks();
      console.log(books);
    }
  }

  function handleBookSubmit(book) {
    if (book.title) {
      API.saveBook(
        {
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          description: book.description,
          image: book.imageLinks.thumbnail,
          link: book.infoLink,
        }
      )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form>
              <h2>Search for a book:</h2>
              <div className="input-group">
                <input onChange={handleInputChange} type="search" name="book search box" className="form-control rounded" placeholder="Keywords" style={{ backgroundColor: "azure", display: "inline", width: "90%" }} />
                <FormBtn onClick={handleFormSubmit} style={{ display: "inline", float: "right", width: "10%" }}>Search</FormBtn>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <section className="pt-4">
        <Container>
          <h2>Search results</h2>
          <Row>{books ? books.map((book) => <BookCard key={book.id} data={book.volumeInfo} page="search" handleBookSubmit={handleBookSubmit} />) : null}</Row>
        </Container>
      </section>
    </>
  );
};

export default Search;
