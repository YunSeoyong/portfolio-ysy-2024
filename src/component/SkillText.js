import styled from "styled-components";

const SkillText = ({id, name, text}) => {
    return (
        <SkillTextWrap>
            <div className="skillTextIn">
                <p className="name russo-one-regular">{name}</p>
                <p className="text">
                    {text}
                </p>
            </div>
        </SkillTextWrap>
    );
};

export default SkillText;

const SkillTextWrap = styled.div`
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid var(--main-blue);
    z-index: 100;
    
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

    @media screen and (min-width:768px){
        width: 50vw;

        .skillTextIn{
            padding: 30px;
    
            .name{
                font-size: 21px;
                margin-bottom: 24px;
            }
            .text{
                font-size: 16px;
            }
        }
    }
    @media screen and (min-width:1024px){
        top: 60%;
        bottom: auto;
        left: auto;
        right: 20px;
        width: 36vw;
        transform: translate(0, -50%);

        .skillTextIn{
            .name{
                font-size: 24px;
                margin-bottom: 28px;
            }
        }
    }
    @media screen and (min-width:1600px){
        width: 30vw;
        max-width: 600px;

        .skillTextIn{
            padding: 40px;
            top: 50%;
    
            .name{
                font-size: 26px;
                margin-bottom: 26px;
            }
            .text{
                font-size: 18px;
            }
        }
    }
`;