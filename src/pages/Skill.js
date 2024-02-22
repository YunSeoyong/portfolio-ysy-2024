import { useContext, useState } from "react";
import styled from "styled-components";

import Triangle from "../component/Triangle";
import HexaIcons from "../component/HexaIcons";
import SkillText from "../component/SkillText";

const hexaTri = [
    {
        id: 0,
        rotate: 0,
        name: 'Jquery',
        text: 'Jquery의 기본 문법을 이해하고 있고, 라이브러리를 활용할 수 있으며, 이를 이용하여 동적인 웹사이트를 제작할 수 있습니다.',
    },
    {
        id: 1,
        rotate: 60,
        name: 'React, styled components',
        text: 'React를 통해 재사용 가능한 컴포넌트를 활용할 수 있고, tyled components를 사용하여 스타일 작업을 할 수 있습니다.',
    },
    {
        id: 2,
        rotate: 120,
        name: 'HTML5, CSS3',
        text: 'HTML5, CSS3를 이용하여 웹 전반적인 기초를 수립하고, UI를 설계 및 구현하였으며 반응형 웹(responsive web)을 설계 및 구현할 수 있는 능력을 길렀습니다. keyframe을 활용한 애니메이션 기법을 익혔습니다.',
    },
    {
        id: 3,
        rotate: 180,
        name: 'Javascript, Typescript',
        text: 'ES6문법에 익숙하며, 이를 활용하여 동적인 웹사이트를 제작할 수 있습니다. typescript를 이용하여 안정성을 높일 수 있습니다. ',
    },
    {
        id: 4,
        rotate: 240,
        name: 'Node.js',
        text: 'node.js를 활용하여 자바스크립트 환경에서 서버를 구축하고 이를 활용할 수 있습니다.',
    },
    {
        id: 5,
        rotate: 300,
        name: 'Photoshop, Illustrator',
        text: '포토샵과 일러스트레이터를 활용한 디자인 작업에 익숙하며, 기본 지식을 바탕으로 디자인 파트와의 활발한 소통이 가능합니다.'
    },
]
const hexaIcon = [
    { id: 0, name: 'javascript' },
    { id: 1, name: 'typescript' },
    { id: 2, name: 'html5' },
    { id: 3, name: 'css3' },
    { id: 4, name: 'react' },
    { id: 5, name: 'jquery' },
    { id: 6, name: 'styledcomponents' },
    { id: 7, name: 'photoshop' },
    { id: 8, name: 'illustrator' },
    { id: 9, name: 'nodejs' },
]

const Skill = () => {
    const [isModal, setIsModal] = useState(false);
    const [select, setSelect] = useState({});

    const mouseoverTri = (item) => {
        setIsModal(true);
        setSelect(item);
        return select;
    };
    const mouseoutTri = () => {
        setIsModal(false);
    };

    return (
        <SkillWrap>
            <SkillIn>
                <div className="bgTitle russo-one-regular">Skill</div>
                <div className="content">
                    <div className="hexagon">
                        {
                            hexaTri.map((tri) => (
                                <Triangle 
                                key={tri.id} 
                                {...tri}
                                mouseoverTri={() => {mouseoverTri(tri)}}
                                mouseoutTri={mouseoutTri}
                                isModal={isModal}
                                />
                            ))
                        }
                    </div>
                    <div className="hexaContent">
                        {
                            hexaIcon.map((it) => (
                                <HexaIcons key={it.id} {...it} />
                            ))
                        }
                    </div>
                </div>
                {
                    isModal && <SkillText {...select} />
                }
            </SkillIn>
        </SkillWrap>
    );
};

export default Skill;

const SkillWrap = styled.section`
    height: 100vh;
    max-height: 1080px;
    overflow: hidden;

    @media screen and (min-width:1024px) {
        max-height: initial;
    }
`;
const SkillIn = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    margin: 0 14px;
    padding-top: 45%;

    .bgTitle{
        position: absolute;
        top: 96px;
        left: 30px;
        z-index: -1;
        font-size: 72px;
        color: transparent;
        background: linear-gradient(90deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
    }

    .content{
        position: relative;
        width: 310px;
        height: 270px;
        margin: 0 auto 40px auto;
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
            cursor: pointer;
            z-index: -1;

            img{
                width: 100%;
                height: auto;
            }
        }
        .javascript{
            top: 7%;
            left: 37%;
        }
        .typescript{
            top: 7%;
            right: 37%;
        }
        .html5{
            width: 40px;
            height: 40px;
            top: 17%;
            left: 20%;
        }
        .css3{
            width: 40px;
            height: 40px;
            top: 31%;
            left: 12%;
        }
        .react{
            bottom: 33%;
            left: 13%;
        }
        .styledcomponents{
            bottom: 17%;
            left: 20%;
        }
        .jquery{
            bottom: 7%;
            left: 45%;
        }
        .photoshop{
            bottom: 33%;
            right: 13%;
        }
        .illustrator{
            bottom: 17%;
            right: 20%;
        }
        .nodejs{
            top: 25%;
            right: 17%;
        }
    }

    // 768 시작
    @media screen and (min-width:768px){
        margin: 0 40px;
        padding-top: 28%;

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
            }
            .html5, .css3{
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
        padding-top: 86px;
        margin: 0 7vw;

        .content{
            margin: 0;
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
            }
            .html5, .css3{
                width: 65px;
                height: 65px;
            }
        }
    }
`;