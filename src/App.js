import image from './assets/icons/hamburger_menu.svg'
import './css/_global.scss'

// COMPONENTS
import {Layout} from './containers/Layout.jsx'
import {Home} from './pages/Home'

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
