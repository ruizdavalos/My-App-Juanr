import { Container } from "./Container"


export const Main = ({ children, nombre}) => {
    return(
        <main>
            main, Hola {nombre}<br></br>
            {children }
            <Container/>
        </main>
    )
}
