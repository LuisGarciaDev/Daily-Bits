import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  DivAuth,
  Header,
  Logo,
  Form,
  Label,
  DivLink,
  Input,
  Separator,
  InputSubmit,
  ButtonGoogle,
  DivForm
} from '../styles/StyledLogin'
import axios from "axios"
import Times from '../context/Times'
const users = 'https://datajsonserver.herokuapp.com/users/'


const Login = () => {


  const navigate = useNavigate()

  const [login, setLogin] = useState([])

  const [verify, setVerify] = useState({
      email: '',
      contraseña: ''
  })
  const { email, contraseña } = verify

  const handleChange = ({ target }) => {
      setVerify({
          ...verify,
          [target.name]: target.value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  const Data = () => {
      axios.get(users)
          .then((response) => {
              setLogin(response.data)
          }).catch(error => {
              alert(error);
          })
  }

  const filter = () => {
      login.filter(user => {
          const userVerify = user.email.includes(verify.email)
          const passVerify = user.contraseña.includes(verify.contraseña)
          if (userVerify) {
              if (passVerify) {
                  Times()
                  window.localStorage.setItem("Usuario", JSON.stringify(login))
                  console.log('funciona');
                  navigate('/home')
                } else {
                  alert('contraseña incorrecta o Registrese para luego Loguearse')
              }
            }
          return (user)
            
      })
  }

  useEffect(() => {
      Data()
  }, [])

  return (
    <DivAuth>
      <Header>
        <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645736180/IconosLenguajes/Color_Purple_Container_Yes_etzmj8.png" alt="Logo" />
        <h1>Iniciar sesión</h1>
      </Header>


      <DivForm>
        <ButtonGoogle>
          <img src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645735605/IconosLenguajes/Buttons_tftqmo.png" alt="google" />
          Continuar con Google</ButtonGoogle>
        <Separator />

        <Form action="" onSubmit={handleSubmit}>

          <Label htmlFor="inputEmail">
            Correo electrónico
            <Input
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              id="inputEmail"
              placeholder="Ingrese su correo electrónico"
            />
          </Label>

          <Label htmlFor="inputPassword">
            Contraseña
            <Input
              onChange={handleChange}
              value={contraseña}
              type="password"
              name="contraseña"
              id="inputPassword"
              placeholder="Ingrese su contraseña"
            />
          </Label>

          <InputSubmit type="submit" value="Inicias sesión" onClick={() => filter()} />
        </Form>
      </DivForm>

      <DivLink>
        <Link to="/login" style={{ color:"green"}}>
          ¿Olvidaste tu contraseña?
        </Link>
        <br />
        <br />
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/register" style={{ color:"green"}}>
            Registrate
          </Link>
        </p>
      </DivLink>
    </DivAuth>
  )
}

export default Login