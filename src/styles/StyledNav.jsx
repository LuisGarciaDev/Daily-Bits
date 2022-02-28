import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavStyled = styled.nav`
    background-color:#232E35;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 14px;
    position:fixed;
`
export const NavLink = styled(Link)`
    text-decoration: none;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover{
        color: #2CB67D;
    }
`