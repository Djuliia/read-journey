import { AddReading } from 'components/AddReading/AddReading';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { MyReading } from 'components/MyReading/MyReading';
import { Section } from 'components/RecommendedBooks/RecommendedBooks.styled';
import { useState } from 'react';

export const Reading = () => {
  const [isStart, setIsStart] = useState(false);
  // const [isFinished, setIsFinished] = useState(false);
  const handleStart = () => setIsStart(prev => !prev);

  return (
    <Section>
      <Dashboard>
        <AddReading isStart={isStart} handleStart={handleStart} />
      </Dashboard>
      <MyReading isStart={isStart} handleStart={handleStart} />
    </Section>
  );
};

export default Reading;
