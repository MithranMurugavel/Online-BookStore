import React, { useEffect, useState, useRef } from 'react';
import Bookscart from '../books/bookscart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/bookApi';

export const Recommended = () => {
  const swiperRef = useRef(null);
 const { data, isLoading } = useFetchAllBooksQuery();
 if (isLoading) return <p>Loading...</p>;
const books = data?.books || [];
  

  const handleKeyDown = (e) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (e.key === 'ArrowRight') swiper.slideNext();
    if (e.key === 'ArrowLeft') swiper.slidePrev();
  };

  return (
    <section
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-16"
      onMouseEnter={() => document.addEventListener('keydown', handleKeyDown)}
      onMouseLeave={() => document.removeEventListener('keydown', handleKeyDown)}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 mt-4 text-gray-800 text-center sm:text-left">
        Recommended for You
      </h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024:{ slidesPerView: 2, spaceBetween: 40 },
          1280:{ slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        {
        books.length > 0 &&
          books.slice(3, 7).map((book, index) => (
            <SwiperSlide key={index}>
              <Bookscart book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Recommended;