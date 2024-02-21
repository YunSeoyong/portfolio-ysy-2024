import { useContext } from "react";
import styled from "styled-components";

import Triangle from "../component/Triangle";
import HexaIcons from "../component/HexaIcons";
import SkillText from "../component/SkillText";

const hexaTri = [
    { id: 0, rotate: 0,
      name: 'styled components',
      text: 'react에서 styled components를 사용하여 스타일 작업을 할 수 있습니다.'
    },
    { id: 1, rotate: 60, },
    { id: 2, rotate: 120, },
    { id: 3, rotate: 180, },
    { id: 4, rotate: 240, },
    { id: 5, rotate: 300, },
]
const hexaIcon = [
    { id: 0, name: 'javascript' },
    { id: 1, name: 'jquery' },
    { id: 2, name: 'html5' },
    { id: 3, name: 'css3' },
    { id: 4, name: 'react' },
    { id: 5, name: 'typescript' },
    { id: 6, name: 'styledcomponents' },
    { id: 7, name: 'photoshop' },
    { id: 8, name: 'illustrator' },
    { id: 9, name: 'nodejs' },
]

const Skill = () => {

    return (
        <SkillWrap>
            <SkillIn>
                <div className="bgTitle russo-one-regular">Skill</div>
                <div className="content">
                    <div className="hexagon">
                        {/* <Triangle rotate={0} />
                        <Triangle rotate={60} />
                        <Triangle rotate={120} />
                        <Triangle rotate={180} />
                        <Triangle rotate={240} />
                        <Triangle rotate={300} /> */}
                        {
                            hexaTri.map((tri) => (
                                <Triangle key={tri.id} {...tri} />
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
            </SkillIn>
            <SkillText />
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
        margin: 0 auto;

        .hexagon{
            position: relative;
            width: 310px;
            height: 270px;

            .triangle{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 150px;
                height: 130px;
                overflow: visible;
                stroke: var(--sub-blue);
                stroke-width: 3;
                stroke-linejoin: round;
                stroke-linecap: round;
                transform-origin: center top;
            }
        }
    } 
    .hexaContent{
        position: absolute;
        top: 0;
        left: 0;
        width: 310px;
        height: 270px;

        p{
            position: absolute;
            width: 35px;
            height: 35px;

            img{
                width: 100%;
                height: auto;
            }
        }
        .javascript{
            top: 7%;
            left: 37%;
        }
        .jquery{
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
        .typescript{
            bottom: 17%;
            left: 20%;
        }
        .styledcomponents{
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
        padding-top: 42%;

        .bgTitle{
            font-size: 200px;
        }

        .content{
            width: 510px;
    
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
`;