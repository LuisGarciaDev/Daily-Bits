import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
//import { questionGeek } from '../helpers/Questionario';
import { StyledQuestion, StyledBar, FormStyle, ButtonStyle, Answer, Results } from '../styles/CardQuestion'
import { Link } from 'react-router-dom';
import { Image, ProgressBar } from 'react-bootstrap'
import TimeFinally from '../context/TimeFinally';
export default class Question extends Component {
    constructor() {
        super();
        this.state = {
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct: ""
            },
            score: 0,
            answerSelect: ""
        }
    }

    componentDidMount() {
        const questionGeek = 'https://proyecto-sprint2.herokuapp.com/question'
        const currentQuizData = questionGeek[this.state.numberQuestion]
        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                d: currentQuizData.d,
                correct: currentQuizData.correct,
                img: currentQuizData.img
            }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                
                score: this.state.score + 1,
                
            })
            this.setState({ 
                porcent: + 33
             })
        }
        if (this.state.numberQuestion < questionGeek.length) {
            this.componentDidMount()
        } else {
            window.localStorage.setItem("Score", JSON.stringify(this.state.score))
            TimeFinally()
            console.log('Terminó');
            window.location = '/statistics';
        }
    }

    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        return (
            <StyledQuestion>
                <StyledBar>
                    <Link className="px-3" to='/home'>
                        <Image src='https://res.cloudinary.com/dvcxyjkko/image/upload/v1645143467/proyecto-sprint2/Property_1_x_efkp2f.svg' />
                    </Link>
                    <div style={{ width: '250px' }}>
                        <ProgressBar variant="success" now={this.state.porcent} label={`${this.state.porcent}%`} visuallyHidden style={{ height: '12px', borderRadius: '10px' }} />
                    </div>
                    <div className="px-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='https://res.cloudinary.com/dvcxyjkko/image/upload/v1645143549/proyecto-sprint2/Property_1_heart_aas4ox.svg' />
                        <h5 className="px-2">{this.state.score}</h5>
                    </div>
                </StyledBar>
                <div >
                    <Answer>
                        <Image src={this.state.question.img} width="150" height="200" />
                        <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '20px', lineHeight: '35px' }}>{this.state.question.question}</h2>
                    </Answer>
                    <FormStyle onSubmit={this.handleSubmit}>
                        <Form.Group className='mb-3' controlId='control_radio'>
                            <Results>
                                <label for="Respuesta1">{this.state.question.a}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.question.a}
                                    name={"Respuestas"}
                                    id={"Respuesta1"}
                                    onChange={this.onChanged}
                                />
                            </Results>
                            <Results>
                                <label for="Respuesta2">{this.state.question.b}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.question.b}
                                    name={"Respuestas"}
                                    id={"Respuesta2"}
                                    onChange={this.onChanged}
                                />
                            </Results>
                            <Results>
                                <label for="Respuesta3">{this.state.question.c}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.c}
                                    name={"Respuestas"}
                                    id={"Respuesta3"}
                                    onChange={this.onChanged}
                                />
                            </Results>

                        </Form.Group>
                        <ButtonStyle variant="primary" type="submit" onClick={() => this.setState({ numberQuestion: this.state.numberQuestion + 1 })} >
                            COMPROBAR
                        </ButtonStyle>
                        <div>
                        </div>
                    </FormStyle>
                </div>
            </StyledQuestion >
        )
    }
}
