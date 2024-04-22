import { AddReading } from 'components/AddReading/AddReading';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { MyReading } from 'components/MyReading/MyReading';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Reading = () => {
  const [isStart, setIsStart] = useState(false);
  const location = useLocation();
  const book = location.state;
  // const handleStart = () => setIsStart(prev => !prev);

  return book ? (
    <Section>
      <Dashboard>
        <AddReading isStart={isStart} setIsStart={setIsStart} book={book} />
      </Dashboard>
      <MyReading isStart={isStart} setIsStart={setIsStart} book={book} />
    </Section>
  ) : null;
};

export default Reading;
