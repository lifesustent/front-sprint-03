import styled from 'styled-components';

import realTime from '../../assets/img/hiw-realtime.svg';
import analysis from '../../assets/img/hiw-analysis.svg';
import predict from '../../assets/img/hiw-predict.svg';
import colab from '../../assets/img/hiw-colab.svg';
import Title from '../../components/Title';

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

      <div className="row">
        <div className="col">
          <Card className="card">
            <CardImage src={realTime} className="card-img-top" alt="Monitoramento em tempo real" />
            <div className="card-body">
              <CardTitle className="card-title">Monitoramento em tempo real</CardTitle>
              <CardText className="card-text">Tenha acesso a dados atualizados e precisos sobre a qualidade do ar, da água e a sonoridade em sua cidade.</CardText>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card className="card">
            <CardImage src={analysis} className="card-img-top" alt="Análises avançadas e insights" />
            <div className="card-body">
              <CardTitle className="card-title">Análises avançadas e insights</CardTitle>
              <CardText className="card-text">Utiliza inteligência artificial para analisar grandes volumes de dados e fornecer insights valiosos.
            Identifique padrões, tendências e tome medidas proativas para melhorar a qualidade ambiental.</CardText>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card className="card">
            <CardImage src={predict} className="card-img-top" alt="Previsão e aconselhamento inteligente" />
            <div className="card-body">
              <CardTitle className="card-title">Previsão e aconselhamento inteligente</CardTitle>
              <CardText className="card-text">Nossa plataforma é capaz de prever tendências futuras com base em dados históricos e fornecer
            aconselhamento personalizado. Obtenha sugestões práticas para promover ações preventivas e melhorar a
            sustentabilidade.</CardText>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card className="card">
            <CardImage src={colab} className="card-img-top" alt="Colaboração e integração" />
            <div className="card-body">
              <CardTitle className="card-title">Colaboração e integração</CardTitle>
              <CardText className="card-text">Possui solução flexível e colaborativa. Integre nossos dados com outras plataformas e aproveite nossa API
            aberta para promover a troca de informações e a cooperação entre diferentes partes interessadas.</CardText>
            </div>
          </Card>
        </div>
      </div>
    </CardsContainer>
  )
}