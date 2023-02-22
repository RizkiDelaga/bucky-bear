import React, { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Grid, FreeMode, Navigation, Pagination } from 'swiper';
import { Container } from '@mui/material';

function SwiperCarousel() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Container fluid style={{ backgroundColor: 'grey', padding: '40px' }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiperA"
        >
          <SwiperSlide className="slideA">Slide 1</SwiperSlide>
          <SwiperSlide className="slideA">Slide 2</SwiperSlide>
          <SwiperSlide className="slideA">Slide 3</SwiperSlide>
          <SwiperSlide className="slideA">Slide 4</SwiperSlide>
          <SwiperSlide className="slideA">Slide 5</SwiperSlide>
          <SwiperSlide className="slideA">Slide 6</SwiperSlide>
          <SwiperSlide className="slideA">Slide 7</SwiperSlide>
          <SwiperSlide className="slideA">Slide 8</SwiperSlide>
          <SwiperSlide className="slideA">Slide 9</SwiperSlide>
          <SwiperSlide className="slideA">Slide 10</SwiperSlide>
        </Swiper>
        <br />
        <br />
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mySwiperB"
        >
          <SwiperSlide className="slideB">Slide 1</SwiperSlide>
          <SwiperSlide className="slideB">Slide 2</SwiperSlide>
          <SwiperSlide className="slideB">Slide 3</SwiperSlide>
          <SwiperSlide className="slideB">Slide 4</SwiperSlide>
          <SwiperSlide className="slideB">Slide 5</SwiperSlide>
          <SwiperSlide className="slideB">Slide 6</SwiperSlide>
          <SwiperSlide className="slideB">Slide 7</SwiperSlide>
        </Swiper>
        <br />
        <br />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiperA">
          <SwiperSlide className="slideA">Slide 1</SwiperSlide>
          <SwiperSlide className="slideA">Slide 2</SwiperSlide>
          <SwiperSlide className="slideA">Slide 3</SwiperSlide>
          <SwiperSlide className="slideA">Slide 4</SwiperSlide>
          <SwiperSlide className="slideA">Slide 5</SwiperSlide>
        </Swiper>
        <br />
        <br />
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 1,
              grid: {
                rows: 1,
              },
              spaceBetween: 0,
            },
            '@1.00': {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 4,
              grid: {
                rows: 2,
              },
              spaceBetween: 20,
            },
          }}
          className="mySwiperA"
        >
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 5</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 6</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 7</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideC">
            <div className="gridSlide">
              <h3>Slide 8</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel dolor debitis ipsam reiciendis
                aperiam fugiat. Quis voluptatem, aliquam autem perspiciatis eum, molestias nisi debitis porro cum beatae
                consectetur repellat?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
    </Fragment>
  );
}

export default SwiperCarousel;
