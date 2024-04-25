import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circle } from 'rc-progress';
import { selectReadingBooks } from '../../redux/books/selectors';
import {
  BtnIcon,
  ButtonWrap,
  Container,
  DiarySection,
  GraphList,
  GraphWrap,
  HeaderWrap,
  HelperWrap,
  InfoWrap,
  ProgressBarWrap,
  StatDescription,
  StatList,
  StatSection,
  StatusBlock,
  StatusWrap,
  Text,
} from './Diary.styled';
import sprite from '../../images/sprite.svg';
import { Title } from 'components/AddReading/AddReading.styled';
import { deleteStat } from '../../redux/books/operations';
import toast from 'react-hot-toast';

export const Diary = ({ isStart }) => {
  const dispatch = useDispatch();
  const [isStat, setIsStat] = useState(false);
  const [activeItems, setActiveItems] = useState({});
  const bookInfo = useSelector(selectReadingBooks);
  const { timeLeftToRead, progress, totalPages, _id } = bookInfo;
  const totalReadPages = progress?.reduce((total, item) => {
    return total + (item.finishPage - item.startPage + 1);
  }, 0);
  const percentageRead = ((totalReadPages / totalPages) * 100).toFixed(1);

  const handleDiary = () => {
    setIsStat(false);
  };

  const handleStat = () => {
    setIsStat(true);
  };

  const toggleActive = itemId => {
    setActiveItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleDelete = async readingId => {
    try {
      const action = await dispatch(deleteStat({ bookId: _id, readingId }));
      if (deleteStat.fulfilled.match(action)) {
        toast.success('Item deleted successfully');
      } else if (deleteStat.rejected.match(action)) {
        toast.error(action.error.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Container>
      <HeaderWrap>
        <Title>{isStat ? 'Statistics' : 'Diary'}</Title>
        <ButtonWrap>
          <BtnIcon onClick={handleDiary}>
            <svg width="16" height="16">
              <use href={`${sprite}#hourglass`} />
            </svg>
          </BtnIcon>
          <BtnIcon onClick={handleStat}>
            <svg width="16" height="16">
              <use href={`${sprite}#pie-chart`} />
            </svg>
          </BtnIcon>
        </ButtonWrap>
      </HeaderWrap>
      {!isStat ? (
        <DiarySection>
          {timeLeftToRead ? (
            <>
              <StatList>
                {progress?.map(
                  ({
                    _id,
                    startReading,
                    finishPage,
                    startPage,
                    finishReading,
                  }) => (
                    <li key={_id}>
                      <div>
                        <button onClick={() => toggleActive(_id)}>
                          <svg width="16" height="16">
                            <use
                              href={
                                activeItems[_id]
                                  ? `${sprite}#black-block-active`
                                  : `${sprite}#black-block`
                              }
                            />
                          </svg>
                        </button>
                        <Text $isActive={activeItems[_id]}>
                          {new Date(startReading).toLocaleDateString()}
                        </Text>
                      </div>
                      <h4>
                        {(
                          ((finishPage - startPage + 1) / totalPages) *
                          100
                        ).toFixed(1)}
                        %
                      </h4>
                      <span>
                        {(
                          (new Date(finishReading) - new Date(startReading)) /
                          (1000 * 60)
                        ).toFixed(1)}{' '}
                        minutes
                      </span>
                    </li>
                  )
                )}
              </StatList>

              <GraphList>
                {progress?.map(
                  ({
                    _id,
                    finishPage,
                    startPage,
                    finishReading,
                    startReading,
                  }) => (
                    <li key={_id}>
                      <h4>{finishPage - startPage + 1} pages</h4>
                      <HelperWrap>
                        <GraphWrap>
                          <svg width="43" height="18">
                            <use href={`${sprite}#graph1`} />
                          </svg>
                          <p>
                            {(
                              (totalPages /
                                ((new Date(finishReading) -
                                  new Date(startReading)) /
                                  (1000 * 60))) *
                              60
                            ).toFixed(0)}
                            &nbsp; pages per hour
                          </p>
                        </GraphWrap>
                        <button onClick={() => handleDelete(_id)}>
                          <svg width="14" height="14">
                            <use href={`${sprite}#trash`} />
                          </svg>
                        </button>
                      </HelperWrap>
                    </li>
                  )
                )}
              </GraphList>
            </>
          ) : (
            <p>No records yet...</p>
          )}
        </DiarySection>
      ) : (
        <StatSection>
          <StatDescription>
            Each page, each chapter is a new round of knowledge, a new step
            towards understanding. By rewriting statistics, we create our own
            reading history.
          </StatDescription>
          <StatusWrap>
            <ProgressBarWrap>
              <Circle
                percent={percentageRead}
                strokeWidth={8}
                strokeColor="#30B94D"
                trailColor="#1F1F1F"
                trailWidth={8}
              />
              <span>100%</span>
            </ProgressBarWrap>

            <InfoWrap>
              <StatusBlock />
              <div>
                <h4>{percentageRead}%</h4>
                <p>{totalReadPages} pages read</p>
              </div>
            </InfoWrap>
          </StatusWrap>
        </StatSection>
      )}
    </Container>
  );
};
