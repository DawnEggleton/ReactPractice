import './styles/App.css'

import Nav from './components/Nav.jsx';
import MainContent from './components/MainContent.jsx';


export default function App() {
  return (<>
    <div className="app">
        <Nav />
        <MainContent />
    </div>
  </>);
}