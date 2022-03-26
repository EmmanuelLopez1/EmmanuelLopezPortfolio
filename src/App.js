import './App.css';
import {Mobile_menu} from './components/Mobile_menu'

import image from './assets/icons/hamburger_menu.svg'

function App() {
  return (
    <div className="App">
      <Mobile_menu img={image}/>
    </div>
  );
}

export default App;
