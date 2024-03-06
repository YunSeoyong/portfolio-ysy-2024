import { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Typist from 'react-typist-component';
import { useSwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectComp from "../component/ProjectComp";

const fetchData = async (setData) => {
    try {
        const response = await fetch('/project/project.json');
        const jsonData = await response.json();

        setData(jsonData);
    } catch (err) {
        console.log('데이터를 불러오지 못했습니다.');
    }
};

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [typingStarted, setTypingStarted] = useState(false);
    const swiperSlide = useSwiperSlide();
    
    useEffect(() => {
        fetchData(setData);
    }, []);

    useEffect(() => {
        swiperSlide.isActive ? setTypingStarted(true) : setTypingStarted(false);
    }, [swiperSlide]);


    const motionWrap = {
        hidden: { 
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                ease: "linear",
                duration: 0.8,
            }
        }
    }
    
    return (
        <PortfolioWrap id="Portfolio" className="section">
            <PortfolioIn
                variants={motionWrap}
                initial="hidden"
                whileInView="show"
            >
                <h2 
                    className="bgTitle russo-one-regular"
                >
                    Portfolio
                </h2>
                <Type>    
                    {typingStarted && 
                        <Typist
                            startDelay={1000}
                        >
                            <p className="type">Hover or Touch!</p>
                        </Typist>
                    }
                </Type>
                <Swiper 
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 45,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }}
                    className="container"
                >
                    {
                        data.map((it) => (
                            <SwiperSlide key={it.id}>
                                <ProjectComp 
                                    key={it.id}
                                    {...it}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </PortfolioIn>
        </PortfolioWrap>
    );
};

export default Portfolio;

const PortfolioWrap = styled.section`
    position: relative;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
`;
    
const PortfolioIn = styled(motion.div)`
    box-sizing: border-box;
    padding: 86px 70px 35px 70px;
    overflow: visible;

    .bgTitle {
        margin-bottom: 40px;
        text-align: center;
        font-size: 26px;
        color: transparent;
        background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 1;
    }
    .container{
        overflow: visible;

        .swiper-button-prev, .swiper-button-next{
            color: var(--main-blue);
        }
        .swiper-button-prev{
            left: var(--swiper-navigation-sides-offset, -25px);
        }
        .swiper-button-next{
            right: var(--swiper-navigation-sides-offset, -25px);
        }

        .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
            bottom:  var(--swiper-pagination-bottom, -40px);
        }
    }

    @media screen and (min-width:768px) {
        padding-top: 106px;

        .bgTitle{
            margin-bottom: 48px;
            font-size: var(--font-size-md);
        }

        .container{
            .swiper-button-prev{
                left: var(--swiper-navigation-sides-offset, -20px);
            }
            .swiper-button-next{
                right: var(--swiper-navigation-sides-offset, -20px);
            }
            .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
                bottom:  var(--swiper-pagination-bottom, -70px);
            }
        }
    }
    @media screen and (min-width:1024px){
        padding: 106px 80px 0 80px;

        .bgTitle{
            margin-bottom: 60px;
        }
    }
    @media screen and (min-width:1600px){
        width: 1600px;
        margin: 0 auto;
        padding: 106px 40px 75px 40px;
        overflow: hidden;

        .container{
            .swiper-button-prev{
                left: var(--swiper-navigation-sides-offset, -30px);
            }
            .swiper-button-next{
                right: var(--swiper-navigation-sides-offset, -30px);
            }
            .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
                bottom:  var(--swiper-pagination-bottom, -60px);
            }
        }
    }
`;
const Type = styled.div`
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);

    .type{
        font-size: var(--font-size-con);
        font-weight: 600;
        color: var(--main-yellow);
        opacity: 0.4;
    }

    @media screen and (min-width:768px) {
        top: 148px;
    }
    @media screen and (min-width:1024px) {
        top: 152px;
    }
`;