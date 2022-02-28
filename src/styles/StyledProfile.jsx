import styled from 'styled-components'

export const StyledQuestion = styled.div`
    background-color: #16161A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    width: 100%;
    height: 85vh;
    font-family: Inter, sans-serif;
`

export const Title = styled.h1`
    color: white;
    margin-left: 10px;
    font-size: 22px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
`

export const LogoutBtn = styled.input`
    color: red;
    background-color: unset;
    width: fit-content;
    margin: auto;
    border: none;

    &:hover{
        cursor: pointer;
    }
`

export const User = styled.h3`
    color:white;
    margin-top: 20px !important;
    margin-block-start: unset;
    margin-block-end: unset;
`

export const Email = styled.p`
    color:white;
    margin-block-start: unset;
    margin-block-end: unset;
    font-size: small;
`

export const Image = styled.img`
    
    display: flex;
    flex-direction: column;
    align-items: center;
`