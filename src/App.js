import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./component/Header";
import MainTitle from "./pages/MainTitle";
import Intro from "./pages/Intro";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";

function App() {
    const mainRef = useRef();
    const dividerHeight = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const sectionRef = useRef([]);
    console.log(currentPage);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = mainRef.current;
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                if(scrollTop >= 0 && scrollTop < pageHeight) {
                    // 메인타이틀
                    console.log('메인타이틀, down');
                    mainRef.current.scrollTo({
                        top: pageHeight + dividerHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 인트로
                    console.log('인트로, down');
                    mainRef.current.scrollTo({
                        top: pageHeight * 2 + dividerHeight * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    // 스킬
                    console.log('스킬, down');
                    mainRef.current.scrollTo({
                        top: pageHeight * 3 + dividerHeight * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(3);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
                    // 포트폴리오
                    console.log('포트폴리오, down');
                    mainRef.current.scrollTo({
                        top: pageHeight * 4 + dividerHeight * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(4);
                } else {
                    // 어바웃미
                    console.log('어바웃미, down');
                    mainRef.current.scrollTo({
                        top: pageHeight * 4 + dividerHeight * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(4);
                }
            } else {
                if(scrollTop >= 0 && scrollTop < pageHeight) {
                    // 메인타이틀
                    console.log('메인타이틀, up');
                    mainRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 인트로
                    console.log('인트로, up');
                    mainRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(0);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    // 스킬
                    console.log('스킬, up');
                    mainRef.current.scrollTo({
                        top: pageHeight + dividerHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
                    // 포트폴리오
                    console.log('포트폴리오, up');
                    mainRef.current.scrollTo({
                        top: pageHeight * 2 + dividerHeight * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(2);
                } else {
                    // 어바웃미
                    console.log('어바웃미, up');
                    mainRef.current.scrollTo({
                        top: pageHeight * 3 + dividerHeight * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setCurrentPage(3);
                }
            }
        };
        const mainRefCurrent = mainRef.current;
        mainRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            mainRefCurrent.removeEventListener("wheel", wheelHandler);
        }
    }, []);


    return (
        <div className="App" ref={mainRef}>
            <Header 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                sectionRef={sectionRef}
            />
            <div ref={(el) => sectionRef.current[0] = el}><MainTitle /></div>
            <div className="divider"></div>
            <div ref={(el) => sectionRef.current[1] = el}><Intro currentPage={currentPage} /></div>
            <div className="divider"></div>
            <div ref={(el) => sectionRef.current[2] = el}><Skill /></div>
            <div className="divider"></div>
            <div ref={(el) => sectionRef.current[3] = el}><Portfolio /></div>
            <div className="divider"></div>
            <div ref={(el) => sectionRef.current[4] = el}><AboutMe /></div>
        </div>
    );
}

export default App;
