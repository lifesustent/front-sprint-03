import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stakeholders from './components/Stakeholders';
import Cards from './components/Cards';
import Fill from './components/Fill';
import Usecase from './components/Usecase';
import Contact from './components/Contact';

const Main = styled.main`
  min-height: 100vh;
  background-color: #f5f5f5;
`

function App() {
  return (
    <Main>
      <Header />
      <Hero />
      <Stakeholders />
      <Cards />
      <Fill />
      <Usecase />
      <Contact />
    </Main>
  );
}

export default App;
