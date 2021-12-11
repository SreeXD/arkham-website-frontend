import styled from 'styled-components';

export const HomeWrapper = styled.div`

`;

export const Intro = styled.video`
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-top: 20px;
`;

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SectionVideo = styled.video`
    width: 300px;
    height: auto;
    position: fixed;
    opacity: 0;
    height: auto;
    
    @media (max-width: 900px) {
        right: calc(20px + 8vw);
    }

    @media (max-width: 700px) {
        opacity: 1;
        position: static;
    }
`;

export const SectionTitle = styled.h2`
    font-family: 'whyte bold';
    font-size: calc(24px + 1.2vw);
    color: var(--dark);
    margin-bottom: 40px;
`;

export const SectionText = styled.p`
    font-family: 'whyte regular';
    font-size: calc(14px + 0.6vw);
    color: var(--grey3);
    margin: 30px 0;
    line-height: 27px;
`;

export const SectionContent = styled.div`
    margin: calc(24px + 5vw);
    width: calc(220px + 15vw);
    z-index: 2;
    
    @media (max-width: 700px) {
        margin: calc(24px + 1vw);
        width: auto;
    }
`;

export const Section = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    height: 100vh;    

    @media (max-width: 700px) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        margin: 50px 10px;
        margin-bottom: 80px;
        height: auto;
    }

    &:nth-of-type(2) {
        ${SectionVideo} {
            top: 7vh;
            right: calc(10px + 10vw);
            width: calc(100px + 20vw);
        }

        @media (max-width: 700px) {
            ${SectionVideo} {
                width: calc(120px + 32vw);
                margin-top: calc(40px + 1vw);
            }
        }
    }

    &:nth-of-type(3) {
        ${SectionVideo} {
            top: 15vh;
            right: calc(12px + 8vw);
            width: calc(100px + 25vw);
        }

        @media (max-width: 700px) {
            ${SectionVideo} {
                width: calc(120px + 35vw);
                margin-top: calc(25px + 0.8vw);
                margin-left: 15px;
            }
        }
    }

    &:nth-of-type(4) {
        ${SectionVideo} {
            top: 5vh;
            right: calc(12px + 8vw);
            width: calc(100px + 22vw);
        }

        @media (max-width: 700px) {
            ${SectionVideo} {
                width: calc(170px + 30vw);
                margin-left: 10px;
            }
        }
    }
`;

export const Indicator = styled.span`
    display: block;
    width: calc(20px + 1.5vw);
    height: calc(20px + 1.5vw);
    border-radius: 100%;
    margin: 12px;
    background-color: #E2E2E2;
    transition: background-color 300ms;

    @media (max-width: 700px) {
        margin: 1.5vw;
    }

    &.on {
        &:nth-child(1) {
            background-color: #4881db;
        }

        &:nth-child(2) {
            background-color: #9057EE;
        }

        &:nth-child(3) {
            background-color: #f2338f;
        }
    }
`;

export const Indicators = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;    
    position: sticky;
    margin-right: 10px;
    top: 40%;

    @media (max-width: 700px) {
        flex-direction: row;
        justify-content: end;
        width: 100%;
        top: 10px;
        margin: 0;
    }
`;

export const Sections = styled.div`
    display: block;
    position: relative;
    margin-bottom: 50vh;
    
    @media (max-width: 700px) {
        margin-bottom: 0;
    }
`;

export const Text1 = styled.p`
    font-family: 'whyte regular';
    font-size: calc(11px + 0.5vw);
    color: var(--grey3);
    margin: 40px 0 30px 0;
`;

export const ButtonGroup1 = styled.div`

`;

export const ButtonBase = styled.button`
    font-family: 'whyte regular';
    font-size: calc(10px + 0.5vw);
    border: 2px solid ${props => props.color};
    color: ${props => props.color};
    border-radius: calc(35px + 5vw);
    outline: none;
    background: none;
    transition: color 300ms, background-color 300ms;

    &:hover {
        background-color: ${props => props.color};
        color: white;
    }
`

export const Button1 = styled(ButtonBase)`
    margin-right: calc(20px + 1vw);
    padding: calc(8px + 0.35vw) calc(25px + 1vw);
`;

export const Button2 = styled(ButtonBase)`
    margin-top: 15px;
    padding: calc(10px + 0.35vw) calc(35px + 1vw);
`;

export const Text2 = styled.p`
    font-family: 'whyte regular';
    font-size: calc(14px + 0.6vw);
    margin: 30px 0;
    line-height: 27px;
    color: var(--grey3);
`

export const Top = styled.a`
    color: #f2338f;
    text-decoration: none;
`;

export const JoinSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to right,#0d0d0d,#000000);
    
    h1 {
        margin-top: calc(40px + 2vw);
        font-size: calc(24px + 0.8vw);
        font-family: 'whyte bold';
        color: white;
    }
    
    p {
        font-size: calc(14px + 0.45vw);
        line-height: 28px;
        text-align: center;
        font-family: 'whyte regular';
        margin-top: 30px;
        color: white;
        width: 700px;

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    overflow: hidden;
`;