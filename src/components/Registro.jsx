import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import {
    DivAuth,
    Header,
    InputSubmit,
    Logo,
    Form,
    Label,
    DivLink,
    Input,
    DivForm
} from '../styles/StyledRegister'
const users = 'https://datajsonserver.herokuapp.com/users/'


const Registro = () => {

    const navigate = useNavigate()

    const [register, setRegister] = useState({
        id: '',
        nombre: '',
        email: '',
        contraseña: ''
    })
    const { nombre, email, contraseña } = register

    const handleChange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const postData = async () => {
        axios.post(users, register)
            .then(response => navigate('/'))
            .catch(error => console.log(error))
        window.localStorage.setItem("UsuarioRegister", JSON.stringify(register))
    }

    return (
        <div>
            <DivAuth>
                <Header>
                    <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645736180/IconosLenguajes/Color_Purple_Container_Yes_etzmj8.png" alt="Logo" />
                    <h1>Registrate</h1>
                </Header>
                <DivForm>
                    <Form action="" onSubmit={handleSubmit}>
                        <Label htmlFor="nombre">
                            Nombre
                            <Input
                                value={nombre}
                                onChange={handleChange}
                                type="text"
                                name="nombre"
                                id="name"
                                placeholder="Ingresa tu nombre" />
                        </Label>

                        <Label htmlFor="inputEmail">
                            Correo electrónico
                            <Input
                                value={email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                id="inputEmail"
                                placeholder="Ingrese su correo electrónico" />
                        </Label>

                        <Label htmlFor="inputPassword">
                            Contraseña
                            <Input
                                value={contraseña}
                                onChange={handleChange}
                                type="password"
                                name="contraseña"
                                id="inputPassword"
                                placeholder="Ingresa una contraseña" />
                        </Label>
                        <InputSubmit type="submit" value="Registrarme" onClick={() => postData()} />
                    </Form>
                </DivForm>
                <DivLink>
                    <p>¿Ya tienes una cuenta? <Link style={{ color: "#26b67d" }} to="/">Inicia sesión</Link></p>
                </DivLink>
            </DivAuth> </div>
    )
}

export default Registro