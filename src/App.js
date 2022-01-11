import { useState } from 'react';
import Header from './components/header/Header.jsx';
import './App.css';
import Builder from './components/builder/Builder';
import Character from './components/character/Character';
import Display from './components/display/Display.jsx';

function App() {
  const [top, setTop] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = ({ target }) => {
    const { name, value } = target;
  switch(name) {
    case 'head':
      setTop(value);
      break;
    case 'torso':
      setMiddle(value)
      break;
    case 'legs':
      setBottom(value)
      break;
    case 'catchphrases':
      setCatchphrases(value)
      break;
      default:
        return 'please select a character!'
  }
  };
  

  const handleCatchphrase = (e) => {
    e.preventDefault();
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <Builder 
          top={top} 
          middle={middle}   
          bottom={bottom}
          newCatchphrase={newCatchphrase} 
          setCatchphrase={setNewCatchphrase} 
          handleClick={handleClick}
          // handleSubmit={handleSubmit}
          handleCatchphrase={handleCatchphrase}
          />

          <Display catchphrases={catchphrases} />
 
          <Character
          top={top}
          middle={middle}
          bottom={bottom}/>
        </header>
      </div>
    </>
  );
}

export default App;
