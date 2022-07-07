import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name='Renato'

  // function sum(){}

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <SayMyName nome="Heisenberg"/>
      <Pessoa nome="Renato" idade="19" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
