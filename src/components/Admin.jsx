import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap'
import { StyledAdmin, DivTable, Header, Logo } from '../styles/StyledAdmin'
const users = 'https://datajsonserver.herokuapp.com/users/'


const Admin = () => {

    const [admin, setAdmin] = useState([])

    const getData = () => {
        axios.get(users)
            .then((response) => {
                setAdmin(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }
    const score = window.localStorage.getItem("Score")
    const puntos = JSON.parse(score)

    useEffect(() => {
        getData()
    }, [])
    return (
        <StyledAdmin style={{ height: '100vh' }}>
            <div>
                
                <Header>
        <Logo src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645736180/IconosLenguajes/Color_Purple_Container_Yes_etzmj8.png" alt="Logo" />
      </Header>
      <div>
                    <h1 style={{ textAlign: 'center' }}>Usuarios</h1>
                </div>
                <DivTable>
                    <Table striped bordered hover style={{ color: 'white', marginTop: '100px' }}>
                        <thead className="p-20">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        {
                            admin.map(a => (
                                <tbody key={a.id} className="p-20">
                                    <tr>
                                        <td style={{ color: 'white' }}>{a.id}</td>
                                        <td style={{ color: 'white' }}>{a.nombre}</td>
                                        <td style={{ color: 'white' }}>{a.email}</td>
                                        <td style={{ color: 'white' }}>{puntos}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </Table >
                    <a style={{ border: '2px solid blue', padding: '10px 20px', background: 'blue', textDecoration: 'none', color: 'white', borderRadius: '10px', marginTop: '50px' }} href="/home">Regresar</a>
                </DivTable>
            </div>
        </StyledAdmin>
    )
}

export default Admin