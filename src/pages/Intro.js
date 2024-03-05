import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Intro = ({currentPage}) => {
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        if (currentPage === 1) {
            const timer = setTimeout(() => {
                setTypingStarted(true);
            }, 1500);

            return () => {
                clearTimeout(timer)
                setTypingStarted(false);
            };
        }
    }, [currentPage]);

    const motionWrap = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                ease: "linear",
                duration: 1.5,
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    }
    const itemTitle = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }
    const itemContent = {
        hidden: { opacity: 0, y: '-48%' },
        show: { opacity: 1, y: '-50%' }
    }

    return (
        <IntroWrap id="Intro" className="section">
            <IntroIn
                variants={motionWrap}
                initial="hidden"
                whileInView="show"
            >
                <motion.h2
                    className="bgTitle russo-one-regular"
                    variants={itemTitle}
                    transition={{ duration: 0.3 }}
                >
                    Intro
                </motion.h2>
                <motion.div
                    className="content"
                    variants={itemContent}
                    transition={{ duration: 0.3 }}
                >
                    <div className="intPhoto"><img src="/assets/profile_Seoyong.jpg" alt="프로필" /></div>
                    <div className="intMent">
                        <p style={{ marginBottom: "5px" }}>
                            <Bold>새로운 도전과 모험</Bold>을 좋아하는 신입 프론트엔드 개발 지망생 윤서용 입니다!<br />
                            프론트엔드는 좁고 작은 우물안에 갇혀있던 저에게 <Bold>새로운 바다</Bold>가 되었습니다.
                        </p>
                        {typingStarted && (
                            <Typewriter
                                options={{
                                    strings: ['Hexagonal_Frontend_Developer'],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 10000,
                                }}
                            />
                        )}
                        <p>
                            제가 목표로 달리고 있는 개발자의 자세입니다.<br />
                            / <Tag>웹 디자인</Tag> / <Tag>다양한 언어의 경험과 숙련</Tag> / <Tag>유저 친화적인 ui구현을 위한 연구</Tag> / <Tag>시각적, 사용적 만족도가 높은 웹 개발</Tag> / <Tag>빠르게 변하는 트렌드를 좇는 열정</Tag> / <Tag>다양한 사람들과의 소통</Tag> / <br />
                            아직은 걸음마를 뗀 단계이지만, 무엇 하나 놓치지 않을 <Bold>육각형 개발자</Bold>가 되고자 끊임없이 성장하고 노력하겠습니다.
                        </p>
                    </div>
                </motion.div>
            </IntroIn>
        </IntroWrap>
    );
};

export default Intro;

const IntroWrap = styled.section`
    position: relative;
    height: 100dvh;
    overflow: hidden;
`;
const IntroIn = styled(motion.div)`
    position: relative;
    height: 100%;
    margin: 0 14px;

    .bgTitle{
        position: absolute;
        top: 86px;
        right: 30px;
        z-index: -1;
        font-size: 72px;
        color: transparent;
        background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
    }
    .content{
        position: absolute;
        top: 52%;
        left: 0;
        transform: translateY(-50%);
        .intPhoto{
            min-width: 260px;
            width: 60vw;
            max-width: 380px;
            min-height: 320px;
            height: 80vw;
            max-height: 520px;
            margin: 0 auto 30px;
            background-color: #ddd;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .intMent{
            font-size: var(--font-size-con);
            line-height: 1.6em;
            color: #333;
            letter-spacing: -0.2px;

            .Typewriter{
                margin-bottom: 5px;

                .Typewriter__wrapper{
                    font-size: var(--font-size-sm);
                    font-weight: 600;
                    color: var(--main-blue);
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
            }
            }
        }
    }
    // 768 시작
    @media screen and (min-width:768px){
        margin: 0 60px;
        .bgTitle{
            right: 0;
            font-size: 148px;
            color: transparent;
            background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
            -webkit-background-clip: text;
        }
        .content{
            top: 50%;
            .intPhoto{
                margin: 0 auto 50px;
                background-color: #ddd;
            }
        }

    }
    // 768 끝
    // 1024 시작
    @media screen and (min-width:1024px){
        margin: 0 20px;

        .bgTitle{
            top: 280px;
            font-size: 200px;
        }
        .content{
            top: 50%;
            display: flex;
            align-items: end;

            .intPhoto{
                width: 40vw;
                max-width: 500px;
                height: 65vw;
                max-height: 600px;
                margin: 0;
            }
            .intMent{
                width: 60%;
                padding-left: 30px;
            }
        }
    }
    // 1024 끝
    // 1600 시작
    @media screen and (min-width:1600px){
        width: 1560px;
        margin: 0 auto;

        .bgTitle{
            top: 280px;
            font-size: 240px;
        }
        .content{
            .intPhoto{
                max-width: 680px;
                max-height: 740px;
                margin: 0;
            }
            .intMent{
                width: 70%;
                padding-left: 50px;
            }
        }
    }
    // 1600 끝
`;

const Bold = styled.span`
    position: relative;
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: 700;

    &::after{
        content: "";
        display: block;
        position: absolute;
        bottom: -1px;
        width: 105%;
        height: 1rem;
        background-image: linear-gradient(90deg, #7EC9FF, #FBFBBD);
        z-index: -1;
    }
`;
const Tag = styled.span`
    position: relative;
    display: inline-block;
    font-weight: 600;
    transition: 0.2s;

    &::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: var(--sub-blue);
        transition: 0.2s;
    }

    &:hover {
        color: var(--main-blue);
    }
    &:hover::before{
        top: -2px;
    }
`;