import { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
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

    useEffect(() => {
        fetchData(setData);
    }, []);
    
    return (
        <PortfolioWrap id="Portfolio">
            <PortfolioIn>
                <h2 className="bgTitle russo-one-regular">Portfolio</h2>
                <Swiper 
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1600: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    className="container"
                >
                    {
                        data.map((it) => (
                            <SwiperSlide>
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
    height: 100vh;
    max-height: 1080px;
    overflow: hidden;
    
    @media screen and (min-width:1024px) {
        max-height: initial;
    }
`;
    
const PortfolioIn = styled.div`
    box-sizing: border-box;
    padding: 86px 40px 25px 40px;
    overflow: visible;

    .bgTitle {
        margin-bottom: 24px;
        text-align: center;
        font-size: 26px;
        color: transparent;
        background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
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
            bottom:  var(--swiper-pagination-bottom, -20px);
        }
    }

    @media screen and (min-width:768px) {
        padding-top: 106px;

        .bgTitle{
            margin-bottom: 36px;
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
    @media screen and (min-width:1200px){
        padding: 106px 60px 0 60px;

        .bgTitle{
            margin-bottom: 48px;
        }
    }
    @media screen and (min-width:1600px){
        width: 1560px;
        margin: 0 auto;
        padding: 106px 0 0 0;
    }
`;