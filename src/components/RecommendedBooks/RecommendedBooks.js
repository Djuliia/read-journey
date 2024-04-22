import { useSelector, useDispatch } from 'react-redux';
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
import { useEffect, useRef, useState } from 'react';
import sprite from '../../images/sprite.svg';
import noImg from '../../images/noImg.webp';
import { PopUp } from 'components/PopUp/PopUp';
import { AboutBookPopup } from 'components/PopUp/AboutBookPopup';
import { selectBooks } from '../../redux/books/selectors';
import { getRecommended } from '../../redux/books/operations';

export const RecommendedBooks = ({ filteredBooks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const recommendedBooks = books?.results;

  useEffect(() => {
    dispatch(getRecommended({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [recommendedBooks]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    draggable: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setLimit(screenWidth < 768 ? 2 : screenWidth > 1439 ? 10 : 8);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    if (currentPage < books.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = book => {
    setSelectedBook(book);
    setIsModalOpen(true);
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
            <button
              onClick={previous}
              style={{ stroke: currentPage === 1 ? '#686868' : '#fff' }}
            >
              <svg>
                <use href={`${sprite}#chevron-left`} />
              </svg>
            </button>
            <button
              onClick={next}
              style={{
                stroke: books.totalPages === currentPage ? '#686868' : '#fff',
              }}
            >
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
            {(filteredBooks.length > 0 ? filteredBooks : recommendedBooks)?.map(
              book => (
                <div key={book._id}>
                  <BookItem
                    onClick={() => {
                      openModal(book);
                    }}
                  >
                    <img
                      loadin="lazy"
                      src={book.imageUrl ? book.imageUrl : noImg}
                      alt={book.title}
                    />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </BookItem>
                </div>
              )
            )}
          </Slider>
        </SliderContainer>
      </Container>
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={closeModal}>
          <AboutBookPopup book={selectedBook} fromRecommended />
        </PopUp>
      )}
    </>
  );
};
