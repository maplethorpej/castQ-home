import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: #ffffff;
    padding: 16px;
    font-family: "Open Sans", sans-serif;
    background-color: #E35446;
    width: 100%;
    font-size: 1.1em;
    border-radius: 2px;
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        cursor: pointer;
        background-color: #C6352E;
    }
`;
