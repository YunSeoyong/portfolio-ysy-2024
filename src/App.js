import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, A11y } from 'swiper/modules';

import styled from "styled-components";

import "./App.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';


import Header from "./component/Header";
import MainTitle from "./pages/MainTitle";
import Intro from "./pages/Intro";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";

function App() {
    const [pageNum, setPageNum] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        console.log('신입 프론트엔드 개발자 윤서용의 포트폴리오 입니다.\n로고를 클릭하면 첫 타이틀 페이지로 돌아옵니다. 참고해주세요!')
    }, []);

    return (
        <div className="App">
            <Header 
                swiperRef={swiperRef}
                pageNum={pageNum}
            />
            <StyledSwiper
                ref={swiperRef}
                direction={'vertical'}
                slidesPerView={1}
                modules={[Mousewheel, Pagination, Keyboard, A11y]}
                mousewheel={true}
                keyboard={{enabled: true}}
                speed={600}
                pagination={{ clickable: true }}
                onSlideChange={(e) => {setPageNum(e.activeIndex)}}
            >
                <StyledSwiperSlide><MainTitle /></StyledSwiperSlide>
                <StyledSwiperSlide><Intro /></StyledSwiperSlide>
                <StyledSwiperSlide><Skill /></StyledSwiperSlide>
                <StyledSwiperSlide><Portfolio /></StyledSwiperSlide>
                <StyledSwiperSlide><AboutMe /></StyledSwiperSlide>
            </StyledSwiper>
        </div>
    );
}

export default App;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100dvh;

    .swiper-pagination{
        .swiper-pagination-bullet{
            background: var(--swiper-pagination-bullet-inactive-color, var(--sub-blue));
        }
        .swiper-pagination-bullet-active{
            background: var(--swiper-pagination-bullet-inactive-color, var(--main-blue));
            opacity: 0.6;
        }
    }
`;
const StyledSwiperSlide = styled(SwiperSlide)``;