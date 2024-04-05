import { Dashboard } from 'components/Dashboard/Dashboard';
import { Filters } from 'components/Filters/Filters';
import { RecommendedBooks } from 'components/RecommendedBooks/RecommendedBooks';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';

const Recommended = () => {
  return (
    <Section>
      <Dashboard>
        <Filters />
      </Dashboard>
      <RecommendedBooks />
    </Section>
  );
};

export default Recommended;
