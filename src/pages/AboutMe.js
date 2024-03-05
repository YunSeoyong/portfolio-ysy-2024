import styled, {keyframes} from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhoneVolume, faEnvelope, faUserGraduate, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const aboutMeInfo = [
    {id: 0, icon: faUser, content: '윤서용'},
    {id: 1, icon: faPhoneVolume, content: <a href="tel:010-4294-2415">010-4294-2415</a>},
    {id: 2, icon: faEnvelope, content: <a href="mailto:seoy2515@gmail.com">seoy2515@gmail.com</a>},
    {id: 3, icon: faUserGraduate, content: `영남대 (시각디자인) 졸업 \n울산 그린 컴퓨터 아카데미 수료`},
]

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const AboutMe = () => {
    const motionWrap = {
        hidden: { 
            opacity: 0 
        },
        show: {
            opacity: 1,
            transition: {
                ease: "linear",
                duration: 1.2,
                delayChildren: 0.3,
                staggerChildren: 0.5
            }
        }
    }

    const hexaMotion = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "none"
        },
        show: {
            opacity: 1,
            pathLength: 1,
            fill: "none"
        }
    }
    const itemTitle = {
        hidden: { opacity: 0, y: '-40%', x: '-50%'},
        show: { opacity: 1, y: '-50%', x: '-50%'}
    }

    return (
        <AboutMeWrap id="AboutMe" className="section">
            <AboutMeIn
                variants={motionWrap}
                initial="hidden"
                whileInView="show"
            >
                <div className="bgSvg">
                    <motion.svg width="602" height="694" viewBox="0 0 602 694" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M2.9892 174.943L301 2.88675L599.011 174.943V519.057L301 691.113L2.9892 519.057V174.943Z" stroke="#7EC9FF" strokeOpacity="0.3" strokeWidth="5"
                        variants={hexaMotion}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}/>
                    </motion.svg>
                </div>
                <motion.h2 
                    className="bgTitle russo-one-regular"
                    variants={itemTitle}
                    transition={{duration: 1.2}}
                >
                    AboutMe
                </motion.h2>
                <div className="content">
                    <h3>"육각형 개발자를 목표로"</h3>
                    <p className="txt">
                        끊임없이 연구하고 학습하며 소통하는 프론트엔드 개발자가 되겠습니다.
                    </p>
                    <ul className="info">
                        {aboutMeInfo.map((i) => (
                            <li key={i.id}>
                                <FontAwesomeIcon
                                    className="icon" 
                                    icon={i.icon}
                                />
                                <p>{i.content}</p>
                            </li>
                        ))}
                        <li>
                            <a href="https://github.com/YunSeoyong" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} className="linkIcon"/></a>
                            <a href="https://open.kakao.com/o/s7MtpZbg" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faCommentDots} className="linkIcon"/></a>
                        </li>
                    </ul>
                </div>
            </AboutMeIn>
            <footer>
                <p>Copyright 2024. Designed & Developed by YUN SEO YONG</p>
            </footer>
        </AboutMeWrap>
    );
};

export default AboutMe;

const AboutMeWrap = styled.section`
    position: relative;
    height: 100dvh;
    overflow: hidden;

    footer{
        position: absolute;
        bottom:0;
        left: 0;
        right: 0;
        height: 40px;
        background-color: var(--main-blue);
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 12px;
    }
    @media screen and (min-width:1200px){
        footer{
            padding: 0 20px;
            height: 50px;
            line-height: 50px;
            text-align: right;
            font-size: 14px;
        }
    }
    @media screen and (min-width:1600px){
        footer{
            padding: 0;
            p{
                width: 1560px;
                margin: 0 auto;
            }
        }
    }
`;
const AboutMeIn = styled(motion.div)`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    margin: 0 14px;
    padding-top: 106px;
    
    .bgSvg{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.5);
        svg{
            animation: ${rotateAnimation} 15s linear infinite;
        }
        z-index: -2;
    }

    .bgTitle {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: var(--font-size-tl);
        color: transparent;
        background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
        z-index: -1;
    }
    .content{
        text-align: center;
        h3{
            position: relative;
            display: inline-block;
            margin-bottom: 4vw;
            font-size: var(--font-size-md);
            font-weight: 700;
            line-height: 1.5em;
            color: #333;

            &::before{
                content: "";
                display: block;
                position: absolute;
                top: 0.3em;
                left: 0.4em;
                width: 100%;
                height: 1em;
                background: linear-gradient(90deg, #7EC9FF, #FCFBBC, rgba(255, 255, 255, 0));
                z-index: -1;
            }
        }
        .txt{
            width: 70%;
            margin: 0 auto;
            color: #666;
            font-size: var(--font-size-con);
            line-height: 1.3em;
        }

        ul{
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: left;
            white-space: pre-wrap;

            li{
                display: flex;
                padding: 0.7em 0;

                .icon {
                    display: block;
                    width: 20px;
                    height: 20px;
                    margin-right: 20px;
                    color: var(--main-blue);
                }
                p{
                    font-size: var(--font-size-con);
                    line-height: 20px;
                    font-weight: 600;
                    color: #555;
                }
                a{
                    color: #555;
                    transition: 0.3s;

                    &:hover{
                        color: var(--main-blue);
                    }
                }
                .linkIcon{
                    width: 30px;
                    height: 30px;
                    margin-right: 20px;
                    color: var(--main-blue);
                    transition: 0.3s;

                    &:hover{
                        color: #333;
                    }
                }
            }
        }
    }
    @media screen and (min-width:768px){
        margin: 0 20px;
        padding-top: 136px;

        .bgSvg{
            top: 50%;
            transform: translate(-50%, -50%) scale(0.7);

            svg{
                animation: ${rotateAnimation} 17s linear infinite;
            }
        }
    
        .bgTitle {
            top: 50%;
            font-size: clamp(8rem, 20vw, 19rem);
        }
        .content{
            .txt{
                width: 60%;
            }

            ul{
                top: 50%;
    
                li{
                    padding: 0.9em 0;
    
                    .icon {
                        width: 24px;
                        height: 24px;
                        margin-right: 30px;
                    }
                    p{
                        font-size: var(--font-size-con);
                        line-height: 24px;
                    }
                }
            }
        }
    }
    @media screen and (min-width:1200px){

        .bgSvg{
            top: 55%;
            transform: translate(-50%, -50%) scale(1);

            svg{
                animation: ${rotateAnimation} 17s linear infinite;
            }
        }
    
        .bgTitle {
            top: 50%;
        }
        .content{
            h3{
                margin-bottom: 3vw;
            }
            .txt{
                width: 40%;
            }

            ul{
                top: 50%;
    
                li{
                    padding: 1em 0;
                    .icon {
                        width: 30px;
                        height: 30px;
                        margin-right: 40px;
                    }
                    p{
                        font-size: var(--font-size-con);
                        line-height: 30px;
                    }
                }
            }
        }
    }
    @media screen and (min-width:1600px){

        .bgSvg{
            top: 55%;
        }
        .bgTitle {
            top: 55%;
        }
        .content{
            h3{
                margin-bottom: 2vw;
            }
            .txt{
                width: 30%;
            }
            ul{
                top: 55%;
    
                li{
                    padding: 1.5em 0;
                }
            }
        }
    }
`;