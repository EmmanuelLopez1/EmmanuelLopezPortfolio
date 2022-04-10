import image from './assets/icons/hamburger_menu.svg'
import './css/_global.scss'

// COMPONENTS
import {Layout} from './containers/Layout.jsx'
import {SelectLanguage} from './components/SelectLanguage'

function App() {
  return (
    <div className="App">
      <Layout>
        <SelectLanguage/>
      </Layout>
    </div>
  );
}

export default App;
