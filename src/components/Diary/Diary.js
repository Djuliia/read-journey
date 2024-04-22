import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  StatList,
  StatSection,
  StatusBlock,
  StatusWrap,
  Text,
} from './Diary.styled';
import progressMobile from '../../images/progress/progress-bar_mobile.webp';
import progressTablet from '../../images/progress/progress-bar_tablet.webp';
import progressDesktop from '../../images/progress/progress-bar_desktop.webp';
import sprite from '../../images/sprite.svg';
import { Title } from 'components/AddReading/AddReading.styled';

export const Diary = ({ isStart }) => {
  const [isActive, setIsActive] = useState(true);
  const [isStat, setIsStat] = useState(false);
  const bookInfo = useSelector(selectReadingBooks);
  const { progress, totalPages, timeLeftToRead } = bookInfo;
  console.log(timeLeftToRead);

  const handleDiary = () => {
    setIsStat(false);
  };

  const handleStat = () => {
    setIsStat(true);
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
      {timeLeftToRead && !isStat ? (
        <DiarySection>
          <StatList>
            {progress?.map(
              ({ _id, startReading, finishPage, startPage, finishReading }) => (
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
                    {(((finishPage - startPage) / totalPages) * 100).toFixed(1)}
                    %
                  </h4>
                  <span>
                    {`${
                      (new Date(finishReading) - new Date(startReading)) /
                      (1000 * 60)
                    } minutes`}
                  </span>
                </li>
              )
            )}
          </StatList>
          <GraphList>
            <li>
              <h4>42 pages</h4>
              <HelperWrap>
                <GraphWrap>
                  <svg width="43" height="18">
                    <use href={`${sprite}#graph1`} />
                  </svg>
                  <p>45 pages per hour</p>
                </GraphWrap>
                <button>
                  <svg width="14" height="14">
                    <use href={`${sprite}#trash`} />
                  </svg>
                </button>
              </HelperWrap>
            </li>
            <li>
              <p>87 pages</p>
              <HelperWrap>
                <GraphWrap>
                  <svg width="43" height="18">
                    <use href={`${sprite}#graph2`} />
                  </svg>
                  <p>45 pages per hour</p>
                </GraphWrap>
                <button>
                  <svg width="14" height="14">
                    <use href={`${sprite}#trash`} />
                  </svg>
                </button>
              </HelperWrap>
            </li>
          </GraphList>
        </DiarySection>
      ) : null}
      {!isStat && !timeLeftToRead ? <div>No time left to read.</div> : null}
      {isStat ? (
        <StatSection>
          <img
            alt="Progress bar"
            srcSet={`${progressMobile} 116w, ${progressTablet} 128w, ${progressDesktop} 189w`}
            sizes="(max-width: 375px) 116px, (max-width: 1439px) 138px, 189px"
            src={progressMobile}
          />
          <StatusWrap>
            <StatusBlock />
            <div>
              <h4>19.14%</h4>
              <p>171 pages read</p>
            </div>
          </StatusWrap>
        </StatSection>
      ) : null}
    </Container>
  );
};
