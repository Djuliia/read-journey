import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BookItem,
  Container,
  SliderBtnWrap,
  SliderContainer,
  Title,
} from './RecommendedBooks.styled';
import { useRef } from 'react';
import book1 from '../../images/book (1).jpg';
import book2 from '../../images/book (2).jpg';
import book3 from '../../images/book (3).jpg';
import book4 from '../../images/book (4).jpg';
import book5 from '../../images/book (5).jpg';
import book6 from '../../images/book (6).jpg';
import book7 from '../../images/book (7).jpg';
import book8 from '../../images/book (8).jpg';
import book9 from '../../images/book (9).jpg';
import book10 from '../../images/book (10).jpg';

export const RecommendedBooks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <Container>
      <Title>Recommended</Title>
      <SliderContainer>
        <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <SliderBtnWrap>
            <button className="button" onClick={previous}>
              Prev
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </SliderBtnWrap>
          <div>
            <BookItem>
              <img src={book1} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book2} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book3} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book4} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book5} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book6} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book7} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book8} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book9} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
          <div>
            <BookItem>
              <img src={book10} alt="book" />
              <h3>Name</h3>
              <p>Description</p>
            </BookItem>
          </div>
        </Slider>
      </SliderContainer>
    </Container>
  );
};
