import styled from "styled-components";

export const ButtonContainer = styled.button `
    max-width: 100%;
    width: 100%;
    padding: .8rem 1rem;
    margin: 1rem 0;
    border: none;
    border-radius: .3rem;

    font-size: 1.2rem;
    color: #87CEEB;
    background: #4682B4;  
    transition: background-color 0.2s ease-out 0s;

    &:hover {
        background-color: #4169E1;
        color: #FFFFFF;
        cursor: pointer;
    }

`