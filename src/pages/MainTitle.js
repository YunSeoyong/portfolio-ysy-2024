import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";


const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const MainTitle = () => {
    const motionSvg = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1.8,
            }
        }
    };
    const motionTitle = {
        hidden: { 
            opacity: 0 
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.5,
                ease: "linear",
                duration: 0.3,
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    }
    const titleItem1 = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0 }
    }
    const titleItem2 = {
        hidden: { opacity: 0, x: 30 },
        show: { opacity: 1, x: 0 }
    }

    return (
        <MainTitleWrap
            id="MainTitle" className="section"

        >
            <BgSvg
                variants={motionSvg}
                initial="offscreen"
                animate="onscreen"
            >
                <div className="hexa_big">
                    <img src="/assets/svg/hexa-big.svg" alt="hexa-big" />
                </div>
                <div className="hexa_mid">
                    <img src="/assets/svg/hexa-mid.svg" alt="hexa-mid" />
                </div>
                <div className="hexa_sml">
                    <img src="/assets/svg/hexa-sml.svg" alt="hexa-sml" />
                </div>
            </BgSvg>
            <MainTitleIn>
                <motion.div 
                    className="ment" 
                    variants={motionSvg}
                    initial="offscreen"
                    whileInView="onscreen"
                >
                    {/* <p><span>육각형</span> 개발자가 되기 위해 노력중인</p>
                    <p>프론트엔드 개발자 지망생 <span>윤서용</span>입니다.</p> */}
                </motion.div>
                <motion.div
                    className="title russo-one-regular"
                    variants={motionTitle}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.p
                        className="fe"
                        variants={titleItem1}
                        transition={{duration: 0.5}}
                    >
                        <span className="hide">FRONTEND</span>
                    </motion.p>
                    <motion.p
                        className="pr"
                        variants={titleItem2}
                        transition={{duration: 0.5}}
                    >
                        <span className="hide">PORTFOLIO</span>
                    </motion.p>
                </motion.div>
            </MainTitleIn>
        </MainTitleWrap>
    );
};

export default MainTitle;

const MainTitleWrap = styled(motion.section)`
    position: relative;
    height: 100dvh;
    overflow: hidden;
`
const BgSvg = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .hexa_big {
        position: absolute;
        top: -30px;
        right: -60px;
        width: 340px;
        height: 393px;
        animation: ${rotateAnimation} 25s linear infinite;

        img{
            width: 100%;
            height: auto;
        };
    };
    .hexa_mid {
        position: absolute;
        bottom: 40px;
        left: -30px;
        width: 222px;
        height: 192px;
        animation: ${rotateAnimation} 15s linear infinite;

        img{
            width: 100%;
            height: auto;
        };
    };
    .hexa_sml {
        position: absolute;
        bottom: 200px;
        right: 10px;
        width: 117px;
        height: 127px;
        animation: ${rotateAnimation} 13s linear infinite;
        
        img{
            width: 100%;
            height: auto;
        };
    };

    @media screen and (min-width:768px){
        .hexa_big{
            width: 510px;
            height: 590px;
        };
        .hexa_mid{
            width: 333px;
            height: 288px;
        };
        .hexa_sml{
            bottom: 150px;
            width: 175px;
            height: 190px;
        };
    };
    @media screen and (min-width:1200px){
        .hexa_big{
            width: 680px;
            height: 786px;
        };
        .hexa_mid{
            width: 444px;
            height: 384px;
        };
        .hexa_sml{
            bottom: initial;
            top: -50px;
            right: 60%;
            width: 234px;
            height: 254px;
        };
    };
    @media screen and (min-width:1600px){
        .hexa_big{
            top: -50px;
            right: -80px;
            width: 850px;
            height: 982px;
        };
        .hexa_mid{
            bottom: 70px;
            left: -40px;
            width: 555px;
            height: 480px;
        };
        .hexa_sml{
            width: 292px;
            height: 317px;
        };
    };
`;
const MainTitleIn = styled.div`
    position: relative;
    height: 100%;
    margin: 0 14px;
    z-index: 100;

    .ment{
        padding-top: 35vh;
        margin-bottom: 5vw;
        font-size: 0.9rem;
        text-align: center;
        line-height: 1.3em;
        letter-spacing: -0.4px;
        font-weight: 300;
        color: var(--main-blue);

        span{
            color: var(--main-yellow);
        };
    };
    .title{
        & > p{
            display: block;
            width: 100%;
            height: 11vw;
            max-height: 60px;
            background-repeat: no-repeat;
            background-size: auto 100%;
        };
        .fe{
            margin-bottom: 10px;
            background-position: left center;
            background-image: url('./assets/svg/title1.svg');
        };
        .pr{
            background-position: right center;
            background-image: url('./assets/svg/title2.svg');
        };
    };

    @media screen and (min-width:768px){
        margin : 0 20px;

        .ment{
            font-size: 18px;
        };
        .title{
            & > p{
                max-height: 120px;
            };
            .fe{
                margin-bottom: 20px;
            };
        };
    };
    @media screen and (min-width:1200px){
        .ment{
            padding-top: 40vh;
            margin-bottom: 3vw;
            text-align: left;
            display: flex;
            font-size: 21px;
            
            p:first-child{
                margin-right: 8px;
            };
        };
        .title{
            & > p{
                max-height: 150px;
            };
            .fe{
                margin-bottom: 35px;
            };
        };
    };
    @media screen and (min-width:1600px){
        width: 1560px;
        margin: 0 auto;
        .ment{
            padding-top: 45vh;
            margin-bottom: 2vw;
            
            p:first-child{
                margin-right: 8px;
            };
        };
    }
`;