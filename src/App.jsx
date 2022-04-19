
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import { ItenListContainer } from './componentes/ItenListContainer'
import { Main } from './componentes/Main'
import './styles.scss'

const App = ()  => {

  const edad = 30
 const link = ['link1', 'link2']

  return ( 
    <>
      <Header/>
      <ItenListContainer greeting='Hola soy GREETING'/>
      <Main/>
      <Footer  edad = {edad}/>
    </>
  )
}

export default App

//  bloque_elemento_modificador     => bend

