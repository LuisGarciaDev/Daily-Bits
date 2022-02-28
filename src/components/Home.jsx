import React from 'react'
import {
    TextHeader,
    ContainerCategories,
    LogoImg,
    Categories,
    Content
} from "../styles/StyledHome"
import Nav from './NavBar'



const Home = () => {
    return (
        <div>
        <Content>
            <TextHeader>
                Practica tus conocimientos en la categoria que prefieras.
            </TextHeader>
            <ContainerCategories>
                <Categories id="html" to="">
                    <div percentage="0">
                        <LogoImg
                            id="html-image"
                            src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645212320/IconosLenguajes/html_egmvey.png"
                            alt="html"
                        />
                    </div>
                    <p>HTML</p>
                </Categories>
            </ContainerCategories>
            <ContainerCategories>
                <Categories id="css" to="">
                    <div percentage="0">
                        <LogoImg id="css-image" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645212319/IconosLenguajes/css_gqz3lm.png" alt="css" />
                    </div>
                    <p>CSS</p>
                </Categories>
                <Categories id="js" to="/question/">
                    <div percentage="0">
                        <LogoImg id="js-image" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645212323/IconosLenguajes/js_md9d8i.png" alt="js" />
                    </div>
                    <p>JS</p>
                </Categories>
            </ContainerCategories>
            <ContainerCategories>
                <Categories id="figma" to="">
                    <div percentage="0">
                        <LogoImg
                            id="figma-image"
                            src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645212319/IconosLenguajes/figma_l07hhn.png"
                            alt="figma"
                        />
                        <p>FIGMA</p>
                    </div>
                </Categories>
                <Categories id="ux" to="/home">
                    <div percentage="0">
                        <LogoImg id="ux-image" src="https://res.cloudinary.com/dmdu8u7wo/image/upload/v1645212322/IconosLenguajes/ux_yrenir.png" alt="ux" />
                        <p>UX</p>
                    </div>
                </Categories>
            </ContainerCategories>
        </Content>
        <Nav />
        </div>
    )
}


export default Home;
