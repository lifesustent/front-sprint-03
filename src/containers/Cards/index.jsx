import styled from 'styled-components';

import realTime from '../../assets/img/hiw-realtime.svg';
import analysis from '../../assets/img/hiw-analysis.svg';
import predict from '../../assets/img/hiw-predict.svg';
import colab from '../../assets/img/hiw-colab.svg';
import Title from '../../components/Title';

const CardsContainer = styled.section``

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
          <div class="card">
            <img src={realTime} class="card-img-top" alt="Monitoramento em tempo real" />
            <div class="card-body">
              <h5 class="card-title">Monitoramento em tempo real</h5>
              <p class="card-text">Tenha acesso a dados atualizados e precisos sobre a qualidade do ar, da água e a sonoridade em sua cidade.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img src={analysis} class="card-img-top" alt="Análises avançadas e insights" />
            <div class="card-body">
              <h5 class="card-title">Análises avançadas e insights</h5>
              <p class="card-text">Utiliza inteligência artificial para analisar grandes volumes de dados e fornecer insights valiosos.
            Identifique padrões, tendências e tome medidas proativas para melhorar a qualidade ambiental.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img src={predict} class="card-img-top" alt="Previsão e aconselhamento inteligente" />
            <div class="card-body">
              <h5 class="card-title">Previsão e aconselhamento inteligente</h5>
              <p class="card-text">Nossa plataforma é capaz de prever tendências futuras com base em dados históricos e fornecer
            aconselhamento personalizado. Obtenha sugestões práticas para promover ações preventivas e melhorar a
            sustentabilidade.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card">
            <img src={colab} class="card-img-top" alt="Colaboração e integração" />
            <div class="card-body">
              <h5 class="card-title">Colaboração e integração</h5>
              <p class="card-text">Possui solução flexível e colaborativa. Integre nossos dados com outras plataformas e aproveite nossa API
            aberta para promover a troca de informações e a cooperação entre diferentes partes interessadas.</p>
            </div>
          </div>
        </div>
      </div>
    </CardsContainer>
  )
}