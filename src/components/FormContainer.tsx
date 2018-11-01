import styled from "styled-components";

export const FormContainer = styled.form`
    margin-top: 32px;
    
    label {
        color: #333333;
        font-size: .95em;
        font-weight: 700;
        display: block;
        margin-bottom: 8px;
    }
    
    .input-container {
        display: flex;
        input {
            width: 80%;
        }
        button {
            width: 20%;
        }
    }
   
    input {
        color: #333333;
        padding: 8px;
        font-family: "Open Sans", sans-serif;
        font-size: .9em;
        border: 1px solid #d1d1d1;
        border-radius: 3px 0 0 3px;
        border-right: none;
        
        &:focus {
            outline: none;
        }
    }
    
    input.error {
        border-bottom-color: red;
    }
    
    .submitted {
        font-size: 1.1em;
        font-weight: 400;
        color: #666;
    }
`;
