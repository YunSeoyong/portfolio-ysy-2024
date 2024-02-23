import styled from "styled-components";

const ProjectComp = ({
    id,
    title,
    subtitle,
    stack,
    explanation,
    photomo,
    photota,
    photopc,
    link,
    git
}) => {
    return (
        <ProjectWrap>
            <div className="project_in">
                {/* 앞면 */}
                <div className="photo">
                    <img src={`/assets/img/${photomo}`} alt={title} className="mo" />
                    <img src={`/assets/img/${photota}`} alt={title} className="ta" />
                    <img src={`/assets/img/${photopc}`} alt={title} className="pc" />
                </div>
                {/* 뒷면 */}
                <div className="info">
                    <h3 className="title">{title}</h3>
                    <p className="subtitle">{subtitle}</p>
                    <div className="stack">
                        <h4>기술 스택</h4>
                        <ul>
                            {
                                stack.map((i, idx) => (
                                    <li key={i.idx}>{i}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="explanation">
                        <h4>프로젝트 소개</h4>
                        <p>{explanation}</p>
                    </div>
                    <div className="link">
                        <div className="site">
                            <a href={link}>Link</a>
                        </div>
                        <div className="git">
                            <a href={git}>Git</a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectWrap>
    );
};

export default ProjectComp

const ProjectWrap = styled.div`
    width: 100%;
    height: calc(100vh - 180px);
    perspective: 1000px;

    &:hover .project_in{
        transform: rotateY(180deg);
    }
    
    .project_in{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 14px;
        transition: 0.5s;
        transform-style: preserve-3d;
        
        .photo, .info{
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%; 
            height: 100%;
            border-radius: 14px;
            overflow: hidden;
            backface-visibility: hidden;
            transition: transform 1s ease-in-out;
            box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.2);
            background-color: #fff;

        }
        .photo{
            img{
                width: 100%;
                height: auto;
            }
            .ta, .pc{
                display: none;
            }
        }
        .info{
            transform: rotateY(180deg);
            padding: 25px;

            h4{
                font-size: var(--font-size-sm);
                font-weight: 600;
                color: #666;
                margin-bottom: 2vw;
            }
            .title{
                font-size: var(--font-size-md);
                font-weight: 700;
                margin-bottom: 2vw;
                color: var(--main-blue);
            }
            .subtitle{
                font-size: var(--font-size-con);
                color: #888;
                margin-bottom: 3.4vw;
            }
            .stack{
                margin-bottom: 3vw;
                ul{
                    display: flex;
                    flex-wrap: wrap;

                    li{
                        padding: 5px 8px;
                        font-size: 11px;
                        background-color: var(--main-yellow);
                        color: #fff;
                        border-radius: 20px;
                        margin-right: 1.5vw;
                        margin-bottom: 1.5vw;
                    }
                }
            }
            .explanation{
                margin-bottom: 4vw;

                p{
                    font-size: 13px;
                    line-height: 1.3em;
                    letter-spacing: -0.02rem;
                    color: #333;
                }
            }
            .link{
                display: flex;
                
                div{
                    margin-right: 6vw;
                    background-color: var(--sub-blue);
                    text-align: center;
                    border-radius: 40px;
                    
                    a{
                        display: block;
                        padding: 8px 20px;
                        color: #fff;
                    }
                }
            }
            
        }
    }
`;