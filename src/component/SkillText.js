import styled from "styled-components";

const SkillText = () => {
    return (
        <SkillTextWrap>
            <div className="skillTextIn">
                <p className="name russo-one-regular">HTML5, CSS3</p>
                <p className="text">
                    설명부분설명부분설명부분설명부분설명부분설명부분설명부분설명부분설명부분설명부분설명부분설명부분
                </p>
            </div>
        </SkillTextWrap>
    );
};

export default SkillText;

const SkillTextWrap = styled.div`
    position: absolute;
    bottom: 6vh;
    left: 50%;
    width: 60vw;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid var(--main-blue);
    transform: translateX(-50%);
    
    .skillTextIn{
        padding: 20px;

        .name{
            font-size: 18px;
            margin-bottom: 20px;
        }
        .text{
            line-height: 1.4em;
            letter-spacing: -0.2px;
        }
    }
`;