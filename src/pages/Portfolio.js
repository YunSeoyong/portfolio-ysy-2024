import styled from "styled-components";
import ProjectComp from "../component/ProjectComp";
import { useState } from "react";
import { useEffect } from "react";

const fetchData = async (setData) => {
    try {
        const response = await fetch('/project/project.json');
        const jsonData = await response.json();

        setData(jsonData);
    } catch (err) {
        console.log('데이터를 불러오지 못했습니다.');
    }
};

const Portfolio = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(setData);
    }, []);
    
    return (
        <PortfolioWrap id="Portfolio">
            <PortfolioIn>
                <h2 className="bgTitle russo-one-regular">Portfolio</h2>
                <div className="container">
                    {
                        data.map((it) => (
                            <ProjectComp 
                                key={it.id}
                                {...it}
                            />
                        ))
                    }
                </div>
            </PortfolioIn>
        </PortfolioWrap>
    );
};

export default Portfolio;

const PortfolioWrap = styled.section`
    height: 100vh;
    max-height: 1080px;
    
    @media screen and (min-width:1024px) {
        max-height: initial;
    }
    `;
    
    const PortfolioIn = styled.div`
    padding: 86px 60px 0 60px;

    .bgTitle {
        margin-bottom: 24px;
        text-align: center;
        font-size: 26px;
        color: transparent;
        background: linear-gradient(90deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
    }
`;