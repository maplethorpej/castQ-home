import styled from "styled-components";

export const FormContainer = styled.form`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 24px;
    max-width: 100%;
    
    label div {
        color: #757575;
        font-size: .8em;
        font-weight: 400;
        font-family: "Open Sans", sans-serif;
        margin-top: 8px;
    }
    
    label span {
        color: red;
        font-size: .95em;
    }
    
    input, textarea {
        border: none;
        width: 100%;
        color: #333333;
        padding: 8px 0;
        font-family: "Open Sans", sans-serif;
        font-size: .9em;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 16px;
        
        &:focus {
            outline: none;
            border-bottom-color: #999999;
        }
    }
    
    input.error {
        border-bottom-color: red;
    }
    
    textarea {
        width: 100%;
        resize: vertical;
        min-height: 40px;
    }
    
    .submitted {
        font-size: 1.1em;
        font-weight: 400;
        color: #666;
    }
`;
