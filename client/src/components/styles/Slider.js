import styled from "styled-components";


export const Slider = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    object-fit: fill;
    width: 100%;
    height: 100%;
`