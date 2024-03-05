import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Triangle from "../component/Triangle";
import HexaIcons from "../component/HexaIcons";
import SkillText from "../component/SkillText";

const hexaTri = [
    {
        id: 0,
        rotate: 0,
        name: 'JavaScript, Jquery',
        text: 'ES6 문법에 익숙하며, JavaScript와 Jquery의 기본 문법을 이해하고 있고, 라이브러리를 활용할 수 있으며, 이를 이용하여 동적인 웹사이트를 제작할 수 있습니다.',
    },
    {
        id: 1,
        rotate: 60,
        name: 'React, Typescript',
        text: 'React를 통해 재사용 가능한 컴포넌트를 활용할 수 있고, typescript를 이용하여 안정성을 높일 수 있습니다.',
    },
    {
        id: 2,
        rotate: 120,
        name: 'HTML5, CSS3, SCSS',
        text: 'HTML5, CSS3를 이용하여 웹 전반적인 기초를 수립하고, UI를 설계 및 구현하였으며, 반응형 웹을 구현할 수 있는 능력을 길렀습니다. keyframe을 활용한 애니메이션 기법을 익혔습니다. SCSS를 활용하여 변수와 mixin을 사용해 css를 작성할 수 있습니다.',
    },
    {
        id: 3,
        rotate: 180,
        name: 'styled components, firebase',
        text: 'styled components를 사용하여 react 스타일 작업을 할 수 있습니다. firebase를 활용해 로그인 페이지를 제작하고 웹을 배포할 수 있습니다.',
    },
    {
        id: 4,
        rotate: 240,
        name: 'Node.js, mongoDB',
        text: 'node.js를 활용하여 자바스크립트 환경에서 서버를 구축하고 이를 활용할 수 있습니다. mongoDB를 활용해 데이터베이스를 서버와 연결할 수 있습니다.',
    },
    {
        id: 5,
        rotate: 300,
        name: 'Photoshop, Illustrator',
        text: '포토샵과 일러스트레이터를 활용한 디자인 작업에 익숙하며, 기본 지식을 바탕으로 디자인 파트와의 활발한 소통이 가능합니다.'
    },
]
const hexaIcon = [
    { id: 0, name: 'javascript', code: 0 },
    { id: 1, name: 'jquery', code: 0 },
    { id: 2, name: 'typescript', code: 1 },
    { id: 3, name: 'react', code: 1 },
    { id: 4, name: 'html5', code: 2 },
    { id: 5, name: 'css3', code: 2 },
    { id: 6, name: 'scss', code: 2 },
    { id: 7, name: 'styledcomponents', code: 3 },
    { id: 8, name: 'firebase', code: 3 },
    { id: 9, name: 'nodejs', code: 4 },
    { id: 10, name: 'mongodb', code: 4 },
    { id: 11, name: 'photoshop', code: 5 },
    { id: 12, name: 'illustrator', code: 5 },
]

const Skill = () => {
    const [isModal, setIsModal] = useState(false);
    const [select, setSelect] = useState({});
    const [text, setText] = useState({});

    const mouseoverIcon = (item) => {
        setIsModal(true);
        setSelect(item);
        setText(hexaTri[item.code]);
        return select;
    };
    const mouseoutIcon = () => {
        setIsModal(false);
    };

    const itemTitle = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1.3,
                ease: "linear"
            } 
        }
    }
    const itemIcon = {
        hidden: { opacity: 0},
        show: { 
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1.8,
                ease: "linear"
            } 
        }
    }

    return (
        <SkillWrap id="Skill" className="section">
            <SkillIn>
                <motion.h2 
                    className="bgTitle russo-one-regular"
                    variants={itemTitle}
                    initial="hidden"
                    whileInView="show"
                >
                    Skill
                </motion.h2>
                <div className="content">
                    <div className="hexagon">
                        {
                            hexaTri.map((tri) => (
                                <Triangle 
                                key={tri.id} 
                                {...tri}
                                />
                            ))
                        }
                    </div>
                    <motion.div 
                        className="hexaContent"
                        variants={itemIcon}
                        initial="hidden"
                        whileInView="show"
                    >
                        {
                            hexaIcon.map((it) => (
                                <HexaIcons 
                                    key={it.id} {...it}
                                    over={() => {mouseoverIcon(it)}}
                                    out={mouseoutIcon}
                                />
                            ))
                        }
                    </motion.div>
                </div>
                {
                    isModal && <SkillText {...text} />
                }
            </SkillIn>
        </SkillWrap>
    );
};

