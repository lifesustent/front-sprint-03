import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const Main = styled.main`
  min-height: 100vh;
  background-color: #f5f5f5;
`

function App() {
  return (
    <Main>
      <Header />

      <Hero />
    </Main>
  );
}

export default App;
