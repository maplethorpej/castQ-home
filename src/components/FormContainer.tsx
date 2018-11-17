import styled from "styled-components";

export const FormContainer = styled.form`
    margin-top: 48px;
    
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
            width: 64%;
        }
        button {
            width: 36%;
            min-width: 170px;
        }
        
        @media screen and (max-width: 620px) {
            input {
                width: 60%;
            }
            button {
                width: 40%;
            }
        }

    }
   
    input {
        color: #333333;
        padding: 16px;
        font-family: "Open Sans", sans-serif;
        font-size: .9em;
        border: 1px solid #1bad94;
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
