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
import { useState } from 'react';

export const Diary = () => {
  const [isActive, setIsActive] = useState(true);
  const [isStat, setIsStat] = useState(false);

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
      {!isStat ? (
        <DiarySection>
          <StatList>
            <li>
              <div>
                <button onClick={() => setIsActive(!isActive)}>
                  <svg width="16" height="16">
                    <use
                      href={
                        !isActive
                          ? `${sprite}#black-block`
                          : `${sprite}#black-block-active`
                      }
                    />
                  </svg>
                </button>
                <Text $isActive={isActive}>21.10.2023</Text>
              </div>
              <h4> 7.6%</h4>
              <span>29 minutes</span>
            </li>
            <li>
              <div>
                <button onClick={() => setIsActive(!isActive)}>
                  <svg width="16" height="16">
                    <use
                      href={
                        !isActive
                          ? `${sprite}#black-block`
                          : `${sprite}#black-block-active`
                      }
                    />
                  </svg>
                </button>
                <Text $isActive={isActive}>19.10.2023</Text>
              </div>
              <h4> 10.5%</h4>
              <span>40 minutes</span>
            </li>
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
      ) : (
        <StatSection>
          <img
            alt="Progress bar"
            srcSet={`${progressMobile} 116w, ${progressTablet} 128w, ${progressDesktop} 189w`}
            size="(max-width: 375px) 116px, (max-width: 1439px) 138px, 189px"
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
      )}
    </Container>
  );
};
