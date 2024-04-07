import { AddReading } from 'components/AddReading/AddReading';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { MyReading } from 'components/MyReading/MyReading';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';

export const Reading = () => {
  return (
    <Section>
      <Dashboard>
        <AddReading />
      </Dashboard>
      <MyReading />
    </Section>
  );
};

export default Reading;
