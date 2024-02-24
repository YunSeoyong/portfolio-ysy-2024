import { useState } from "react";
import styled from "styled-components";

const navList = [
    {text: "Intro", id: 0},
    {text: "Skill", id: 1},
    {text: "Portfolio", id: 2},
    {text: "AboutMe", id: 3},
];
const Navi = ({
    type,
    isOpen,
}) => {
    return (
        <Navigation
            className={`${type} russo-one-regular ${isOpen ? 'active' : ''}`}
        >
            <ul>
                {navList.map((it) => (
                    <li key={it.id}>
                        <a href={`#${it.text}`}>{it.text}</a>
                        <span className="bar"></span>
                    </li>
                ))}
            </ul>
        </Navigation>
    );
};

export default Navi;

const Navigation = styled.nav`
    &.mo {
        position: absolute;
        top: 86px;
        left: 50%;
        padding: 10px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transform: translate(-50%, -20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

        &.active{
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 0);
        }
        
        li{
            margin-bottom: 10px;

            a {
                padding: 2px 10px;
                font-size: 16px;
                line-height: 1.2em;
                color: var(--sub-blue);
                transition: 0.3s ease;
                text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2)
            }
        }
        li:hover a{
            color: var(--main-blue);
        }

        @media screen and (min-width:768px) {
            display: none;
        };
    }

    &.pc {
        display: none;

        // 
        @media screen and (min-width:768px) {
            display: block;
            
            ul{
                display: flex;

                li{
                    position: relative;
                    margin-left: 5vw;
                    overflow: hidden;
                    
                    a {
                        font-size: var(--font-size-sm);
                        color: var(--main-blue);
                        line-height: 1.3em;
                        padding: 5px;
                        transition: 0.3s ease;
                    }

                    .bar {
                        display: block;
                        width: 100%;
                        height: 0.4vw;
                        max-height: 5px;
                        transform: translateX(-100%);
                        background-image: linear-gradient(to right, #7EC9FF, #FBFBBD);
                        transition: 0.3s ease;
                    }
                }
                li:hover a{
                    color: var(--main-yellow);
                }
                li:hover .bar{
                    transform: translateX(0);
                }
                // li.active{
                //     a{
                //         color: var(--main-yellow);
                //     }
                //     .bar{
                //         transform: translateX(0);
                //     }
                // }
            }
        };
        // 1024 시작
        @media screen and (min-width:1024px) {
            ul {
                li{
                    margin-left: 60px;

                    a{
                        // font-size: 24px;
                    }
                }
            }
        }
        // 1024 끝
    }
`;