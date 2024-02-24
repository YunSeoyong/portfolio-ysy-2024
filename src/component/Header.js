import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Navi from "./Navi";

const Header = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClose = (e) => {
            if(isOpen && (!menuRef.current.contains(e.target))){
                setIsOpen(false);
            };
        };
        document.addEventListener('click', handleOutsideClose);
        return () => document.removeEventListener('click', handleOutsideClose);
    }, [isOpen]);

    return (
        <HeaderWrap>
            <div className="headerIn">
                <h1 id="logo" className="russo-one-regular"><a href="#MainTitle">SEOYONG</a></h1>
                <div className="sideMenu" ref={menuRef}>
                    <p
                        className="moNavBtn"
                        onClick={() => {setIsOpen(!isOpen)}}
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBars}
                            className={`
                                iconMenu 
                                fa-xl
                            `}
                        />
                    </p>
                    <Navi type={'mo'} isOpen={isOpen} />
                </div>
                <Navi type={'pc'} />
            </div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1000;

        // 모바일 시작
        .headerIn{
            position: relative;
            display: flex;
            height: 86px;
            margin: 0 14px;

            h1 {
                width: 100%;
                text-align: center;
            }
            h1 > a {
                font-size: 32px;
                line-height: 86px;
                color: var(--main-blue);   
            }
            .sideMenu{
                .moNavBtn {
                    position: absolute;
                    top: 31px;
                    right: 0;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    color: var(--main-blue);
                    cursor: pointer;
    
                    .iconMenu.on{
                        transform: scale(1.2);
                    }
                    .iconMenu.off{
                        transform: scale(1.1);
                    }
                }
            }
            // 모바일 끝
            // 768 시작
            @media screen and (min-width:768px) {
                margin: 0 20px;
                align-items: center;

                h1{
                    text-align: left;
                }

                .sideMenu{
                    display: none;
                }
            };
            // 768 끝
            // 1600 시작
            @media screen and (min-width:1600px) {
                width: 1560px;
                margin: 0 auto;
            }
        }
`;