import styled from 'styled-components'
import { Form } from 'react-bootstrap';

export const StyledQuestion = styled.div`
    background-color: #16161A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    width: 100%;
    height: 100vh;
    font-family: Inter, sans-serif;
`

export const StyledBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
`

export const Answer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 375px;
`


export const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
`


export const Results = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    border: 2px solid #FFFFFE;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 20px;
    padding: 12px;
`


export const ButtonStyle = styled.button`
    background-color: #D4CAF3;
    border: 1px solid #D4CAF3;
    border-radius: 16px;
    font-size: 14px;
    letter-spacing: 0.0125em;
    text-align: center;
    margin: 0px 20px;
    padding: 15px 0px;
    box-shadow: 0px 3px 0px #AB90FF ;
    color: #FFFFFE;
    
    &:hover{
        background-color: #6B47DC;
        border: 1px solid #6B47DC;
    }
`