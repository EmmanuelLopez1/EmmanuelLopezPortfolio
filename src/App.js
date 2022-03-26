import {Mobile_menu} from './components/Mobile_menu'

import image from './assets/icons/hamburger_menu.svg'

function App() {
  return (
    <div className="App">
      <Mobile_menu img={image} menuList={['Home', 'About me', 'My work', 'Experience', 'Education']}/>
    </div>
  );
}

export default App;
