import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = () => {
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
        show: { opacity: 1, y: 0}
    }
    const itemContent = {
        hidden: { opacity: 0, y: '-48%'},
        show: { opacity: 1, y: '-50%'}
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
                    transition={{duration: 0.3}}
                >
                    Intro
                </motion.h2>
                <motion.div 
                    className="content" 
                    variants={itemContent}
                    transition={{duration: 0.3}}
                >
                    <div className="intPhoto"><img src="/assets/profile_Seoyong.jpg" alt="프로필" /></div>
                    <div className="intMent">
                        <p>
                            새로운 도전과 모험을 좋아하는 신입 프론트엔드 개발 지망생 윤서용 입니다!<br />
                            프론트엔드는 좁고 작은 우물안에 갇혀있던 저에게 새로운 바다가 되었습니다.
                        </p>
                        <p>&lt;Hexagonal_Frontend_Developer &#47;&gt;</p>
                        <p>
                            제가 목표로 달리고 있는 개발자의 자세입니다.<br />
                            / 웹 디자인 / 다양한 언어의 경험과 숙련 / 유저 친화적인 ui구현을 위한 연구 / 시각적, 사용적 만족도가 높은 웹 개발 / 빠르게 변하는 트렌드를 좇는 열정 / 다양한 사람들과의 소통 / <br />
                            아직은 걸음마를 뗀 단계이지만, 무엇 하나 놓치지 않을 육각형의 개발자가 되고자 끊임없이 성장하고 노력하겠습니다.
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
        top: 55%;
        left: 0;
        transform: translateY(-50%);
        .intPhoto{
            min-width: 260px;
            width: 60vw;
            max-width: 500;
            min-height: 320px;
            height: 80vw;
            max-height: 600px;
            margin: 0 auto 30px;
            background-color: #ddd;

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
    
            span{
                font-size: var(--font-size-sm);
                font-weight: 700;
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
            .intPhoto{
                max-width: 640px;
                max-height: 760px;
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
const Ment = styled.div``;