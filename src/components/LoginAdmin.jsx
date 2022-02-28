/* import React from 'react'
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


const LoginAdmin = () => {

return (
    <DivAuth>
        <Header>
            <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645736180/IconosLenguajes/Color_Purple_Container_Yes_etzmj8.png" alt="Logo" />
            <h1>Iniciar sesión Administrador</h1>
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
                        value={email}
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Ingrese su correo electrónico"
                    />
                </Label>

                <Label htmlFor="inputPassword">
                    Contraseña
                    <Inpu
                        value={contraseña}
                        type="password"
                        name="contraseña"
                        id="inputPassword"
                        placeholder="Ingrese su contraseña"
                    />
                </Label>

                <InputSubmit type="submit" value="Inicias sesión" />
            </Form>
        </DivForm>

        <DivLink>
            <Link to="/login" style={{ color: "green" }}>
                ¿Olvidaste tu contraseña?
            </Link>
            <br />
            <br />
            <p>
                ¿No tienes una cuenta?{" "}
                <Link to="/register" style={{ color: "green" }}>
                    Registrate
                </Link>
            </p>
        </DivLink>
    </DivAuth>
)
}

export default LoginAdmin */