import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/NavBar'
import {
  Email,
  User,
  ContainerInfo,
  Title,
  LogoutBtn,
  StyledQuestion
} from "../styles/StyledProfile"


const Profile = () => {

  const navigate = useNavigate()
  const [profileUser, setProfileUser] = useState([])

  const Data = () => {
    const data = window.localStorage.getItem("UsuarioRegister")
    const obj = JSON.parse(data)

    if (obj !== null) {
      setProfileUser([obj])
    }
    
    else {
      alert('registrate para continuar')
      navigate('/register')

    }
  }
  useEffect(() => {
    Data()
  }, [])

  const handleClick = () => {
    localStorage.clear()
  };
  return (
    <div>
    <StyledQuestion>
      <main style={{ backgroundColor: '#16161A' }}>
        <Title>Perfil</Title>
        {
          profileUser.map((u, index) => (
            <ContainerInfo>
              <Image src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645996612/Ellipse_3_vwdkl7.png" alt="Usuario"  width="150" height="150" style={{ borderRadius: '50%' }} />
              <User>
                {u.nombre}
              </User>
              <Email>{u.email}</Email>
              <br />
              <LogoutBtn
                type="button"
                onClick={handleClick}
                value="Cerrar sesión"
              />

            </ContainerInfo>
          ))
        }
      </main>
      
      </StyledQuestion>
      <Nav />
      
      </div>
    
  )
}

export default Profile