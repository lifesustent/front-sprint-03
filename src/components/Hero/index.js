import styled from 'styled-components';

const HeroContainer = styled.section``

export default function Hero() {
  return (
    <HeroContainer className='hero container d-flex bg-pattern'>
      <div className="row align-items-center p-4 flex-fill">
        <div className="col-md col-sm-12">
          <h1 className="text-secondary">Nova coleção 2023</h1>
          <h2 className="mb-4">20% OFF para a nova coleção</h2>
          <a href="#" className="btn btn-dark">Conheça a coleção</a>
        </div>
        <div className="col-md col-sm-12 pt-2">
          <img className="img-fluid" src="assets/images/produto-hero.jpg" alt="Fancy clock" />
        </div>
      </div>
    </HeroContainer>
  );
}