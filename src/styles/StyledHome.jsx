import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Content = styled.div`
    background-color: #16161A;
`

export const TextHeader = styled.p`
    color: white;
    text-align: center;
    padding: 5px 20px;
`

export const ContainerCategories = styled.div`
    display: flex;
    justify-content: center;
    background-color: #16161A;
`

export const LogoImg = styled.img`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 95px;
    padding: 5px;
  `

export const Categories = styled(Link)`
    color: white;
    text-decoration: none !important;
    margin: 0 10px;
    text-align: center;
`