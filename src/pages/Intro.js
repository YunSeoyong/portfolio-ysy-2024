import styled, { keyframes } from "styled-components";
import { useResizedApi } from "../hooks/ResizedContext";


const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Intro = () => {

    const { isMo, isTa, isPc } = useResizedApi(); 

    return (
        <IntroWrap id="Intro">
            <div className="bgSvg">
                <div className="hexa_big">
                    <img src="/assets/svg/hexa-big.svg" />
                </div>
                <div className="hexa_mid">
                    <img src="/assets/svg/hexa-mid.svg" />
                </div>
                <div className="hexa_sml">
                    <img src="/assets/svg/hexa-sml.svg" />
                </div>
            </div>
            <div className="intro_in">
                <div className="ment">
                    <p><span>육각형</span> 개발자가 되기 위해 노력중인 </p>
                    <p>신입 프론트엔드 개발자 <span>윤서용</span>입니다.</p>
                </div>
                <div className="title russo-one-regular">
                    <p className="fe">FRONTEND</p>
                    <p className="pr">PORTFOLIO</p>
                </div>
            </div>
        </IntroWrap>
    );
};

export default Intro;

const IntroWrap = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    max-height: 900px;
    overflow: hidden;

    .bgSvg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

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
            }
        }
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
            }
        }
        .hexa_sml {
            position: absolute;
            bottom: 200px;
            right: 10px;
            width: 117px;
            height: 127px;
            animation: ${rotateAnimation} 10s linear infinite;
            
            img{
                width: 100%;
                height: auto;
            }
        }

        @media screen and (min-width:768px){
            .hexa_big{
                width: 510px;
                height: 590px;
            }
            .hexa_mid{
                width: 333px;
                height: 288px;
            }
            .hexa_sml{
                bottom: 150px;
                width: 175px;
                height: 190px;
            }
        }
        @media screen and (min-width:1200px){
            .hexa_big{
                width: 510px;
                height: 590px;
            }
            .hexa_mid{
                width: 333px;
                height: 288px;
            }
            .hexa_sml{
                width: 175px;
                height: 190px;
            }
        }
    }
    
    .intro_in{
        position: relative;
        width: calc(100vw - 28px);
        height: 100%;
        margin: 0 14px;
        z-index: 100;

        .ment{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-90px);
            font-size: 0.9rem;
            text-align: center;
            line-height: 1.3em;
            letter-spacing: -0.4px;
            font-weight: 300;
            color: var(--main-blue);

            span{
                color: var(--main-yellow);
            }
        }
        .title{
            font-size: clamp(3.6rem, 11vw, 13rem);
        
            & > p{
                position: absolute;
                bottom: 50%;
                left: 0;
            }
            .fe{
                transform: translateY(30px);
                color: #fff;
                -webkit-text-stroke: 2px var(--main-blue);
            }
            .pr{
                transform: translateY(90px);
                color: var(--main-blue);
            }
        }

        @media screen and (min-width:768px){
            width: calc(100vw - 40px);
            marign: 0 20px;

            .ment{
                text-align: left;
                transform: translateY(-70px);
            }
            .fe{
                transform: translateY(60px);
            }
            .pr{
                transform: translateY(180px);
                color: var(--main-blue);
            }
        }

    }
`;