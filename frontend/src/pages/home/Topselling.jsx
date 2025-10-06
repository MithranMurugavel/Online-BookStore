import React, { useEffect, useState, useRef} from 'react';
import Bookscart from '../books/bookscart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation,Keyboard } from 'swiper/modules';

const categories = ['choose a genre', 'business', 'fiction', 'horror', 'adventure'];

export const Topselling = () => {
  const [books, setBooks] = useState([]);
  const [selectedcategory, setselectedcategory] = useState('choose a genre');
    const swiperRef = useRef(null);

  useEffect(() => {
    fetch('books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filterBooks =
    selectedcategory === 'choose a genre'
      ? books
      : books.filter((book) => book.category === selectedcategory.toLowerCase());

   const handleKeyDown = (e) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (e.key === 'ArrowRight') swiper.slideNext();
    if (e.key === 'ArrowLeft') swiper.slidePrev();
  };

  return (
    <div className="py-10" onMouseEnter={() => {
        document.addEventListener('keydown', handleKeyDown);
      }}
      onMouseLeave={() => {
        document.removeEventListener('keydown', handleKeyDown);
      }}>
      <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>

      <div className="mb-8 flex items-center">
        <select
          value={selectedcategory}
          onChange={(e) => setselectedcategory(e.target.value)}
          className="border bg-[#EAEAEA] rounded-md border-gray-300 py-2 px-4 focus:outline-none p-1 "
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper 
         onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

         keyboard={{
          enabled: false,
        }}
        modules={[Pagination, Navigation,Keyboard]}
        className="mySwiper"
      >
        {filterBooks.length > 0 &&
          filterBooks.map((book, index) => (
            <SwiperSlide key={index} >
              <Bookscart book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Topselling;
