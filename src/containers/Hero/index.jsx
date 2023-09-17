import styled from 'styled-components';

import hero from '../../assets/img/hero-software.svg'

const HeroContainer = styled.section``

const Button = styled.button``

export default function Hero() {
  return (
    <HeroContainer className='container d-flex'>
      <div className="row align-items-center p-4 flex-fill">
        <div className="col-md col-sm-12">
          <h1 className="text-secondary">Uma solução sustentável para cidades inteligentes</h1>
          <h2 className="mb-4">Descubra como podemos ajudar sua cidade a monitorar e melhorar a qualidade do ar, da água e a sonoridade em tempo real, impulsionando o desenvolvimento de ambientes urbanos saudáveis e sustentáveis.</h2>
          <Button className="btn btn-dark">Solcitar demonstração</Button>
        </div>
        <div className="col-md col-sm-12 pt-2">
          <img className="img-fluid" src={hero} alt="Uma solução de software sustentável" />
        </div>
      </div>
    </HeroContainer>
  );
}