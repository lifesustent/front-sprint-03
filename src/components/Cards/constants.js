import realTime from '../../assets/img/hiw-realtime.svg';
import analysis from '../../assets/img/hiw-analysis.svg';
import predict from '../../assets/img/hiw-predict.svg';
import colab from '../../assets/img/hiw-colab.svg';

export const cards = [
  {
    title: 'Monitoramento em tempo real',
    text: 'Tenha acesso a dados atualizados e precisos sobre a qualidade do ar, da água e a sonoridade em sua cidade.',
    img: {
      src: realTime,
    }
  },
  {
    title: 'Análises avançadas e insights',
    text: 'Utiliza inteligência artificial para analisar grandes volumes de dados e fornecer insights valiosos. Identifique padrões, tendências e tome medidas proativas para melhorar a qualidade ambiental.',
    img: {
      src: analysis,
    }
  },
  {
    title: 'Previsão e aconselhamento inteligente',
    text: 'Nossa plataforma é capaz de prever tendências futuras com base em dados históricos e fornecer aconselhamento personalizado. Obtenha sugestões práticas para promover ações preventivas e melhorar a sustentabilidade.',
    img: {
      src: predict,
    }
  },
  {
    title: 'Colaboração e integração',
    text: 'Possui solução flexível e colaborativa. Integre nossos dados com outras plataformas e aproveite nossa API aberta para promover a troca de informações e a cooperação entre diferentes partes interessadas.',
    img: {
      src: colab,
    }
  }
]
