import Header from './components/Header';
import Section from './components/Section';

export default function App() {

  return (
    <div class="container">
      <Header
        image="./world-icon.svg"
        title="My Travel Journal." />
      <Section />
    </div>
  )
}