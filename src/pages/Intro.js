import styled, { keyframes } from "styled-components";

import { ReactComponent as HexaBig } from '../svg/hexa-big.svg'
import { ReactComponent as HexaMid } from '../svg/hexa-mid.svg'

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Intro = () => {
    return (
        <IntroWrap id="Intro">
            <div className="hexa_big">
                <HexaBig />
            </div>
            <div className="intro_in">
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

    .hexa_big {
        position: absolute;
        top: -30px;
        right: -60px;
        animation: ${rotateAnimation} 10s linear infinite;
    }
    
    .intro_in{
        position: relative;
        width: calc(100vw - 28px);
        height: 100%;
        margin: 0 14px;
        z-index: 100;

        .title{
            font-size: var(--font-size-lg);
        
            & > p{
                position: absolute;
            }
            .fe{
                bottom: 50%;
                left: 0;
                color: #fff;
                -webkit-text-stroke: 2px var(--main-blue);
            }
            .pr{
                bottom: 42%;
                right: 0;
                color: var(--main-blue);
            }
        }
    }
`;