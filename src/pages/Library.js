import { AddBook } from 'components/AddBook/AddBook';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { MyLibraryBooks } from 'components/MyLibraryBooks/MyLibraryBooks';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';

export const Library = () => {
  return (
    <Section>
      <Dashboard>
        <AddBook />
      </Dashboard>
      <MyLibraryBooks />
    </Section>
  );
};

export default Library;
