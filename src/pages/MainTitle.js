import styled, { keyframes } from "styled-components";


const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const MainTitle = () => {

    return (
        <MainTitleWrap id="MainTitle">
            <BgSvg>
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
                <div className="ment">
                    <p><span>육각형</span> 개발자가 되기 위해 노력중인</p>
                    <p>신입 프론트엔드 개발자 <span>윤서용</span>입니다.</p>
                </div>
                <div className="title russo-one-regular">
                    <p className="fe">FRONTEND</p>
                    <p className="pr">PORTFOLIO</p>
                </div>
            </MainTitleIn>
        </MainTitleWrap>
    );
};

export default MainTitle;

const MainTitleWrap = styled.section`
    position: relative;
    height: 100vh;
    max-height: 1080px;
    overflow: hidden;

    @media screen and (min-width:1024px) {
        max-height: initial;
    }
`
const BgSvg = styled.div`
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
        };
    };
    .title{
        font-size: clamp(3.6rem, 11vw, 13rem);
    
        & > p{
            position: absolute;
            bottom: 50%;
        };
        .fe{
            left: 0;
            transform: translateY(30px);
            color: transparent;
            -webkit-text-stroke: 2px var(--main-blue);
        };
        .pr{
            left: 0;
            transform: translateY(90px);
            color: var(--main-blue);
        };
    };

    @media screen and (min-width:768px){
        margin : 0 20px;

        .ment{
            transform: translateY(-130px);
            font-size: 18px;
        };
        .title{
            .fe{
                transform: translateY(50px);
                -webkit-text-stroke: 3px var(--main-blue);
            };
            .pr{
                text-align: right;
                right: 0;
                transform: translateY(150px);
                color: var(--main-blue);
            };
        };
    };
    @media screen and (min-width:1200px){
        .ment{
            text-align: left;
            display: flex;
            transform: translateY(-110px);
            font-size: 21px;
            margin-left: 10px;
            
            p:first-child{
                margin-right: 8px;
            };
        };
        .title{
            .fe{
                transform: translateY(80px);
                -webkit-text-stroke: 4px var(--main-blue);
            };
            .pr{
                text-align: right;
                right: 0;
                transform: translateY(220px);
                color: var(--main-blue);
            };
        };
    };
    @media screen and (min-width:1600px){
        width: 1560px;
        margin: 0 auto;

        .ment{
            transform: translateY(-150px);
            font-size: 24px;
            margin-left: 10px;
            
            p:first-child{
                margin-right: 8px;
            };
        };
        .title{
            .fe{
                transform: translateY(80px);
                -webkit-text-stroke: 5px var(--main-blue);
            };
            .pr{
                text-align: right;
                right: 0;
                transform: translateY(280px);
                color: var(--main-blue);
            };
        };
    }
`;