import styled from 'styled-components';

import './App.css';
import Header from './containers/Header';
import Hero from './containers/Hero';
import Stakeholders from './containers/Stakeholders';
import Cards from './containers/Cards';
import Fill from './containers/Fill';
import Usecase from './containers/Usecase';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

const Main = styled.main`
  min-height: 100vh;
  background-color: #f5f5f5;
`

function App() {
  return (
    <Main>
      <Header />

      {/* PAGES */}
      <Hero />
      <Stakeholders />
      <Cards />
      <Fill />
      <Usecase />
      <Contact />

      <Footer />
    </Main>
  );
}

export default App;
