import styled from "styled-components";

export const Button = styled.button`
    border: none;
    box-shadow: ${(props) => props.bshadow === true ? '0px 2px 4px 1px lightgray' : 'none'};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    padding: 1rem;

`