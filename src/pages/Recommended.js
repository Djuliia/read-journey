import { Dashboard } from 'components/Dashboard/Dashboard';
import { RecommendedBooks } from 'components/RecommendedBooks/RecommendedBooks';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';

const Recommended = () => {
  return (
    <Section>
      <Dashboard />
      <RecommendedBooks />
    </Section>
  );
};

export default Recommended;
