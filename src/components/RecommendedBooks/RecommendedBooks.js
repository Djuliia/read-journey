import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BookItem,
  Container,
  HelperWrap,
  SliderBtnWrap,
  SliderContainer,
  Title,
} from './RecommendedBooks.styled';
import { useRef, useState } from 'react';
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
import sprite from '../../images/sprite.svg';
import { PopUp } from 'components/PopUp/PopUp';
import { AboutBookPopup } from 'components/PopUp/AboutBookPopup';

export const RecommendedBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const openModal = book => {
    setSelectedBook(book);
    setIsModalOpen(true);
    console.log(book);
    console.log(selectedBook);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Container>
        <HelperWrap>
          <Title>Recommended</Title>
          <SliderBtnWrap>
            <button onClick={previous}>
              <svg>
                <use href={`${sprite}#chevron-left`} />
              </svg>
            </button>
            <button onClick={next}>
              <svg>
                <use href={`${sprite}#chevron-right`} />
              </svg>
            </button>
          </SliderBtnWrap>
        </HelperWrap>
        <SliderContainer>
          <Slider
            ref={slider => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <BookItem id="1" onClick={() => openModal(book1)}>
                <img src={book1} alt="book" />
                <h3>Book 1</h3>
                <p>Author 1</p>
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
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={closeModal} fromRecommended>
          <AboutBookPopup book={selectedBook} />
        </PopUp>
      )}
    </>
  );
};
