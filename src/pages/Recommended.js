import React, { useState } from 'react';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Filters } from 'components/Filters/Filters';
import { RecommendedBooks } from 'components/RecommendedBooks/RecommendedBooks';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/books/selectors';

const Recommended = () => {
  const recommendedBooks = useSelector(selectBooks);
  const { results } = recommendedBooks;

  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSubmit = ({ title, author }) => {
    const filtered = results?.filter(
      ({ title: bookTitle, author: bookAuthor }) => {
        const matchTitle = bookTitle
          .toLowerCase()
          .includes(title.toLowerCase());
        const matchAuthor = bookAuthor
          .toLowerCase()
          .includes(author.toLowerCase());
        return matchTitle && matchAuthor;
      }
    );
    setFilteredBooks(filtered);
  };

  return (
    <Section>
      <Dashboard>
        <Filters handleSubmit={handleSubmit} />
      </Dashboard>
      <RecommendedBooks filteredBooks={filteredBooks} />
    </Section>
  );
};

export default Recommended;
