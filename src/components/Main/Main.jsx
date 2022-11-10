import Button from '../Button/Button'
import './Main.css'

const Main = ({text}) => {
  return (
    <div className='main'>
      <h1>{text}</h1>
      <div>
        <Button variante="cancelar" text="Cancelar"></Button>
        <Button variante="confirmar" text="Confirmar"></Button>
      </div>
    </div>
  )
}

export default Main