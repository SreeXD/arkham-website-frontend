import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 4px;
    padding: 60px 0 8px 7px;
    width: 100%;
    align-items: center;
    font-family: 'whyte regular';
    font-size: calc(6px + 0.5vw);;
    color: rgb(230, 230, 230);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    opacity: 0;
    transition: 200ms;
    border-radius: 0 0 5px 5px;

    img {
        width: calc(14px + 1vw);
        height: calc(14px + 1vw);
        border-radius: 100%;   
        margin-right: calc(3px + 0.2vw);;
        opacity: 1;
    }
`;

export const ImageContainer = styled.div`
    display: inline-block;
    margin: 5px;
    position: relative;
    overflow: hidden;

    &:hover {
        ${UserContainer} {
            opacity: 1;
        }
    }

    .image {
        background-color: #f0f0f0; 
        border-radius: 5px;
    }
`;

export const Gallery = styled.div`

`;

export const Display = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.8);
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'whyte regular';
        font-size: calc(12px + 0.5vw);
        color: rgb(230, 230, 230);
        margin-left: calc(4px + 0.3vw);
    }

    #display__close {
        margin-left: auto;
        background-color: white;
        border-radius: 100%;
        width: calc(14px + 1.4vw);
        height: calc(14px + 1.4vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        right: 15px;
        top: 5px;

        span {
            display: block;
            width: calc(8px + 0.5vw);
            height: calc(1px + 0.1vw);
            background-color: black;
            position: absolute;

            &:nth-child(1) {
                transform: rotate(45deg);
            }

            &:nth-child(2) {
                transform: rotate(-45deg);
            }
        }

        &:hover {
            cursor: pointer;
            background-color: rgb(240, 240, 240);
        }
    }

    #display__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 13px;
        border-radius: 10px;
        background-color: rgb(16, 16, 16);
    }
    
    #display__hr {
        display: block;
        width: 100%;
        height: 4px;
        border-radius: 10px;
        margin-bottom: 9px;
        background-color: rgb(19, 19, 19);
    }

    #display__user {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        width: 100%;
    }

    #display__user-image {
        border-radius: 100%;
        width: calc(15px + 2vw);
        height: calc(15px + 2vw);
        margin-left: 15px;
    }

    #display__image {
        width: 90vw;
        height: auto;
        max-height: 65vh;
        object-fit: contain;
    }

    #display__slide {
        width: 100%;
        padding: 10px;
        background-color: rgba(25, 25, 25);

        img {
            height: 13vh;
            width: auto;
            margin: 10px;
            opacity: 0.3;

            &.active {
                opacity: 1;
            }
        }

        @media (max-width: 1100px) {
            img {
                height: 10vh;
            }
        }

        @media (max-width: 500px) {
            img {
                height: 7vh;
            }
        }
    }

    #display__slide-inner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        width: 90vw;
    }

    #display__image-container {
        position: relative;
    }

    #display__control-left, #display__control-right {
        position: absolute;
        top: calc(50% - (25px + 4.5vw) / 2);
        width: calc(20px + 4.5vw);
        height: calc(20px + 4.5vw);
        border-radius: 100%;
        background: none;
        outline: none;
        border: none;

        img {
            width: calc(20px + 5vw);
            height: calc(20px + 5vw);
        }
    }

    #display__control-left {
        left: 0;
        cursor: pointer;
    }

    #display__control-right {
        right: 0;
        cursor: pointer;
    }
`;