export default Skill;

const SkillWrap = styled.section`
    position: relative;
    height: 100dvh;
    overflow: hidden;
`;
const SkillIn = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    margin: 0 14px;

    .bgTitle{
        position: absolute;
        top: 96px;
        left: 30px;
        z-index: -1;
        font-size: 72px;
        color: transparent;
        background: linear-gradient(180deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
    }

    .content{
        position: absolute;
        top: 45%;
        left: 50%;
        width: 310px;
        height: 270px;
        transform: translate(-50%, -50%);
        background-color: transparent;
        
        .hexagon{
            position: relative;
            width: 310px;
            height: 270px;
            background-color: transparent;
            .triangle{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 150px;
                height: 130px;
                transform-origin: center top;
                cursor: pointer;
                width: 150px;
                height: 130px;
                overflow: visible;
                stroke: var(--sub-blue);
                stroke-width: 3;
                stroke-linejoin: round;
                stroke-linecap: round;
                background-color: transparent;
            }
        }
    } 
    .hexaContent{
        p{
            position: absolute;
            width: 35px;
            height: 35px;
            padding: 8px;
            cursor: pointer;
            z-index: 5;
            transition: 0.3s;

            img{
                width: 100%;
                height: auto;
            }

            &:hover {
                opacity: 0.7;
            }
        }
        .styledcomponents{
            top: 5%;
            left: 35%;
        }
        .firebase{
            top: 5%;
            right: 35%;
        }
        .html5{
            width: 40px;
            height: 40px;
            top: 15%;
            left: 18%;
        }
        .css3{
            width: 40px;
            height: 40px;
            top: 29%;
            left: 10%;
        }
        .scss{
            width: 40px;
            height: 40px;
            top: 29%;
            left: 26%;
        }
        .react{
            bottom: 31%;
            left: 11%;
        }
        .typescript{
            bottom: 15%;
            left: 18%;
        }
        .jquery{
            bottom: 5%;
            right: 35%;
        }
        .javascript{
            bottom: 5%;
            left: 35%;
        }
        .photoshop{
            bottom: 31%;
            right: 11%;
        }
        .illustrator{
            bottom: 15%;
            right: 18%;
        }
        .nodejs{
            top: 16%;
            right: 18%;
        }
        .mongodb{
            top: 31%;
            right: 12%;
        }
    }

    // 768 시작
    @media screen and (min-width:768px){
        margin: 0 40px;

        .bgTitle{
            font-size: 200px;
        }

        .content{
            width: 510px;
            height: 450px;
    
            .hexagon{
                width: 510px;
                height: 450px;
    
                .triangle{
                    width: 250px;
                    height: 217px;
                    stroke-width: 4;
                }
            }
        } 

        .hexaContent{
            width: 510px;
            height: 450px;
    
            p{
                width: 60px;
                height: 60px;
                padding: 12px;
            }
            .html5, .css3, .scss{
                width: 65px;
                height: 65px;
            }
        }
    }
    // 768 끝
    // 1024 시작
    @media screen and (min-width:1024px) {
        display: flex;
        align-items: center;

        .bgTitle{
            left: auto;
            right: 30px;
        }

        .content{
            top: 50%;
            left: 20px;
            transform: translate(0, -50%);
        }
        .hexaContent{
            p{
                padding: 15px;
            }
        }
    }
    // 1024 끝
    // 1600 시작
    @media screen and (min-width:1600px) {
        width: 1420px;
        margin: 0 auto;

        .content{
            width: 663px;
            height: 585px;
    
            .hexagon{
                width: 663px;
                height: 585px;
    
                .triangle{
                    width: 375px;
                    height: 282px;
                }
            }
        } 

        .hexaContent{
            width: 663px;
            height: 585px;
    
            p{
                width: 60px;
                height: 60px;
                padding: 20px;
            }
            .html5, .css3{
                width: 65px;
                height: 65px;
            }
        }
    }
`;