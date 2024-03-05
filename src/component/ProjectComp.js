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
                                stack.map((i) => (
                                    <li key={i}>{i}</li>
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
                            <a href={link} target="_blank" rel="noreferrer noopener">Link</a>
                        </div>
                        <div className="git">
                            <a href={git} target="_blank" rel="noreferrer noopener">Git</a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectWrap>
    );
};

export default ProjectComp

const ProjectWrap = styled.div`
    height: calc(100vh - 240px);
    max-height: 620px;
    perspective: 1000px;

    &:hover .project_in{
        transform: rotateY(180deg);
    }
    
    .project_in{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 14px;
        transform-style: preserve-3d;
        transition: transform 0.6s ease-in-out;
        
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
            box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.2);
            background-color: #fff;

        }
        .photo{
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
            }
            .ta, .pc{
                display: none;
            }
        }
        .info{
            transform: rotateY(180deg);
            padding: 25px;
            overflow-y: auto;
        
            &::-webkit-scrollbar {
                width: 8px;
            }
            &::-webkit-scrollbar-thumb {
                height: 30px;
                background: var(--sub-blue);
                border-radius: 50px;
            }
            &::-webkit-scrollbar-track {
                background: rgba(126, 201, 255, 0.2);
            }

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
    @media screen and (min-width:768px) {
        height: calc(100vh - 340px);

        .project_in{
            .photo{
                .ta{
                    display: block;
                }
                .mo, .pc{
                    display: none;
                }
            }
            .info{
                padding: 30px;

                .stack{
                    ul{
                        li{
                            padding: 7px 11px;
                            font-size: 13px;
                        }
                    }
                }
                
                .explanation{
                    margin-bottom: 2.8vw;
                    p{
                        font-size: 15px;
                    }
                }

                .link{
                    justify-content: space-between;
                    div{
                        margin: 0;
                        a{
                            font-size: 17px;
                            padding: 10px 30px;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width:1200px){
        height: calc(100vh - 300px);

        .project_in{
            .info{
                padding: 35px;

                h4{
                    margin-bottom: 1vw;
                }
                .title{
                    margin-bottom: 1.1vw;
                }
                .subtitle{
                    margin-bottom: 1.1vw;
                }
                .stack{
                    margin-bottom: 1.2vw;

                    ul{
                        li{
                            margin-right: 1vw;
                            margin-bottom: 0.8vw;
                        }
                    }
                }
                .explanation{
                    margin-bottom: 2.2vw;
                }
            }
        }
    }
    @media screen and (min-width:1600px){
        .project_in{
            .photo{
                .pc{
                    display: block;
                }
                .mo, .ta{
                    display: none;
                }
            }
            .info{
                padding: 40px;
                h4{
                    margin-bottom: 1.2vw;
                }
                .title{
                    margin-bottom: 1.3vw;
                }
                .subtitle{
                    margin-bottom: 1.3vw;
                }
                .stack{
                    margin-bottom: 1.2vw;

                    ul{
                        li{
                            margin-right: 0.5vw;
                            margin-bottom: 0.3vw;
                            font-size: 14px;
                            padding: 8px 14px;
                        }
                    }
                }
                .explanation{
                    margin-bottom: 1.7vw;
                }
                .link{
                    div{
                        a{
                            font-size: 20px;
                            padding: 15px 45px;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`;