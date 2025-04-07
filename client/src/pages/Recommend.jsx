import React from 'react'
import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BookCard from '../books/BookCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, HashNavigation, Navigation } from 'swiper/modules';
const Recommend = () => {
    const [books, setBooks] = useState([]);
    //   const {data : books = []} = useFetchAllBooksQuer;
    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then((data) => setBooks(data));
    }, [])
    const filteredBooks = books.filter(book => book.category);
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended Books</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                history={{
                    key: 'slide',
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {
                    books.length > 0 && books.slice(8, 16).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>

                    )
                    )}
            </Swiper>
        </div>

    )
}

export default Recommend