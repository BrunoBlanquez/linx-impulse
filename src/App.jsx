import './App.css'
import Compartilhar from './components/Compartilhar/Compartilhar'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Itens from './components/Itens/Itens'

function App() {

  return (
    <div>
      <Header />
      <Contato />
      <Itens />
      <Compartilhar />
      <Footer />
    </div>
  )
}

export default App