import styled from "styled-components";

const Portfolio = () => {
    return (
        <section id="Portfolio">
            <PortfolioIn>
                <h2 className="bgTitle russo-one-regular">Portfolio</h2>
                <div className="container">
                    
                </div>
            </PortfolioIn>
        </section>
    );
};

export default Portfolio;

const PortfolioIn = styled.div`
    margin: 0 14px;
    padding-top: 91px;

    .bgTitle {
        marign-bottom: 30px;
        text-align: center;
        font-size: 26px;
        color: transparent;
        background: linear-gradient(90deg, #7EC9FF, #FCFBBC);
        -webkit-background-clip: text;
        opacity: 0.6;
    }
`;