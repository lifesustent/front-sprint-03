import styled from 'styled-components';

import Title from '../Title';
import { cards } from './constants';

const CardsContainer = styled.section``

const Card = styled.div`
  height: 400px;
  padding: 60px 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px #82A1FF, 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1 1;
`

const CardImage = styled.img`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #141829;
`

const CardText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`

export default function Cards() {
  return (
    <CardsContainer className="container">
      <Title
        title="Como funciona?"
        subtitle="Combinando hardware inovador e software avançado, a LifeSustent oferece uma abordagem holística para o
          monitoramento ambiental. Nosso sistema integrado é projetado para fornecer informações precisas e acionáveis que
          ajudam as autoridades municipais, organizações e cidadãos a tomar decisões informadas e promover uma mudança
          positiva."
      />

      <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
        {
          cards.map((card, i) => (
            <div key={i} className="col">
              <Card className="card">
                <CardImage src={card.img.src} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <CardTitle className="card-title">{card.title}</CardTitle>
                  <CardText className="card-text">{card.text}</CardText>
                </div>
              </Card>
            </div>
          ))
        }
      </div>
    </CardsContainer>
  )
}