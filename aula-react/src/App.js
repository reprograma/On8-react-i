import Titulo from './Components/Titulo'
import Title from './Components/Title'
import Texto from './Components/Texto'
import UpperCase from './Components/UpperCase'
import CapsLock from './Components/CapsLock'
import Tick from './Components/Tick'
import Card from './Components/Card'
import Lista from './Components/Lista'
import OutraLista from './Components/OutraLista'


function App() {
  return (
    <div>
      <Titulo/>
      <Title text="texto que veio da props"/>     
      <Texto>Texto que veio do Children</Texto>      
      <UpperCase texto="qualquer texto"/>
      <CapsLock>um texto qualquer</CapsLock>
      <Tick/>
      <Card/>
      <Lista/>
      <OutraLista/>

    </div>   

  );
}

export default App;
