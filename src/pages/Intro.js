import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = ({}) => {
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
                    <div className="intPhoto">사진</div>
                    <div className="intMent">
                        여기다가 <span>멘트</span>를 작성할 예정인데, 아직 잘 생각이 안나네요 ㅠㅠ!! <span>조금 더 고민</span>해서 수정하도록 하겠습니다!!
                        <br />
                        한글 제목 폰트 : SB어그로체 / 영문 제목 폰트 : Russo one / 그밖의 본문용 폰트 : pretendard / web 안전사이즈 1560px / 페이지 형식으로 넘어갈지 그냥 스크롤 형식을 할지 고민중입니다....ㅠㅠ
                    </div>
                </motion.div>
            </IntroIn>
        </IntroWrap>
    );
};

export default Intro;

const IntroWrap = styled.section`
    height: 100vh;
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
            width: 240px;
            height: 320px;
            margin: 0 auto 30px;
            background-color: #ddd;
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
                width: 400px;
                height: 500px;
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
            top: 60%;
            display: flex;
            align-items: end;

            .intPhoto{
                width: 40%;
                height: 420px;
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
                width: 30%;
                height: 520px;
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