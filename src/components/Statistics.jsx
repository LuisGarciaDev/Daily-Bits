import React, { useEffect, useState } from 'react'
import Times from '../context/Times'
import TimeFinally from '../context/TimeFinally'
import { StyledStatistics, Results, Answer } from '../styles/StyledStatistics'
import Nav from './NavBar'

const Statistics = () => {
  const [time, setTime] = useState(1)
  const [resp, setResp] = useState({
    correctas: '',
    incorrectas: ''
  })

  const Score = () => {
    const score = window.localStorage.getItem("Score")
    const puntos = JSON.parse(score)

    const timeUser = Times() - TimeFinally()
        setTime(timeUser)

    


    const correctas = puntos
    const incorrectas = 3 - correctas

    const results = {
      correctas,
      incorrectas,
    }
    setResp(results)
  }


  useEffect(() => {
    Score()
  }, [])

  return (
    <div>
      <StyledStatistics>
        <div>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'left' }}>Estadísticas</h1>
          </div>
          <div>
            <p>Los últimos 7 días  </p>
          </div>
          <Results>
            <Answer>
              <p>Tiempo de estudio (horas)</p>
              <p>{time}</p>
            </Answer>
            <Answer>
              <p>Respuestas contestadas</p>
              <p>3</p>
            </Answer>
            <Answer>
              <p>Respuestas correctas</p>
              <p style={{ color: '#2CB67D' }} >{resp.correctas}</p>
            </Answer>
            <Answer>
              <p>Respuestas incorrectas</p>
              <p style={{ color: '#EF4565' }} >{resp.incorrectas}</p>
            </Answer>
          </Results>
        </div>
      </StyledStatistics>
      <Nav />
    </div>
  )
}

export default Statistics