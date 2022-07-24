import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: ${(props) => props.bgColor};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    padding: 1rem 0;

`