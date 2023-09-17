import styled from 'styled-components';

import hero from '../../assets/img/hero-software.svg'

const HeroContainer = styled.section``

const HeroTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`

const HeroSubtitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
`

const Button = styled.button`
  background: #82A1FF;
  border-color: #82A1FF;
`

export default function Hero() {
  return (
    <HeroContainer className='container d-flex'>
      <div className="row align-items-center p-4 flex-fill">
        <div className="col-md col-sm-12">
          <HeroTitle className="text-secondary">Uma solução sustentável para cidades inteligentes</HeroTitle>
          <HeroSubtitle className="mb-4">Descubra como podemos ajudar sua cidade a monitorar e melhorar a qualidade do ar, da água e a sonoridade em tempo real, impulsionando o desenvolvimento de ambientes urbanos saudáveis e sustentáveis.</HeroSubtitle>
          <Button className="btn btn-primary">Solcitar demonstração</Button>
        </div>
        <div className="col-md col-sm-12 pt-2">
          <img className="img-fluid" src={hero} alt="Uma solução de software sustentável" />
        </div>
      </div>
    </HeroContainer>
  );
}