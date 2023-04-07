import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%;
    height: 4rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #6495ED;

    display: flex;
    flex-direction: column;
    align-items: left;
`

export const Label = styled.label `
    font-size: 1.2rem;
    color: #6495ED;
    margin-bottom: .5rem;
`

export const InputText = styled.input `
    width: 100%;
    height: 2rem;
    padding: 0 .5rem;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: transparent;
    border: 0;

    &::placeholder {
        color: #87CEEB;
        padding: 0;
    }
`

export const ErrorText = styled.p `
    color: #FF0000;
    font-size: .8rem;
    margin: 5px 0;
`