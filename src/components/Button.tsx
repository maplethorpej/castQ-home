import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: #ffffff;
    padding: 8px;
    font-family: "Open Sans", sans-serif;
    background-color: #b72727;
    font-size: 1em;
    font-weight: 700;
    border-radius: 2px;
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        cursor: pointer;
        background-color: #C6352E;
    }
`;
