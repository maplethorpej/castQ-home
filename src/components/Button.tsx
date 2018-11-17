import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: #ffffff;
    padding: 8px;
    font-family: "Open Sans", sans-serif;
    background-color: #1bad94;
    font-size: 1em;
    font-weight: 700;
    border-radius: 0 3px 3px 0;
    border-left: 2px solid rgba(255,255,255, 0.18);
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        cursor: pointer;
        background-color: #1b987f;
    }
`;
