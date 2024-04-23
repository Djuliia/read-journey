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
  const [isActive, setIsActive] = useState(true);
  const [isStat, setIsStat] = useState(false);
  const bookInfo = useSelector(selectReadingBooks);
  const { timeLeftToRead, progress, totalPages, _id } = bookInfo;

  const finishPages = progress?.map(item => item.finishPage);
  const finishPage = finishPages?.slice(-1);

  const percentageRead =
    finishPage && totalPages ? ((finishPage / totalPages) * 100).toFixed(1) : 0;
  const handleDiary = () => {
    setIsStat(false);
  };

  const handleStat = () => {
    setIsStat(true);
  };

  const handleDelete = async progressId => {
    try {
      await dispatch(deleteStat(_id, progressId));
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
                  ({ _id, startReading, finishPage, startPage }) => (
                    <li key={_id}>
                      <div>
                        <button onClick={() => setIsActive(!isActive)}>
                          <svg width="16" height="16">
                            <use
                              href={
                                isActive
                                  ? `${sprite}#black-block-active`
                                  : `${sprite}#black-block`
                              }
                            />
                          </svg>
                        </button>
                        <Text $isActive={isActive}>
                          {new Date(startReading).toLocaleDateString()}
                        </Text>
                      </div>
                      <h4>
                        {(
                          ((finishPage - startPage) / totalPages) *
                          100
                        ).toFixed(1)}
                        %
                      </h4>
                      <span>{timeLeftToRead.minutes} minutes</span>
                    </li>
                  )
                )}
              </StatList>

              <GraphList>
                {progress?.map(({ _id, finishPage, startPage }) => (
                  <li key={_id}>
                    <h4>{finishPage} pages</h4>
                    <HelperWrap>
                      <GraphWrap>
                        <svg width="43" height="18">
                          <use href={`${sprite}#graph1`} />
                        </svg>
                        <p>{finishPage - startPage} pages per hour</p>
                      </GraphWrap>
                      <button onClick={() => handleDelete(_id)}>
                        <svg width="14" height="14">
                          <use href={`${sprite}#trash`} />
                        </svg>
                      </button>
                    </HelperWrap>
                  </li>
                ))}
              </GraphList>
            </>
          ) : (
            <p>No records yet...</p>
          )}
        </DiarySection>
      ) : (
        <StatSection>
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
                <p>{finishPage} pages read</p>
              </div>
            </InfoWrap>
          </StatusWrap>
        </StatSection>
      )}
    </Container>
  );
};
