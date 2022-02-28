import React, { Component } from 'react'
import { NavStyled, NavLink } from '../styles/StyledNav'
import { FiHome } from 'react-icons/fi'
import { FiActivity } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'


export default class Nav extends Component {
    render() {
        return (
            <NavStyled>
                <NavLink to="/home"> <FiHome style={{ fontSize: '22px' }} />  Home</NavLink>
                <NavLink to="/statistics"> <FiActivity style={{ fontSize: '22px' }} /> Estadísticas</NavLink>
                <NavLink to="/profile"> <FiUsers style={{ fontSize: '22px' }} /> Perfil</NavLink>
            </NavStyled>
        )
    }
}