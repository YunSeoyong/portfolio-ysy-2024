import styled from "styled-components";

const ProjectComp = () => {
    return (
        <ProjectWrap>
            <div className="project_in">
                <div className="photo">
                    <img src="/assets/img/pjt-cinelib-mo.png" alt="cinelib" className="mo" />
                    <img src="/assets/img/pjt-cinelib-ta.png" alt="cinelib" className="ta" />
                    <img src="/assets/img/pjt-cinelib-pc.png" alt="cinelib" className="pc" />
                </div>
                <div className="info">
                    <h3 className="title">TITLE</h3>
                    <p className="subtitle">서브타이틀</p>
                    <div className="stack">
                        <h4>기술 스택</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className="explanation">
                        <h4>프로젝트 소개</h4>
                        <p>TMDB API를 활용하여 React로 제작한 포트폴리오용 반응형 웹입니다. api를 통해 데이터를 가져오고 이를 활용하여 필터링 시스템, 검색 시스템을 제작하였습니다. firebase를 활용해 기본적인 로그인 기능을 적용시켰습니다.</p>
                    </div>
                    <div className="link">
                        <div className="linkbox">
                            <h4>Link</h4>
                            <p>sss.sss.sss</p>
                        </div>
                        <div className="linkbox">
                            <h4>Git</h4>
                            <p>sss.sss.sss</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectWrap>
    );
};

export default ProjectComp

const ProjectWrap = styled.div`
    .project_in{
        .photo{
            width: 70%;
            max-height: 350px;
            overflow: hidden;

            img{
                width: 100%;
                height: auto;

            }
        }
    }
`;